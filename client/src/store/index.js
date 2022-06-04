import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import songs from "./Songs";
import artists from "./Artists";
import pitchDatas from "./PitchDatas";
import currentSong from "./CurrentSong";

//not sure if env variable will work, necessary bc we are using a separate server file
const PORT = process.env.port || 8080;

const reducer = combineReducers({ songs, artists, pitchDatas, currentSong });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from "./Songs";
export * from "./Artists";
export * from "./PitchDatas";
export * from "./CurrentSong";
