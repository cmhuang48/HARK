import React from 'react';
import { connect } from 'react-redux';
import { loadSongs, loadArtists, loadCurrentSong } from '../store';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadSongs();
    this.props.loadArtists();
    //just for testing----------
    this.props.loadCurrentSong(1);
  }

  render() {
    return (
      <div className="home">
        <h1>Home</h1>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadSongs: () => dispatch(loadSongs()),
    loadArtists: () => dispatch(loadArtists()),
    loadCurrentSong: (songId) => dispatch(loadCurrentSong(songId)),
  };
};

export default connect((state) => state, mapDispatch)(Home);
