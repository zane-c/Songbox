
export const ON_SEARCH_CHANGE = 'ON_SEARCH_CHANGE';
export const onSearchChange = query => ({
  type: ON_SEARCH_CHANGE,
  query,
});

export const SAVE_SEARCH_DATA = 'SAVE_SEARCH_DATA';
export const saveSearchData = data => ({
  type: SAVE_SEARCH_DATA,
  data,
});

export const START_DOWNLOAD = 'START_DOWNLOAD';
export const startDownload = videoId => ({
  type: START_DOWNLOAD,
  videoId,
});

export const UPDATE_LOAD_PERCENT = 'UPDATE_LOAD_PERCENT';
export const updateLoadPercent = (percent, videoId) => ({
  type: UPDATE_LOAD_PERCENT,
  percent,
  videoId,
});
