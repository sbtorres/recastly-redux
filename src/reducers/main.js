import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';
// Changed currentVideo and videoList to currentVideoReducer and videoListReducer

var rootReducer = () => {
  combineReducers({ currentVideoReducer, videoListReducer });
};

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
