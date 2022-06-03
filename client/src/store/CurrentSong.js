import axios from "axios";

// ACTION TYPE
const LOAD_CURRENT_SONG = "LOAD_CURRENT_SONG";

// THUNK CREATOR
export const loadCurrentSong = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/songs/${id}`);
    dispatch({ type: LOAD_CURRENT_SONG, payload: response.data });
  };
};

// REDUCER
const currentSong = (state = {}, action) => {
  if (action.type === LOAD_CURRENT_SONG) return action.payload;
  return state;
};

export default currentSong;
