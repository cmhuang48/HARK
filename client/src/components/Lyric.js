import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LRC from 'lrc.js';
import axios from 'axios';

const lrc_string = ``;

export default function Lyric({ currentSeconds }) {
  const { id } = useParams();
  const [lrc, setLrc] = useState(() => {
    return LRC.parse(lrc_string);
  });
  useEffect(() => {
    axios.get(`/api/songs/${id}`).then((res) => {
      setLrc(() => {
        return LRC.parse(res.data.lyrics);
      });
    });
  }, []);

  const displayLyric = () => {
    const currentIndex =
      lrc.lines.findIndex((item) => item.time >= currentSeconds) - 1;
    const futureLyric = lrc.lines[currentIndex === 0 ? 2 : currentIndex + 1];
    const prevLyric = lrc.lines[currentIndex === 0 ? 0 : currentIndex - 1];
    const lyric = lrc.lines[currentIndex === 0 ? 1 : currentIndex];
    return (
      <div>
        <p>{prevLyric?.text}</p>
        <div className="active">{lyric?.text}</div>
        <p>{futureLyric?.text}</p>
      </div>
    );
  };
  return <div>{displayLyric()}</div>;
}
