import React from 'react';
import PropTypes from 'prop-types';

import FaCloudDownload from 'react-icons/lib/fa/cloud-download';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import FaChevronDown from 'react-icons/lib/fa/chevron-down';
import FaChevronUp from 'react-icons/lib/fa/chevron-up';
import styles from './Result.scss';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  render() {
    const { videoObject } = this.props;
    const { expanded } = this.state;
    const expandIcon = (expanded) ? <FaChevronUp /> : <FaChevronDown />;
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div
            className={styles.expander}
            onClick={() => this.setState({ expanded: !expanded })}
          >
            <div className={styles.title}>
              {videoObject.snippet.title}
            </div>
            <div className={styles.icon}>
              {expandIcon}
            </div>
          </div>
          <div className={styles.icon}>
            <FaCloudDownload />
          </div>
          <div className={styles.icon}>
            <FaPlayCircleO />
          </div>
        </div>
        {expanded &&
          <div className={styles.details}>
            <div className={styles.rowContainer}>
              <div className={styles.thumbnail}>
                <img src={videoObject.snippet.thumbnails.default.url} alt={'thumbnail'} />
              </div>
              <a
                className={styles.links}
                href={`https://www.youtube.com/watch?v=${videoObject.id.videoId}`}
                target="_blank"
              >
                <div>{`#${videoObject.id.videoId}`}</div>
              </a>
            </div>
            <div className={styles.description}> {videoObject.snippet.description}</div>
          </div>
        }
      </div>
    );
  }
}

Result.propTypes = {
  videoObject: PropTypes.object.isRequired,
};

export default Result;
