import axios from "axios";

// ACTION TYPE
const LOAD_PITCH_DATA = "LOAD_PITCH_DATA";
const CREATE_PITCH_DATA = "CREATE_PITCH_DATA";

// THUNK CREATOR
export const loadPitchData = () => {
  return async (dispatch) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/pitchdata`
    );
    dispatch({ type: LOAD_PITCH_DATA, pitchData: response.data });
  };
};

export const createPitchData = (pitches, id) => {
  return async (dispatch) => {
    const originalPitchData = axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/pitchdata/${id}`
    ).data;
    const errorRates = originalPitchData.map((pitch, idx) =>
      pitches[idx] ? Math.abs(pitch - pitches[idx]) / pitch : 0
    );
    const averageErrorRate =
      errorRates.reduce((accum, rate) => accum + rate, 0) / errorRates.length;
    const score = (1 - averageErrorRate) * 100;
    const pitchData = {
      pitches,
      original: false,
      score,
      songId: id,
    };
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/pitchdata`,
      pitchData
    );
    dispatch({ type: CREATE_PITCH_DATA, newPitchData: response.data });
  };
};

// REDUCER
const pitchData = (state = [], action) => {
  switch (action.type) {
    case LOAD_PITCH_DATA:
      return action.pitchData;
    case CREATE_PITCH_DATA:
      return action.newPitchData;
    default:
      return state;
  }
};

export default pitchData;
