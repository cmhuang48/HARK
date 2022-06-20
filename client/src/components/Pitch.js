import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useModel } from "react-tensorflow";
import * as tf from "@tensorflow/tfjs";
import { Button } from "@mui/material";

import { createPitchData } from "../store/PitchData";

const NUM_INPUT_SAMPLES = 1024;
const MODEL_SAMPLE_RATE = 16000;
const PT_OFFSET = 25.58;
const PT_SLOPE = 63.07;
const CONF_THRESHOLD = 0.9;

function getPitchHz(modelPitch) {
  const fmin = 10.0;
  const bins_per_octave = 12.0;
  const cqt_bin = modelPitch * PT_SLOPE + PT_OFFSET;
  return fmin * Math.pow(2.0, (1.0 * cqt_bin) / bins_per_octave);
}

function Pitch({ songs, newPitchData, createPitchData }) {
  const { id } = useParams();
  // const [currentSeconds, setSeconds] = useState(0);
  const [pitches, setPitches] = useState([]);

  const song = songs.find((song) => song.id === id * 1);

  // setInterval(() => {
  //   setSeconds((currentSeconds) => currentSeconds++);
  // }, 1000);

  const handleSuccess = useCallback((stream, model) => {
    let context = new AudioContext({
      latencyHint: "playback",
      sampleRate: MODEL_SAMPLE_RATE,
    });
    console.log(song);

    // setTimeout(() => {
    //   context.close();
    //   console.log("PITCHES ARE", pitches);
    //   console.log("recording timed out");
    //   createPitchData(pitches, id);
    //   console.log("created pitch data");
    // }, 10000);

    const retryButton = document.getElementById("retryButton");
    retryButton.addEventListener("click", async () => {
      context.close();
      setPitches([]);
      window.location.reload();
    });

    let source = context.createMediaStreamSource(stream);
    let processor = context.createScriptProcessor(
      NUM_INPUT_SAMPLES,
      /*num_inp_channels=*/ 1,
      /*num_out_channels=*/ 1
    );

    // Converts audio to mono.
    processor.channelInterpretation = "speakers";
    processor.channelCount = 1;

    // Runs processor on audio source.
    source.connect(processor);
    processor.connect(context.destination);

    processor.onaudioprocess = function (e) {
      const inputData = e.inputBuffer.getChannelData(0);
      const input = tf.reshape(tf.tensor(inputData), [NUM_INPUT_SAMPLES]);
      const output = model.execute({ input_audio_samples: input });
      const uncertainties = output[0].dataSync();
      const pitches = output[1].dataSync();

      for (let i = 0; i < pitches.length; ++i) {
        let confidence = 1.0 - uncertainties[i];
        if (confidence < CONF_THRESHOLD) {
          continue;
        }
        const pitch = getPitchHz(pitches[i]);
        // console.log(pitch);
        // console.log(currentSeconds);
        setPitches((state) => [...state, pitch]);
      }
    };
  }, []);

  // console.log(pitches);

  setTimeout(() => {
    console.log("recording timed out");
    createPitchData(pitches, id);
  }, 10000);

  const onLoadCallback = useCallback(
    (model) => {
      if (model) {
        navigator.mediaDevices
          .getUserMedia({ audio: true, video: false })
          .then((data) => handleSuccess(data, model))
          .catch((err) => console.log(err));
      }
    },
    [handleSuccess]
  );

  useModel({
    modelUrl: `https://tfhub.dev/google/tfjs-model/spice/2/default/1`,
    onLoadCallback,
  });

  //console.log(song, currentSeconds, lrc)

  // const onListen = (seconds) => {
  //   setSeconds(seconds);
  // };

  return (
    <div className="singAlong">
      {/* <ReactAudioPlayer
        src={song.originalAudio}
        autoPlay
        controls
        muted
        listenInterval={3000}
        onListen={onListen}
      />  */}
      {/* <div id="recordingStatus"></div> */}
      {/* <button id="stopButton">stop</button> */}
      <Button
        id="retryButton"
        variant="contained"
        sx={{
          bgcolor: "#1F2833",
          "&:hover": { bgcolor: "#45A29E" },
        }}
        style={{
          m: 1,
          width: "40%",
          padding: "10px",
          fontFamily: "Arvo",
          fontSize: "1.5rem",
        }}
      >
        Restart
      </Button>
      <br />
      <br />
      <Button
        href={`/score/${newPitchData?.id}`}
        variant="contained"
        sx={{
          bgcolor: "#1F2833",
          "&:hover": { bgcolor: "#45A29E" },
        }}
        style={{
          m: 1,
          width: "40%",
          padding: "10px",
          fontFamily: "Arvo",
          fontSize: "1.5rem",
        }}
      >
        View Score
      </Button>
    </div>
  );
}

const mapState = ({ songs, newPitchData }) => ({ songs, newPitchData });

const mapDispatch = (dispatch) => {
  return {
    createPitchData: (pitches, id) => dispatch(createPitchData(pitches, id)),
  };
};

export default connect(mapState, mapDispatch)(Pitch);
