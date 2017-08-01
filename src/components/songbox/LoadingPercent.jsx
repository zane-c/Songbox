import React from 'react';
import PropTypes from 'prop-types';

import styles from './LoadingPercent.scss';

const LoadingPercent = ({ percentLoaded }) => (
  <div className={styles.loadingContainer}>
    <div
      className={styles.loadingBar}
      style={{ width: percentLoaded }}
    />
    <div className={styles.percentNumber}>{percentLoaded}</div>
  </div>
);

LoadingPercent.propTypes = {
  percentLoaded: PropTypes.string.isRequired,
};

export default LoadingPercent;
