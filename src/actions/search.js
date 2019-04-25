import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => (
  () => {
    return {
      type: 'HANDLE_VIDEO_SEARCH',
      key: YOUTUBE_API_KEY,
      videos: searchYouTube(q),
      // video: searchYouTube(q)
    };
  }
)
// {
//   key: YOUTUBE_API_KEY,
//   query: q
// }

// return searchYouTube(options, (videos) =>
//   ({
//     type: 'HANDLE_VIDEO_SEARCH',
//     videos: videos,
//     video: videos[0]
//   })
// );



export default handleVideoSearch;
