
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
