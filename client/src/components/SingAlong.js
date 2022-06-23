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
  const originalPitchData = pitchData.find(
    (singlePitchData) => singlePitchData.songId === song?.id
  );

  const [currentSeconds, setSeconds] = useState(0);
  const [pitches, setPitches] = useState([]);

  const onListen = (seconds) => {
    console.log("onListen");
    setSeconds(seconds);
  };

  const onEnded = () => {
    const errorRates = [];
    for (let i = 0; i < originalPitchData.pitches.length; i++) {
      const originalPitch = originalPitchData.pitches[i];
      if (pitches[i]) {
        errorRates.push(Math.abs(originalPitch - pitches[i]) / originalPitch);
      }
    }
    const averageErrorRate =
      errorRates.reduce((accum, rate) => accum + rate, 0) / errorRates.length;
    const score = (1 - averageErrorRate) * 100;
    console.log("score is", score);
    window.localStorage.setItem("score", score);
  };

  return (
    <div className="singAlong">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <video src="/../images/spotlight.mp4" muted loop autoPlay></video>
        <div className="content">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              fontFamily="Arvo"
              color="#66FCF1"
              sx={{ marginBottom: "10px" }}
            >
              {song?.name} by {artist?.name}
            </Typography>
            <ReactAudioPlayer
              src={song?.instrumentalAudio}
              autoPlay
              controls
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
  pitchData,
});

export default connect(mapState)(SingAlong);
