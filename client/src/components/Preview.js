import React from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import Button from "@mui/material/Button";

function Preview({ songs, artists }) {
  const { id } = useParams();
  const song = songs.find((song) => song.id === id * 1);
  const artist = artists.find((artist) => artist.id === song.artistId);

  return (
    <div className="preview">
      <HeadphonesIcon />
      <h1>Wired headphones recommended!</h1>
      <h2>
        Headphones reduce noise and feedback, so you'll get the most accurate
        score.
      </h2>
      <h3>Watch {artist?.name} sing it!</h3>
      <iframe
        width="560"
        height="315"
        src={song?.videoURL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Link to={`/singalong/${id}`}>
        <Button variant="contained">Start Singing</Button>
      </Link>
    </div>
  );
}

const mapState = ({ songs, artists }) => ({ songs, artists });

export default connect(mapState)(Preview);
