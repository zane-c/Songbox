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

const waitThenDownload = () => {
  setTimeout(() => {
    document.querySelector('#flvto').contentWindow.document
      .querySelector('a[class="button huge track"]').click();
  }, 1000);
};

const waitForFinishDownload = (updatePercent) => {
  setTimeout(() => {
    const watchDownload = setInterval(() => {
      const percent = document.querySelector('#flvto')
        .contentWindow.document.querySelector('div[class="percent"]');
      if (percent === null) {
        clearInterval(watchDownload);
        waitThenDownload();
      } else {
        updatePercent(percent.innerText);
      }
    }, 600);
  }, 1000);
};

const waitForContinue = (updatePercent) => {
  setTimeout(() => {
    const skip = document.querySelector('#flvto').contentWindow
      .document.querySelector('a[class="continue"]');
    if (skip) {
      skip.click();
    }
    waitForFinishDownload(updatePercent);
  }, 500);
};


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
    case api.START_DOWNLOAD: {
      next(action);
      document.querySelector('#flvto').src = 'http://www.flvto.biz/';
      setTimeout(() => {
        const doc = document.querySelector('#flvto').contentWindow.document;
        doc.querySelector('#convertUrl').value = `https://www.youtube.com/watch?v=${action.videoId}`;
        doc.querySelector('button[class="button huge convert orange"]').click();

        const updatePercent = (percent) => {
          store.dispatch(api.updateLoadPercent(percent, action.videoId));
        };
        waitForContinue(updatePercent);
      }, 1500);
      return null;
    }
    case api.CLICK_DOWNLOAD: {
      return next(action);
    }
    default: {
      return next(action);
    }
  }
};

export default middleware;
