import axios from 'axios';

const LOAD_CURRENT_SONG = 'LOAD_CURRENT_SONG';

export const loadCurrentSong = (songId) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/songs/${songId}`);
    dispatch({ type: LOAD_CURRENT_SONG, song: response.data });
  };
};

const currentSongReducer = (state = {}, action) => {
  if (action.type === LOAD_CURRENT_SONG) return action.song;
  return state;
};

export default currentSongReducer;
