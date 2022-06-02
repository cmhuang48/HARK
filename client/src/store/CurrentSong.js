import axios from 'axios';

const LOAD_CURRENT_SONG = 'LOAD_CURRENT_SONG';

export const loadCurrentSong = (songId) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/songs/${songId}`);
    dispatch({ type: LOAD_CURRENT_SONG, payload: response.data });
  };
};

const currentSong = (state = {}, action) => {
  if (action.type === LOAD_CURRENT_SONG) return action.payload;
  return state;
};

export default currentSong;
