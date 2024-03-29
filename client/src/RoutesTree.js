import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/Home";
import SongList from "./components/SongList";
import Preview from "./components/Preview";
import SingAlong from "./components/SingAlong";
import Score from "./components/Score";
import AboutUs from "./components/AboutUs";

function RoutesTree() {
  return (
    <div class="routesTree">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/songs" element={<SongList />} />
        <Route path="/preview/:id" element={<Preview />} />
        <Route path="/singalong/:id" element={<SingAlong />} />
        <Route path="/score/:id" element={<Score />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

const mapState = (state) => ({ state });

export default connect(mapState)(RoutesTree);
