import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Preview({ songs, artists }) {
  const { id } = useParams();
  const song = songs.find((song) => song.id === id * 1);
  const artist = artists.find((artist) => artist.id === song?.artistId);

  return (
    <div className="preview">
      <Box
        sx={{
          backgroundColor: "#0B0C10",
          boxShadow: 3,
        }}
      >
        <Button
          href="/songs"
          size="large"
          sx={{ justifyContent: "left", marginLeft: "15px" }}
        >
          <ArrowBackIcon sx={{ color: "#45A29E" }} />{" "}
          <Typography
            variant="h6"
            fontFamily="Arvo"
            fontWeight="700"
            backgroundColor="#0B0C10"
            color="#45A29E"
          >
            Back To Songs
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0B0C10",
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            marginTop: "20px",
            marginBottom: "50px",
            textAlign: "center",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeadphonesIcon
            style={{ color: "white", width: "50px", height: "auto" }}
          />
          <Typography variant="h5" fontFamily="Arvo" color="white">
            Wired headphones recommended!
          </Typography>
          <br />
          <Typography variant="h6" fontFamily="Arvo" color="white">
            Headphones reduce noise and feedback, so you'll get the most
            accurate score.
          </Typography>
          <br />
          <Typography variant="h6" fontFamily="Arvo" color="#66FCF1">
            Watch {artist?.name} sing {song?.name}!
          </Typography>
          <br />
          <div className="vid">
            <iframe
              width="560"
              height="315"
              src={song?.videoURL}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Button
            href={`/singalong/${id}`}
            variant="contained"
            sx={{
              marginTop: "20px",
              bgcolor: "#1F2833",
              "&:hover": { bgcolor: "#45A29E" },
            }}
            style={{ m: 1, width: "20%", padding: "10px", fontSize: "1rem" }}
          >
            Start Singing
          </Button>
        </Box>
      </Box>
    </div>
  );
}

const mapState = ({ songs, artists }) => ({ songs, artists });

export default connect(mapState)(Preview);
