import React from "react";
import { connect } from "react-redux";

import {
  loadSongs,
  loadArtists,
  loadPitchDatas,
  loadCurrentSong,
  updateJustTheWayYouArePitchData,
  updateSinceUBeenGonePitchData,
  updateSweetCarolinePitchData,
  updateAThousandMilesPitchData,
} from "./store";

import Header from "./components/Header";
import RoutesTree from "./RoutesTree";
import Footer from "./components/Footer";

class App extends React.Component {
  componentDidMount() {
    this.props.loadSongs();
    this.props.loadArtists();
    this.props.loadPitchDatas();
    //just for testing----------
    this.props.loadCurrentSong(1);
    // this.props.updateJustTheWayYouArePitchData();
    this.props.updateSinceUBeenGonePitchData();
    this.props.updateSweetCarolinePitchData();
    this.props.updateAThousandMilesPitchData();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <RoutesTree />
        <Footer />
      </div>
    );
  }
}

const mapState = (state) => ({ state });

const mapDispatch = (dispatch) => {
  return {
    loadSongs: () => dispatch(loadSongs()),
    loadArtists: () => dispatch(loadArtists()),
    loadPitchDatas: () => dispatch(loadPitchDatas()),
    loadCurrentSong: (id) => dispatch(loadCurrentSong(id)),
    updateJustTheWayYouArePitchData: () =>
      dispatch(updateJustTheWayYouArePitchData()),
    updateSinceUBeenGonePitchData: () =>
      dispatch(updateSinceUBeenGonePitchData()),
    updateSweetCarolinePitchData: () =>
      dispatch(updateSweetCarolinePitchData()),
    updateAThousandMilesPitchData: () =>
      dispatch(updateAThousandMilesPitchData()),
  };
};

export default connect(mapState, mapDispatch)(App);
