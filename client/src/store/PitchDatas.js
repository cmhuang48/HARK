import axios from "axios";
import * as tf from "@tensorflow/tfjs";

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

export const createPitchData = (pitchData) => {
  return async (dispatch) => {
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
