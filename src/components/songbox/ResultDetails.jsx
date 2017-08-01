import React from 'react';
import PropTypes from 'prop-types';

import styles from './ResultDetails.scss';

const ResultDetails = ({ videoObject }) => (
  <div className={styles.details}>
    <div className={styles.rowContainer}>
      <div className={styles.thumbnail}>
        <a
          href={`https://www.youtube.com/watch?v=${videoObject.id.videoId}`}
          target="_blank"
        >
          <img src={videoObject.snippet.thumbnails.default.url} alt={'thumbnail'} />
        </a>
      </div>
      <div className={styles.links}>
        <a
          className={styles.link}
          href={`https://www.youtube.com/watch?v=${videoObject.id.videoId}`}
          target="_blank"
        >
          {`#${videoObject.id.videoId}`}
        </a>
        <div className={styles.description}> {videoObject.snippet.description}</div>
      </div>
    </div>
  </div>
);

ResultDetails.propTypes = {
  videoObject: PropTypes.object.isRequired,
};

export default ResultDetails;
