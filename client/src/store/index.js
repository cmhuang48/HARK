import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import songs, { loadSongs } from './Songs';
import artists, { loadArtists } from './Artists';
import currentSong, { loadCurrentSong } from './CurrentSong';

//not sure if env variable will work, necessary bc we are using a separate server file
const PORT = process.env.port || 8080;

const reducer = combineReducers({ songs, artists, currentSong });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

export * from './Songs';
export * from './Artists';
export * from './CurrentSong';
