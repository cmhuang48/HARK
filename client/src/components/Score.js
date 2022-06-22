import React from "react";
import { connect } from "react-redux";
import { Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";

function Score({ songs, artists }) {
  const { id } = useParams();
  const song = songs.find((song) => song.id === id * 1);
  const artist = artists.find((artist) => artist.id === song?.artistId);
  const score = window.localStorage.getItem("score");

  return (
    <div className="score">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0B0C10",
          boxShadow: 3,
        }}
      >
        <h2>
          You sang {song?.name} by {artist?.name}!
        </h2>
        <span className="title">Your Score: {score}</span>
        <Button
          href="/songs"
          variant="contained"
          sx={{
            marginTop: "15px",
            bgcolor: "#1F2833",
            "&:hover": { bgcolor: "#45A29E" },
          }}
          style={{ m: 1, width: "20%", padding: "10px", fontSize: "1rem" }}
        >
          Sing Another Song?
        </Button>
        <Button
          href="/"
          variant="contained"
          sx={{
            marginTop: "15px",
            bgcolor: "#1F2833",
            "&:hover": { bgcolor: "#45A29E" },
          }}
          style={{ m: 1, width: "20%", padding: "10px", fontSize: "1rem" }}
        >
          Return to Home
        </Button>
      </Box>
    </div>
  );
}

const mapState = ({ songs, artists }) => ({ songs, artists });

export default connect(mapState)(Score);
