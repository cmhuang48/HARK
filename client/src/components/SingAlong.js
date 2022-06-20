import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import Lyric from "./Lyric";
import Pitch from "./Pitch";
import { createPitchData } from "../store";

function SingAlong({ songs, artists, createPitchData }) {
  const { id } = useParams();

  const song = songs.find((song) => song.id === id * 1);
  const artist = artists.find((artist) => artist.id === song?.artistId);

  const [currentSeconds, setSeconds] = useState(0);
  const [pitches, setPitches] = useState([]);

  const onListen = useCallback((seconds) => {
    setSeconds(seconds);
  }, []);

  const onEnded = useCallback(() => {
    createPitchData(pitches, id)
  }, [createPitchData, pitches, id]);

  return (
    <div className="singAlong">
      <video src="/../images/spotlight.mp4" muted loop autoPlay></video>
      <div className="content">
        <h1>
          {song?.name} by {artist?.name}
        </h1>
        <ReactAudioPlayer
          src={song?.instrumentalAudio}
          autoPlay
          controls
          muted
          listenInterval={500}
          onListen={onListen}
          onEnded={onEnded}
        />
        <Lyric currentSeconds={currentSeconds} />
        <Pitch setPitches={setPitches} />
      </div>
    </div>
  );
}

const mapState = ({ songs, artists }) => ({
  songs,
  artists,
});

const mapDispatch = (dispatch) => {
  return {
    createPitchData: (pitches, id) => dispatch(createPitchData(pitches, id)),
  };
};


export default connect(mapState, mapDispatch)(SingAlong);
