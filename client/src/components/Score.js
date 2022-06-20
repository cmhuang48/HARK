import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

function Score({ songs, artists, pitchData }) {
  const id = useParams();
  const singlePitchData = pitchData.find(
    (singlePitchData) => singlePitchData.id === id * 1
  );
  const song = songs.find((song) => song.id === singlePitchData?.songId);
  const artist = artists.find((artist) => artist.id === song?.artistId);

  return (
    <div className="score">
      <h2>
        You sang {song?.name} by {artist?.name}
      </h2>
      <span className="title">Final Score : {singlePitchData?.score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/songs"
      >
        Sing Another Song?
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Return to Home
      </Button>
    </div>
  );
}

const mapState = ({ songs, artists, pitchData }) => ({
  songs,
  artists,
  pitchData,
});

export default connect(mapState)(Score);
