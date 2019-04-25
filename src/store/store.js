import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';
//import { constants } from 'perf_hooks';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const initialState = {
  videos: [],
  video: null
}

const configureStore = (rootReducer) => {
  console.log(initialState);
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
}

const store = configureStore(rootReducer)

export default store;