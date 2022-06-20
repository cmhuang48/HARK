import React, { useCallback } from "react";
import { connect } from "react-redux";
import { useModel } from "react-tensorflow";
import * as tf from "@tensorflow/tfjs";
import { Button } from "@mui/material";

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

function Pitch({ setPitches, newPitchData }) {
  const handleSuccess = useCallback((stream, model) => {
    console.log('handlesuccess')

    let context = new AudioContext({
      latencyHint: "playback",
      sampleRate: MODEL_SAMPLE_RATE,
    });

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

    /*processor.onaudioprocess = function (e) {

      console.log('audioprocess')

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
        //setPitches((state) => [...state, pitch]);
      }
    };*/
  }, [setPitches]);

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

  return (
    <div className="singAlong">     
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

const mapState = ({ newPitchData }) => ({ newPitchData });

export default connect(mapState)(Pitch);
