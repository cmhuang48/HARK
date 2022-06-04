import axios from "axios";
import * as tf from "@tensorflow/tfjs";
import justTheWayYouAreVocals from "../audio/Just-The-Way-You-Are_vocals.mp3";

// ACTION TYPE
const LOAD_PITCH_DATAS = "LOAD_PITCH_DATAS";
const CREATE_PITCH_DATA = "CREATE_PITCH_DATA";
const UPDATE_JUSTTHEWAYYOUARE_PITCH_DATA = "UPDATE_JUSTTHEWAYYOUARE_PITCH_DATA";
const UPDATE_SINCEUBEENGONE_PITCH_DATA = "UPDATE_SINCEUBEENGONE_PITCH_DATA";
const UPDATE_SWEETCAROLINE_PITCH_DATA = "UPDATE_SWEETCAROLINE_PITCH_DATA";
const UPDATE_ATHOUSANDMILES_PITCH_DATA = "UPDATE_ATHOUSANDMILES_PITCH_DATA";

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

export const updateJustTheWayYouArePitchData = () => {
  return async (dispatch) => {
    // const NUM_INPUT_SAMPLES = 1024;
    // const MODEL_SAMPLE_RATE = 16000;
    // const PT_OFFSET = 24.374;
    // const PT_SLOPE = 62.511;
    // const CONF_THRESHOLD = 0.9;
    // const MODEL_URL = "https://tfhub.dev/google/tfjs-model/spice/1/default/1";

    // let model = await tf.loadGraphModel(MODEL_URL, { fromTFHub: true });
    // navigator.mediaDevices
    //   .getUserMedia({ audio: true, video: false })
    //   .then(handleSuccess)
    //   .catch(handleError);

    // function handleError(err) {
    //   console.log(err);
    // }

    // function getPitchHz(modelPitch) {
    //   const fmin = 10.0;
    //   const bins_per_octave = 12.0;
    //   const cqt_bin = modelPitch * PT_SLOPE + PT_OFFSET;
    //   return fmin * Math.pow(2.0, (1.0 * cqt_bin) / bins_per_octave);
    // }

    // function handleSuccess(stream) {
    //   let context = new AudioContext({
    //     latencyHint: "playback",
    //     sampleRate: MODEL_SAMPLE_RATE,
    //   });

    //   let source = context.createMediaStreamSource(stream);
    //   let processor = context.createScriptProcessor(
    //     NUM_INPUT_SAMPLES,
    //     /*num_inp_channels=*/ 1,
    //     /*num_out_channels=*/ 1
    //   );

    //   // Converts audio to mono.
    //   processor.channelInterpretation = "speakers";
    //   processor.channelCount = 1;

    //   // Runs processor on audio source.
    //   source.connect(processor);
    //   processor.connect(context.destination);

    //   processor.onaudioprocess = function (e) {
    //     const inputData = e.inputBuffer.getChannelData(0);
    //     const input = tf.reshape(tf.tensor(inputData), [NUM_INPUT_SAMPLES]);
    //     const output = model.execute({ input_audio_samples: input });
    //     const uncertainties = output[0].dataSync();
    //     const pitches = output[1].dataSync();

    //     for (let i = 0; i < pitches.length; ++i) {
    //       let confidence = 1.0 - uncertainties[i];
    //       if (confidence < CONF_THRESHOLD) {
    //         continue;
    //       }
    //       console.log(getPitchHz(pitches[i]));
    //     }
    //   };
    // }

    const pitches = [440];

    // setInterval(getPitchHz(), 1);

    const pitchData = {
      pitches: pitches,
      original: true,
      songId: 1,
    };
    const response = axios.put("/api/pitchdatas/1", pitchData);
    dispatch({
      type: UPDATE_JUSTTHEWAYYOUARE_PITCH_DATA,
      payload: response.data,
    });
  };
};
export const updateSinceUBeenGonePitchData = () => {
  return async (dispatch) => {
    const pitches = [440];
    const pitchData = {
      pitches: pitches,
      original: true,
      songId: 2,
    };
    const response = axios.put("/api/pitchdatas/2", pitchData);
    dispatch({
      type: UPDATE_SINCEUBEENGONE_PITCH_DATA,
      payload: response.data,
    });
  };
};

export const updateSweetCarolinePitchData = () => {
  return async (dispatch) => {
    const pitches = [440];
    const pitchData = {
      pitches: pitches,
      original: true,
      songId: 3,
    };
    const response = axios.put("/api/pitchdatas/3", pitchData);
    dispatch({ type: UPDATE_SWEETCAROLINE_PITCH_DATA, payload: response.data });
  };
};

export const updateAThousandMilesPitchData = () => {
  return async (dispatch) => {
    const pitches = [440];
    const pitchData = {
      pitches: pitches,
      original: true,
      songId: 4,
    };
    const response = axios.put("/api/pitchdatas/4", pitchData);
    dispatch({
      type: UPDATE_ATHOUSANDMILES_PITCH_DATA,
      payload: response.data,
    });
  };
};

// REDUCER
const pitchDatas = (state = [], action) => {
  switch (action.type) {
    case LOAD_PITCH_DATAS:
      return action.payload;
    case CREATE_PITCH_DATA:
      return [...state, action.payload];
    case UPDATE_JUSTTHEWAYYOUARE_PITCH_DATA:
      return state.map((payload) =>
        payload.id !== action.payload.id ? payload : action.payload
      );
    case UPDATE_SINCEUBEENGONE_PITCH_DATA:
      return state.map((payload) =>
        payload.id !== action.payload.id ? payload : action.payload
      );
    case UPDATE_SWEETCAROLINE_PITCH_DATA:
      return state.map((payload) =>
        payload.id !== action.payload.id ? payload : action.payload
      );
    case UPDATE_ATHOUSANDMILES_PITCH_DATA:
      return state.map((payload) =>
        payload.id !== action.payload.id ? payload : action.payload
      );
    default:
      return state;
  }
};

export default pitchDatas;
