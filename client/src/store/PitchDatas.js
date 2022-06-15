import axios from "axios";

// ACTION TYPE
const LOAD_PITCH_DATAS = "LOAD_PITCH_DATAS";
const CREATE_PITCH_DATA = "CREATE_PITCH_DATA";

// THUNK CREATOR
export const loadPitchDatas = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/pitchdatas");
    dispatch({ type: LOAD_PITCH_DATAS, payload: response.data });
  };
};

export const createPitchData = (pitches, id) => {
  return async (dispatch) => {
    const originalPitchData = axios.get(`/api/pitchdatas/${id}`).data;
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
    const response = await axios.post("/api/pitchdatas", pitchData);
    dispatch({ type: CREATE_PITCH_DATA, payload: response.data });
  };
};

// REDUCER
const pitchDatas = (state = [], action) => {
  switch (action.type) {
    case LOAD_PITCH_DATAS:
      return action.payload;
    case CREATE_PITCH_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default pitchDatas;
