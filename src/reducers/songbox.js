import * as actions from '../actions/songbox.js';

const defaults = {
  isDownloading: false,
  percentLoaded: '0%',
  query: '',
};

const SongboxReducer = (state = defaults, action) => {
  switch (action.type) {
    case actions.ON_SEARCH_CHANGE: {
      return {
        ...state,
        query: action.query,
      };
    }
    default: {
      return state;
    }
  }
};

export default SongboxReducer;
