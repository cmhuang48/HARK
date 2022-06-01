import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GS, loadCurrentSong } from '../store';

function Home(state) {
  console.log(GS, state);
  useEffect(() => state.dispatch(loadCurrentSong(2)), []);

  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
}

const mapDispatch = (dispatch) => {
  return {
    // genericGet: (route, model) => dispatch(GS.genericGet(route, model)),
    // loadCurrentSong: (songId) => dispatch(loadCurrentSong(songId)),
  };
};

export default connect((state) => state, null)(Home);
