import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const mapStateToProps = state => ({
  percentLoaded: state.songbox.percentLoaded,
});

export default connect(mapStateToProps)(LoadingPercent);
