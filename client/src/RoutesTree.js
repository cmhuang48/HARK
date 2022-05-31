import React, {useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import SongList from "./components/SongList";
import Preview from "./components/Preview";
import SingAlong from "./components/SingAlong";
import Score from "./components/Score";

export default function RoutesTree() {
  const [score, setScore] = useState(0);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<SongList />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/singalong" element={<SingAlong score={score} setScore={setScore}/>} />
        <Route path="/score" element={<Score score={score}/>} />
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
    </div>
  );
}
