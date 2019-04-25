import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';
import VideoListContainer from './VideoListContainer.js';
import VideoPlayerContainer from './VideoPlayerContainer.js';

var SearchContainer = () => {

  // do these two callbacks need to return?
  const mapStateToProps = (state) => {
    VideoListContainer.mapStateToProps(state);
    VideoPlayerContainer.mapStateToProps(state);
  }

  const mapDispatchToProps = (dispatch) => {
    //const currentSearch = state.value;
    return {
      getVideoList: (currentSearch) => dispatch(handleVideoSearch(currentSearch))
    }
  }

};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default connect(mapStateToProps, mapDispatchToProps)(Search)
