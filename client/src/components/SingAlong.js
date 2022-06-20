import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
// import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import Lyric from "./Lyric";
import Pitch from "./Pitch";

// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function SingAlong({ songs, artists, newPitchData }) {
  const { id } = useParams();
  const song = songs.find((song) => song.id === id * 1);
  const artist = artists.find((artist) => artist.id === song?.artistId);

  const [currentSeconds, setSeconds] = useState(0);

  // const [userTranscript, setUserTranscript] = useState("");

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

  const onListen = (seconds) => {
    setSeconds(seconds);
  };

  return (
    <div className="singAlong">
      <video src="/../images/spotlight.mp4" muted loop autoPlay></video>
      <div className="content">
        <h1>
          {song?.name} by {artist?.name}
        </h1>
        <ReactAudioPlayer
          src={song?.instrumentalAudio}
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
      </div>
    </div>
  );
}

const mapState = ({ songs, artists, newPitchData }) => ({
  songs,
  artists,
  newPitchData,
});

export default connect(mapState)(SingAlong);
