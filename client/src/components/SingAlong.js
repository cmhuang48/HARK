import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ReactAudioPlayer from 'react-audio-player';
import axios from "axios";

export default function SingAlong({ score, setScore }) {
  const [songs, setSongs] = useState([])
  const [song, setSong] = useState("/audio/Sweet-Caroline_vocals.mp3");

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

    console.log(song)
  return (
    <div className="singAlong">
      <span>
        {/* {questions[currQues].difficulty} */}
        Score : {score}
      </span>
      {songs.map((item) => {
        return <div key={item.id}>
          {item.name} 
          <button 
            type='button' 
            onClick={() => setSong(item.instrumentalAudio.replace('/client/public', '') + '.mp3')}
          >
            Play
            </button>
        </div>
      })}
      <ReactAudioPlayer
          src={song}
          autoPlay
          controls
        />
      <Button
        onClick={() => {
          handleScore(1);
        }}
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
      >
        View Score
      </Button>
    </div>
  );
}
