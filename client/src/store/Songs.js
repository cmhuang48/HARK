import axios from "axios";

// ACTION TYPE
const LOAD_SONGS = "LOAD_SONGS";

// THUNK CREATOR
export const loadSongs = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/songs");
    dispatch({ type: LOAD_SONGS, payload: response.data });
  };
};

// REDUCER
const songs = (state = [], action) => {
  if (action.type === LOAD_SONGS) return action.payload;
  return state;
};

export default songs;
