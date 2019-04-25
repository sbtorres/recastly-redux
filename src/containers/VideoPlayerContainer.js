import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideo from '../actions/currentVideo.js'

var VideoPlayerContainer = () => {
  const mapStateToProps = (state) => {
    const newVideo = state.currentVideo;
    return VideoPlayer({ newVideo });
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      getVideo: (video) => dispatch(changeVideo(video))
    }
  }

};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer)

