import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import ReactAudioPlayer from 'react-audio-player';
// import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import axios from 'axios';
import Recorder from './Recorder';
import Lyric from './Lyric';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function SingAlong({ score, setScore }) {
  const { id } = useParams();
  const [currentSeconds, setSeconds] = useState(0);
  const [song, setSong] = useState('/audio/Never-Give-You-Up.mp3');
  const [userTranscript, setUserTranscript] = useState('');

  // const {
  //   transcript,
  //   listening,
  //   resetTranscript,
  //   browserSupportsSpeechRecognition,
  // } = useSpeechRecognition();

  // useEffect(() => {
  //   setUserTranscript(transcript);
  // }, [transcript]);

  // console.log(transcript.split(' '));

  // const startListening = () =>
  //   SpeechRecognition.startListening({ continuous: true });

  const handleScore = (num) => {
    //TBD
    setScore(score + num); //TBD
  };

  useEffect(() => {
    axios.get(`/api/songs/${id}`).then((res) => {
      console.log('>>>>>>', res.data.lyrics);
      setSong(res.data);
    });
  }, []);

  //Note:score temporarily displayed
  const onListen = (seconds) => {
    setSeconds(seconds);
  };

  return (
    <div className="singAlong">
      <br />
      <br />
      <br />
      <br />
      <br />
      <span>Score : {score}</span>
      <p>original song</p>
      <ReactAudioPlayer
        src={song.originalAudio}
        // autoPlay
        controls
        // muted
        listenInterval={500}
        onListen={onListen}
      />
      <p>instrumental</p>
      <ReactAudioPlayer
        src={song.instrumentalAudio}
        // autoPlay
        controls
        // muted
        listenInterval={500}
        onListen={onListen}
      />
      {/* <Recorder /> */}
      <Lyric currentSeconds={currentSeconds} />

      {/* <div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button onClick={startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div> */}
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
