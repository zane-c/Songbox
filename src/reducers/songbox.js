import * as api from '../actions/songbox.js';

const defaults = {
  isDownloading: false,
  isFetching: false,
  percentLoaded: '0%',
  query: '',
  videos: [],
  searchId: '',
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
    default: {
      return state;
    }
  }
};

export default reducer;
