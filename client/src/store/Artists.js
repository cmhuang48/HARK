import axios from "axios";

// ACTION TYPE
const LOAD_ARTISTS = "LOAD_ARTISTS";

// THUNK CREATOR
export const loadArtists = () => {
  return async (dispatch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/artists`
    );
    dispatch({ type: LOAD_ARTISTS, artists: response.data });
  };
};

// REDUCER
const artists = (state = [], action) => {
  if (action.type === LOAD_ARTISTS) return action.artists;
  return state;
};

export default artists;
