import React from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";

function Preview({ songs, artists }) {
  const { id } = useParams();
  const song = songs.find((song) => song.id === id * 1);
  const artist = artists.find((artist) => artist.id === song?.artistId);

  return (
    <div className="preview">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0B0C10",
          boxShadow: 3,
        }}
      >
        <Link className="backLink" to="/songs" sx={{ justifyContent: "left" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <ArrowBackIosIcon />
            <Typography>Back To Song List</Typography>
          </Box>
        </Link>
        <Box
          sx={{
            marginTop: "60px",
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
          <Typography variant="h6" fontFamily="Arvo" color="white">
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
              marginTop: "15px",
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
