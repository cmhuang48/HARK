import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import songs from "./Songs";
import artists from "./Artists";
import pitchData from "./PitchData";

const reducer = combineReducers({ songs, artists, pitchData });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from "./Songs";
export * from "./Artists";
export * from "./PitchData";
