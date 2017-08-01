import _ from 'lodash';
import axios from 'axios';
import * as api from '../actions/songbox.js';

const API_KEY = 'AIzaSyB9koPG_DUUfeo95E_JpuEPjzJlJypwQLk';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
const params = {
  part: 'snippet',
  key: API_KEY,
  type: 'video',
  maxResults: '12',
};

const apiSearch = (term, callback) => {
  axios.get(ROOT_URL, { params: { ...params, q: `music ${term}` } }).then(callback);
};

const debouncedApiSearch = _.debounce(apiSearch, 500);

const middleware = store => next => (action) => {
  switch (action.type) {
    case api.ON_SEARCH_CHANGE: {
      if (action.query.length > 0) {
        debouncedApiSearch(action.query, (data) => {
          store.dispatch(api.saveSearchData(data));
        });
      }
      return next(action);
    }
    default: {
      return next(action);
    }
  }
};

export default middleware;
