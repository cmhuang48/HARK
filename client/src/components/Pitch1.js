import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import * as tf from "@tensorflow/tfjs";
import { Box, Button } from "@mui/material";

function Pitch({ pitches, setPitches, songs, pitchData }) {
  const { id } = useParams();
  const song = songs.find((song) => song.id === id * 1);
  const originalPitchData = pitchData.find((singlePitchData) => singlePitchData.songId === song?.id);

  useEffect(() => {
    console.log("useEffect");
    window.localStorage.removeItem("score");
    startDemo();
  }, []);

  const NUM_INPUT_SAMPLES = 1024;
  const MODEL_SAMPLE_RATE = 8000;
  const PT_OFFSET = 25.58;
  const PT_SLOPE = 63.07;
  const CONF_THRESHOLD = 0.9;
  const MODEL_URL = "https://tfhub.dev/google/tfjs-model/spice/2/default/1";
  let model;

  async function startDemo() {
    model = await tf.loadGraphModel(MODEL_URL, { fromTFHub: true });
    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(handleSuccess).catch(handleError);
  }

  function handleError(err) {
    console.log(err);
  }

  function getPitchHz(modelPitch) {
    const fmin = 10.0;
    const bins_per_octave = 12.0;
    const cqt_bin = modelPitch * PT_SLOPE + PT_OFFSET;
    return fmin * Math.pow(2.0, (1.0 * cqt_bin) / bins_per_octave);
  }

  function handleSuccess(stream) {
    let context = new AudioContext({
      latencyHint: "playback",
      sampleRate: MODEL_SAMPLE_RATE
    });

    const retryButton = document.getElementById("retryButton");
    retryButton.addEventListener("click", async () => {
      console.log("clicked");
      context.close();
      setPitches([]);
      window.location.reload();
    });

    let source = context.createMediaStreamSource(stream);
    let processor = context.createScriptProcessor(NUM_INPUT_SAMPLES, /*num_inp_channels=*/ 1, /*num_out_channels=*/ 1);

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
        setPitches((state) => [...state, pitch]);
      }
    };
  }

  const handleClick = () => {
    const errorRates = [];
    console.log("pitches", pitches);
    for (let i = 0; i < originalPitchData.pitches.length; i++) {
      const originalPitch = originalPitchData.pitches[i];
      if (pitches[i]) {
        errorRates.push(Math.abs(pitches[i] - originalPitch) / originalPitch);
      }
    }
    console.log("error rates", errorRates);
    const averageErrorRate = errorRates.reduce((accum, rate) => accum + rate, 0) / errorRates.length;
    console.log("average error rate", averageErrorRate);
    const score = (1 - averageErrorRate) * 100;
    console.log("score", score);
    window.localStorage.setItem("score", score);
    window.location.href = `/score/${id}`;
  };

  return (
    <div className="pitch">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button
          id="retryButton"
          variant="contained"
          sx={{
            m: 0.5,
            marginTop: "15px",
            bgcolor: "#1F2833",
            "&:hover": { bgcolor: "#45A29E" }
          }}
          style={{ width: "100%", padding: "15px", fontSize: ".9rem" }}
        >
          Restart
        </Button>
        <br />
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{
            m: 0.5,
            bgcolor: "#1F2833",
            "&:hover": { bgcolor: "#45A29E" }
          }}
          style={{ width: "100%", padding: "15px", fontSize: ".9rem" }}
        >
          Calculate Score Now
        </Button>
      </Box>
    </div>
  );
}

const mapState = ({ songs, pitchData }) => ({ songs, pitchData });

export default connect(mapState)(Pitch);
