import React from "react";
import { Routes, Route, Redirect } from "react-router-dom";

import Home from "./components/Home";
import SongList from "./components/SongList";
import Preview from "./components/Preview";
import SingAlong from "./components/SingAlong";
import Score from "./components/Score";

export default function RoutesTree() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<SongList />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/singalong" element={<SingAlong />} />
        <Route path="/score" element={<Score />} />
        <Redirect to="/home" />
      </Routes>
    </div>
  );
}
