import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/Home";
import SongList from "./components/SongList";
import SongSelect from "./components/SongSelect";
import Preview from "./components/Preview";
import SingAlong from "./components/SingAlong";
import Score from "./components/Score";

function RoutesTree() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/songs" element={<SongList />} />
        <Route path="/preview/:id" element={<Preview />} />
        <Route path="/singalong/:id" element={<SingAlong />} />
        <Route path="/score" element={<Score />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

const mapState = (state) => ({ state });

export default connect(mapState)(RoutesTree);
