import React from 'react';
import PropTypes from 'prop-types';

import styles from './Preview.scss';

const Preview = ({ videoId }) => (
  <div className={styles.container}>
    <iframe
      title={videoId}
      className={styles.iframe}
      src={`https://www.youtube.com/embed/${videoId}`}
    />
  </div>
);

Preview.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default Preview;
