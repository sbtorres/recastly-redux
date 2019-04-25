import Redux from 'redux';


var currentVideoReducer = (state = null, action) => {
  // if (state === null) {
  //   return console.log('Your state is null!');
  // }
  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  } else {
    return state;
  }
};

export default currentVideoReducer;
