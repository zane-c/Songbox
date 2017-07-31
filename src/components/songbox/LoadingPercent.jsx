import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './LoadingPercent.scss';

const LoadingPercent = ({ isDownloading, percentLoaded }) => {
  if (isDownloading) {
    return (
      <div className={styles.loadingContainer}>
        <div
          className={styles.loadingBar}
          style={{ width: percentLoaded }}
        />
        <div className={styles.percentNumber}>{percentLoaded}</div>
      </div>
    );
  }
  return null;
};

LoadingPercent.propTypes = {
  isDownloading: PropTypes.bool.isRequired,
  percentLoaded: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  isDownloading: state.songbox.isDownloading,
  percentLoaded: state.songbox.percentLoaded,
});

export default connect(mapStateToProps)(LoadingPercent);
