import logo from './logo.svg';
import './App.css';
import * as tf from '@tensorflow/tfjs';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const NUM_INPUT_SAMPLES = 1024;
  const MODEL_SAMPLE_RATE = 16000;
  const PT_OFFSET = 24.374;
  const PT_SLOPE = 62.511;
  const CONF_THRESHOLD = 0.9;
  const MODEL_URL = 'https://tfhub.dev/google/tfjs-model/spice/1/default/1';
  let model;

  async function startDemo() {
    model = await tf.loadGraphModel(MODEL_URL, { fromTFHub: true });
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(handleSuccess).catch(handleError);
  }

  function handleError(err) {
    console.log(err);
  }

  function getPitchHz(modelPitch) {
    const fmin = 10.0;
    const bins_per_octave = 12.0;
    const cqt_bin = modelPitch * PT_SLOPE + PT_OFFSET;
    return fmin * Math.pow(2.0, (1.0 * cqt_bin / bins_per_octave))
  }

  function handleSuccess(stream) {
    let context = new AudioContext({
      latencyHint: "playback",
      sampleRate: MODEL_SAMPLE_RATE,
    });

    let source = context.createMediaStreamSource(stream);
    let processor = context.createScriptProcessor(
          NUM_INPUT_SAMPLES,
          /*num_inp_channels=*/ 1,
          /*num_out_channels=*/ 1);

    // Converts audio to mono.
    processor.channelInterpretation = 'speakers';
    processor.channelCount = 1

    // Runs processor on audio source.
    source.connect(processor);
    processor.connect(context.destination);

    processor.onaudioprocess = function(e) {
      const inputData = e.inputBuffer.getChannelData(0);
      const input = tf.reshape(tf.tensor(inputData), [NUM_INPUT_SAMPLES])
      const output = model.execute({"input_audio_samples": input });
      const uncertainties = output[0].dataSync();
      const pitches = output[1].dataSync();

      for (let i = 0; i < pitches.length; ++i) {
        let confidence = 1.0 - uncertainties[i];
        if (confidence < CONF_THRESHOLD) {
          continue;
        }
        console.log(getPitchHz(pitches[i]));
      }
    }
  }

  // This needs a microphone to work, check for exceptions.
  //startDemo();
  useEffect(() => {
    startDemo();
  },[])

  useEffect(() => {
    axios.get('/api/songs')
    .then(res => {
      console.log('res',res)
  })
  .catch((err) => {
    console.log('err', err)
  })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
