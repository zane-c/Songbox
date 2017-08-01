import React from 'react';
import PropTypes from 'prop-types';

import FaCloudDownload from 'react-icons/lib/fa/cloud-download';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import FaChevronDown from 'react-icons/lib/fa/chevron-down';
import FaChevronUp from 'react-icons/lib/fa/chevron-up';

import ResultDetails from './ResultDetails.jsx';
import LoadingPercent from './LoadingPercent.jsx';
import Preview from './Preview.jsx';
import styles from './Result.scss';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
    };
  }
  render() {
    const { videoObject } = this.props;
    const { view } = this.state;
    const expandIcon = (view === '') ? <FaChevronDown /> : <FaChevronUp />;

    let content = null;
    if (view === 'details') {
      content = <ResultDetails videoObject={videoObject} />;
    } else if (view === 'download') {
      content = (
        <div className={styles.downloadingDetails}>
          <LoadingPercent percentLoaded={'0%'} />
        </div>
      );
    } else if (view === 'preview') {
      content = <Preview videoId={videoObject.id.videoId} />;
    }

    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div
            className={styles.expander}
            onClick={() => {
              if (view === '') {
                this.setState({ view: 'details' });
              } else {
                this.setState({ view: '' });
              }
            }}
          >
            <div className={styles.title}>
              {videoObject.snippet.title}
            </div>
            <div className={styles.icon}>
              {expandIcon}
            </div>
          </div>
          <div
            className={styles.icon}
            onClick={() => this.setState({ view: 'download' })}
          >
            <FaCloudDownload />
          </div>
          <div
            className={styles.icon}
            onClick={() => this.setState({ view: 'preview' })}
          >
            <FaPlayCircleO />
          </div>
        </div>
        {content}
      </div>
    );
  }
}

Result.propTypes = {
  videoObject: PropTypes.object.isRequired,
};

export default Result;
