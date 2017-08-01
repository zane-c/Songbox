import React from 'react';
import PropTypes from 'prop-types';

import FaCloudDownload from 'react-icons/lib/fa/cloud-download';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
// import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';
import styles from './Result.scss';

const Result = ({ videoObject }) => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <div className={styles.title}>
        {videoObject.snippet.title}
      </div>
      <div className={styles.icon}>
        <FaCloudDownload />
      </div>
      <div className={styles.icon}>
        <FaPlayCircleO />
      </div>
    </div>
  </div>
);

Result.propTypes = {
  videoObject: PropTypes.object.isRequired,
};

export default Result;
