import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from 'halogen/cliploader';
import Result from './Result.jsx';
import styles from './SearchResults.scss';

const SearchResults = ({ isFetching, videos, query }) => {
  if (query.length < 1) {
    return null;
  } else if (isFetching) {
    return (
      <div className={styles.centerItem}>
        <Loader size={'30px'} color={'#ccc'} />
      </div>
    );
  } else if (videos.length < 1) {
    return (
      <div className={styles.centerItem}>
        No Results
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {videos.map(vid => (
        <Result key={vid.id.videoId} videoObject={vid} />
      ))}
    </div>
  );
};

SearchResults.propTypes = {
  query: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  videos: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  query: state.songbox.query,
  isFetching: state.songbox.isFetching,
  videos: state.songbox.videos,
});

export default connect(mapStateToProps)(SearchResults);
