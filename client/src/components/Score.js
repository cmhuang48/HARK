import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import ScoreDonut from "./ScoreDonut";

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
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0B0C10",
          boxShadow: 3,
          padding: "50px",
        }}
      >
        {isNaN(score) ? (
          <Typography
            variant="h5"
            fontFamily="Arvo"
            color="#66FCF1"
            margin="10px"
            text-align="center"
          >
            Sorry, there was an error. You may need to sing longer. Please try
            again!
          </Typography>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#0B0C10",
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h4"
              fontFamily="Arvo"
              color="#45A29E"
              margin="10px"
              text-align="center"
            >
              You sang {song?.name} by {artist?.name}!
            </Typography>
            <Typography variant="h5" fontFamily="Arvo" color="white">
              Your Score:
            </Typography>
            <Typography
              variant="h3"
              fontFamily="Arvo"
              color="#66FCF1"
              margin="10px"
              text-align="center"
            >
              {Math.round(score)} / 100
            </Typography>
            <ScoreDonut score={score} />
            {score < 50 && (
              <Typography
                variant="h5"
                fontFamily="Arvo"
                color="#45A29E"
                margin="10px"
                text-align="center"
              >
                Meh, keep working and try again. You can do better!
              </Typography>
            )}
            {score > 50 && score < 80 && (
              <Typography
                variant="h5"
                fontFamily="Arvo"
                color="#45A29E"
                margin="10px"
                text-align="center"
              >
                Nice job, but you have room to improve!
              </Typography>
            )}
            {score > 80 && score < 90 && (
              <Typography
                variant="h5"
                fontFamily="Arvo"
                color="#45A29E"
                margin="10px"
                text-align="center"
              >
                Amazing vocals, but you still have room to improve!
              </Typography>
            )}
            {score > 90 && score < 100 && (
              <Typography
                variant="h5"
                fontFamily="Arvo"
                color="#45A29E"
                margin="10px"
                text-align="center"
              >
                Fantastic, you're a natural!
              </Typography>
            )}
          </Box>
        )}
        <Button
          href="/songs"
          variant="contained"
          sx={{
            marginTop: "15px",
            bgcolor: "#1F2833",
            "&:hover": { bgcolor: "#45A29E" },
          }}
          style={{ m: 1, width: "40%", padding: "10px", fontSize: "1rem" }}
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
          style={{ m: 1, width: "40%", padding: "10px", fontSize: "1rem" }}
        >
          Return to Home
        </Button>
      </Box>
    </div>
  );
}

const mapState = ({ songs, artists }) => ({ songs, artists });

export default connect(mapState)(Score);
