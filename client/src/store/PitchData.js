import axios from "axios";

// ACTION TYPE
const LOAD_PITCH_DATA = "LOAD_PITCH_DATA";

// THUNK CREATOR
export const loadPitchData = () => {
  return async (dispatch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/pitchdata`
    );
    dispatch({ type: LOAD_PITCH_DATA, pitchData: response.data });
  };
};

// REDUCER
const pitchData = (state = [], action) => {
  if (action.type === LOAD_PITCH_DATA) return action.pitchData;
  return state;
};

export default pitchData;
