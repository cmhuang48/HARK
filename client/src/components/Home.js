import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCurrentSong } from '../store';

class Home extends React.Component {
  componentDidMount() {
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
    loadCurrentSong: (songId) => dispatch(loadCurrentSong(songId)),
  };
};

export default connect((state) => state, mapDispatch)(Home);
