import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import GeneralStore from 'redux-general-store';
import currentSongReducer, { loadCurrentSong } from './CurrentSong';

//not sure if env variable will work, necessary bc we are using a separate server file
const PORT = process.env.port || 8080;

export const GS = new GeneralStore(`http://localhost:${PORT}`, [
  'songs',
  'lyrics',
]);

const reducer = combineReducers({ currentSongReducer, ...GS.reducerBody });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './CurrentSong';
