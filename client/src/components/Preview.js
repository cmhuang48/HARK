import React from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography } from "@mui/material";

function Preview({ songs, artists }) {
  const { id } = useParams();
  const song = songs.find((song) => song.id === id * 1);
  const artist = artists.find((artist) => artist.id === song.artistId);

  return (
    <div className="preview">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // bgcolor: "#3c2e01",
          boxShadow: 3
        }}
      >
        <Link className="backLink" to="/songs" sx={{ justifyContent: "left" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <ArrowBackIosIcon />
            <Typography>Choose a different song</Typography>
          </Box>
        </Link>

        <Box sx={{ marginTop: "60px", marginBottom: "50px", textAlign: "center", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <HeadphonesIcon />
          <h1>Wired headphones recommended!</h1>
          <h2>Headphones reduce noise and feedback, so you'll get the most accurate score.</h2>
          <h3>Watch {artist?.name}, and sing!</h3>
          <div className="vid">
            <iframe width="560" height="315" src={song?.videoURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <Link className="singLink" to={`/singalong/${id}`}>
            <Button variant="contained" sx={{ marginTop: "15px", bgcolor: "#21130d", "&:hover": { bgcolor: "#866c20" } }} style={{ m: 1, width: "20%", padding: "10px", fontSize: "1rem" }}>
              Start Singing
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

const mapState = ({ songs, artists }) => ({ songs, artists });

export default connect(mapState)(Preview);
