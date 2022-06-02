import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import currentSongReducer, { loadCurrentSong } from './CurrentSong';

//not sure if env variable will work, necessary bc we are using a separate server file
const PORT = process.env.port || 8080;

const reducer = combineReducers({ currentSongReducer });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './CurrentSong';
