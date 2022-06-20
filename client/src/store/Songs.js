import axios from "axios";

// ACTION TYPE
const LOAD_SONGS = "LOAD_SONGS";

// THUNK CREATOR
export const loadSongs = () => {
  return async (dispatch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/songs`
    );
    dispatch({ type: LOAD_SONGS, songs: response.data });
  };
};

// REDUCER
const songs = (state = [], action) => {
  if (action.type === LOAD_SONGS) return action.songs;
  return state;
};

export default songs;
