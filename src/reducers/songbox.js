import * as api from '../actions/songbox.js';

const defaults = {
  isDownloading: false,
  isFetching: false,
  query: '',
  videos: [],
  searchId: '',
  songs: {},
};

const reducer = (state = defaults, action) => {
  switch (action.type) {
    case api.ON_SEARCH_CHANGE: {
      return {
        ...state,
        query: action.query,
        isFetching: true,
      };
    }
    case api.SAVE_SEARCH_DATA: {
      return {
        ...state,
        videos: action.data.data.items,
        searchId: action.data.data.etag,
        isFetching: false,
      };
    }
    case api.UPDATE_LOAD_PERCENT: {
      return {
        ...state,
        songs: {
          ...state.songs,
          [action.videoId]: {
            percentLoaded: `${action.percent}%`,
          },
        },
      };
    }
    case api.NEW_IFRAME_KEY: {
      return {
        ...state,
        iframeKey: action.newKey,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
