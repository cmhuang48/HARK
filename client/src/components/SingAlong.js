import React, { useEffect, useState ,  useRef} from "react";
import { Button } from "@mui/material";
import ReactAudioPlayer from 'react-audio-player';
import axios from "axios";
import LRC from 'lrc.js'

const lrc_string = `[00:05.10]AAAAAAAAAAAAAAAA
[00:10.20]BBBBBBBBBBBBBBB
[00:15.30]CCCCCCCCCCCCCCCCC
[00:20.40]DDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
[00:20.14]EEEEE
[00:26.48]FFFF
[00:38.41]GGGG
[00:44.49]HHHH
[00:50.75]III
[00:54.56]J
[00:57.90]K
[01:03.57]L
[01:10.15]M
[01:21.39]N
[01:24.40]O
[01:28.00]P
[01:34.25]Q
[01:40.31]R
[01:46.46]S
[01:58.39]T
[02:04.68]U
[02:10.79]V
[02:14.67]W
[02:17.95]X
[02:23.51]Y
[02:30.25]Z
[02:36.19]ht
[02:42.67]不g
[02:47.96]尽s
[02:51.72]每g
[02:54.99]不怕e`;
 
  
export default function SingAlong({ score, setScore }) {
  // const NUM_INPUT_SAMPLES = 1024;
  // const MODEL_SAMPLE_RATE = 16000;
  // const PT_OFFSET = 24.374;
  // const PT_SLOPE = 62.511;
  // const CONF_THRESHOLD = 0.9;
  // const MODEL_URL = "https://tfhub.dev/google/tfjs-model/spice/1/default/1";
  // let model;

  // async function startDemo() {
  //   model = await tf.loadGraphModel(MODEL_URL, { fromTFHub: true });
  //   navigator.mediaDevices
  //     .getUserMedia({ audio: true, video: false })
  //     .then(handleSuccess)
  //     .catch(handleError);
  // }

  // function handleError(err) {
  //   console.log(err);
  // }

  // function getPitchHz(modelPitch) {
  //   const fmin = 10.0;
  //   const bins_per_octave = 12.0;
  //   const cqt_bin = modelPitch * PT_SLOPE + PT_OFFSET;
  //   return fmin * Math.pow(2.0, (1.0 * cqt_bin) / bins_per_octave);
  // }

  // function handleSuccess(stream) {
  //   let context = new AudioContext({
  //     latencyHint: "playback",
  //     sampleRate: MODEL_SAMPLE_RATE,
  //   });

  //   let source = context.createMediaStreamSource(stream);
  //   let processor = context.createScriptProcessor(
  //     NUM_INPUT_SAMPLES,
  //     /*num_inp_channels=*/ 1,
  //     /*num_out_channels=*/ 1
  //   );

  //   // Converts audio to mono.
  //   processor.channelInterpretation = "speakers";
  //   processor.channelCount = 1;

  //   // Runs processor on audio source.
  //   source.connect(processor);
  //   processor.connect(context.destination);

  //   processor.onaudioprocess = function (e) {
  //     const inputData = e.inputBuffer.getChannelData(0);
  //     const input = tf.reshape(tf.tensor(inputData), [NUM_INPUT_SAMPLES]);
  //     const output = model.execute({ input_audio_samples: input });
  //     const uncertainties = output[0].dataSync();
  //     const pitches = output[1].dataSync();

  //     for (let i = 0; i < pitches.length; ++i) {
  //       let confidence = 1.0 - uncertainties[i];
  //       if (confidence < CONF_THRESHOLD) {
  //         continue;
  //       }
  //       console.log(getPitchHz(pitches[i]));
  //     }
  //   };
  // }

  // This needs a microphone to work, check for exceptions.
  //startDemo();
  
  
  const [songs, setSongs] = useState([])
  const [currentSeconds, setSeconds] = useState(0)
  const [lrc, setLrc] = useState(() => {
    return LRC.parse(lrc_string)
  })
  const [song, setSong] = useState("/audio/Never-Give-You-Up.mp3");

  const handleScore = (num) => {
    //TBD
    setScore(score + num); //TBD
  };

  useEffect(() => {
    axios.get('/api/songs')
    .then(res => {
      console.log(res)
      setSongs(res.data);
    })
  }, [])

    //Note:score temporarily displayed

  console.log(song, currentSeconds, lrc)

  const onListen = (seconds) => {
    setSeconds(seconds)
  }

  const displayLyric = () => {
    const currentIndex = lrc.lines.findIndex((item) =>  item.time >= currentSeconds)
    const lyric = lrc.lines[currentIndex === 0 ? 0 : currentIndex - 1]
    return <div>{lyric?.text}</div>
  }
  
  return (
    <div className="singAlong">
      <br />
      <br />
      <br />
      <br />
      <br />
      <span>
        Score : {score}
      </span>
      {/* {songs.map((item) => {
        return <div key={item.id}>
          {item.name} 
          <button 
            type='button' 
            onClick={() => setSong(item.instrumentalAudio.replace('/client/public', '') + '.mp3')}
          >
            Play
            </button>
        </div>
      })} */}

      <ReactAudioPlayer
          src={song}
          autoPlay
          controls
          muted
          listenInterval={3000}
          onListen={onListen}
        />
    
      {displayLyric()}
      {/*<Button
        onClick={() => {
          handleScore(1);
        }}
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
      >
        View Score
      </Button>*/}
    </div>
  );
}
