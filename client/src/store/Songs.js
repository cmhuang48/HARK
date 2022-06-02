import axios from 'axios';

const LOAD_SONGS = 'LOAD_SONGS';

export const loadSongs = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/songs');
    dispatch({ type: LOAD_SONGS, payload: response.data });
  };
};

const songs = (state = [], action) => {
  if (action.type === LOAD_SONGS) return action.payload;
  return state;
};

export default songs;
