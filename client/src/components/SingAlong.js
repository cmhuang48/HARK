import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import Lyric from "./Lyric";
import Pitch from "./Pitch";

function SingAlong({ songs, artists, pitchData }) {
  const { id } = useParams();
  const song = songs.find((song) => song.id === id * 1);
  const artist = artists.find((artist) => artist.id === song?.artistId);
  const originalPitchData = pitchData.find(
    (singlePitchData) => singlePitchData.songId === song?.id
  );

  console.log(originalPitchData)

  const [currentSeconds, setSeconds] = useState(0);
  const [pitches, setPitches] = useState([]);

  const onListen = useCallback((seconds) => {
    setSeconds(seconds);
  }, []);

  const onEnded = useCallback(() => {
    const errorRates = originalPitchData.pitches.map((pitch, idx) => {
      return pitches[idx] ? Math.abs(pitch - pitches[idx]) / pitch : 0;
    });
    const averageErrorRate =
      errorRates.reduce((accum, rate) => accum + rate, 0) / errorRates.length;
    const score = (1 - averageErrorRate) * 100;
    console.log("score is", score);
    window.localStorage.setItem("score", score);
  },[originalPitchData?.pitches, pitches]);

  return (
    <div className="singAlong">
      <video src="/../images/spotlight.mp4" muted loop autoPlay></video>
      <div className="content">
        <h1 className="song-title">
          {song?.name} by {artist?.name}
        </h1>
        <ReactAudioPlayer
          src={song?.instrumentalAudio}
          autoPlay
          // controls
          // muted
          listenInterval={500}
          onListen={onListen}
          onEnded={onEnded}
        />
        <div className="lyrics">
          <Lyric currentSeconds={currentSeconds} />
        </div>

        <Pitch setPitches={setPitches} />
      </div>
    </div>
  );
}

const mapState = ({ songs, artists, pitchData }) => ({
  songs,
  artists,
  pitchData,
});

export default connect(mapState)(SingAlong);
