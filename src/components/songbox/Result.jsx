import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FaCloudDownload from 'react-icons/lib/fa/cloud-download';
import FaPlayCircleO from 'react-icons/lib/fa/play-circle-o';
import FaChevronDown from 'react-icons/lib/fa/chevron-down';
import FaChevronUp from 'react-icons/lib/fa/chevron-up';

import { startDownload as download } from '../../actions/songbox.js';
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
    const { videoObject, startDownload, percentLoaded } = this.props;
    const { view } = this.state;
    const expandIcon = (view === '') ? <FaChevronDown /> : <FaChevronUp />;

    let content = null;
    if (view === 'details') {
      content = <ResultDetails videoObject={videoObject} />;
    } else if (view === 'download') {
      content = (
        <div className={styles.downloadingDetails}>
          <LoadingPercent percentLoaded={percentLoaded} />
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
            onClick={() => {
              if (view === 'download') {
                this.setState({ view: '' });
              } else {
                this.setState({ view: 'download' }, startDownload);
              }
            }}
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

Result.defaultProps = {
  percentLoaded: '0%',
};

Result.propTypes = {
  startDownload: PropTypes.func.isRequired,
  videoObject: PropTypes.object.isRequired,
  percentLoaded: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.videoObject.id.videoId;
  if (state.songbox.songs[id]) {
    return {
      percentLoaded: state.songbox.songs[id].percentLoaded,
    };
  }
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  startDownload: () => {
    dispatch(download(ownProps.videoObject.id.videoId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
