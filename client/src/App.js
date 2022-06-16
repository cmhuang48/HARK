import React from "react";
import { connect } from "react-redux";

import { loadSongs, loadArtists, loadPitchDatas } from "./store";

import Header from "./components/Header";
import RoutesTree from "./RoutesTree";
import Footer from "./components/Footer";

class App extends React.Component {
  componentDidMount() {
    this.props.loadSongs();
    this.props.loadArtists();
    this.props.loadPitchDatas();
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
  };
};

export default connect(mapState, mapDispatch)(App);
