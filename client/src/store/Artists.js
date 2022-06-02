import axios from 'axios';

const LOAD_ARTISTS = 'LOAD_ARTISTS';

export const loadArtists = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/artists');
    dispatch({ type: LOAD_ARTISTS, payload: response.data });
  };
};

const artists = (state = [], action) => {
  if (action.type === LOAD_ARTISTS) return action.payload;
  return state;
};

export default artists;
