import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
        <Route path="/preview/:id" element={<Preview />} />
        <Route path="/singalong/:id" element={<SingAlong />} />
        <Route path="/score" element={<Score />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
