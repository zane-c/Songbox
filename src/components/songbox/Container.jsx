import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from 'halogen/ringloader';
import * as api from '../../actions/colors.js';

import LoadingPercent from './LoadingPercent.jsx';
import Search from './Search.jsx';
import styles from './Container.scss';

class Container extends React.Component {
  componentDidMount() {
    this.props.generateColor();
  }
  render() {
    const { color } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.loader}>
          <Loader size={'40'} color={color} />
        </div>
        <div className={styles.title}>
          Songbox
        </div>
        <Search />
        <LoadingPercent />
        {/* Results */}
        {/* iframe */}
      </div>
    );
  }
}

Container.propTypes = {
  color: PropTypes.string.isRequired,
  generateColor: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  color: state.colors.color,
});

const mapDispatchToProps = dispatch => ({
  generateColor: () => {
    dispatch(api.generateColor());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
