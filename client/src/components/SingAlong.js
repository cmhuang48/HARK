import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { Box, Typography } from "@mui/material";
import Lyric from "./Lyric";
import Pitch from "./Pitch1";

function SingAlong({ songs, artists, pitchData }) {
  const { id } = useParams();
  const song = songs.find((song) => song.id === id * 1);
  const artist = artists.find((artist) => artist.id === song?.artistId);
  const originalPitchData = pitchData.find((singlePitchData) => singlePitchData.songId === song?.id);

  const [currentSeconds, setSeconds] = useState(0);
  const [pitches, setPitches] = useState([]);

  const onListen = (seconds) => {
    setSeconds(seconds);
  };

  const onEnded = () => {
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
    if (window.localStorage.score) {
      window.location.href = `/score/${id}`;
    }
  };

  return (
    <div className="singAlong">
      <video src="/../images/spotlight.mp4" muted loop autoPlay></video>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="content">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Typography variant="h3" fontFamily="Arvo" color="#66FCF1" sx={{ marginTop: "15px", marginBottom: "15px" }}>
              {song?.name} by {artist?.name}
            </Typography>
            <ReactAudioPlayer
              src={song?.instrumentalAudio}
              autoPlay
              // controls
              // muted
              listenInterval={500}
              onListen={onListen}
              onEnded={onEnded}
            />
            <Lyric currentSeconds={currentSeconds} />
            <Pitch pitches={pitches} setPitches={setPitches} />
          </Box>
        </div>
      </Box>
    </div>
  );
}

const mapState = ({ songs, artists, pitchData }) => ({
  songs,
  artists,
  pitchData
});

export default connect(mapState)(SingAlong);
