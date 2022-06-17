import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import ReactAudioPlayer from "react-audio-player";
// import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import axios from "axios";
import Lyric from "./Lyric";
import Pitch from "./Pitch";
import { connect } from "react-redux";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function SingAlong({ songs, artists, score, setScore }) {
  const { id } = useParams();
  const [currentSeconds, setSeconds] = useState(0);
  const [userTranscript, setUserTranscript] = useState("");

  const song = songs.find((song) => song.id === id * 1);
  const artist = artists.find((artist) => artist.id === song?.artistId);

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

  //Note:score temporarily displayed
  const onListen = (seconds) => {
    setSeconds(seconds);
  };

  return (
    <div className="singAlong">
      <video src="/../images/spotlight.mp4" muted loop autoPlay></video>
      <div className="content">
        <br />
        <br />
        <br />
        <br />
        <h1>
          {song?.name} by {artist?.name}
        </h1>
        <p>original song</p>
        <p>instrumental</p>
        <ReactAudioPlayer
          src={song.instrumentalAudio}
          autoPlay
          controls
          // muted
          listenInterval={500}
          onListen={onListen}
        />
        <Lyric currentSeconds={currentSeconds} />
        <Pitch />
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
    </div>
  );
}

const mapState = ({ songs, artists }) => ({ songs, artists });

export default connect(mapState)(SingAlong);
