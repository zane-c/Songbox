import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as api from '../../actions/songbox.js';
import styles from './Search.scss';

const Search = ({ query, onSearchChange }) => (
  <input
    className={styles.input}
    onChange={event => onSearchChange(event.target.value)}
    placeholder={'Search'}
    value={query}
  />
);

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  query: state.songbox.query,
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: (query) => {
    dispatch(api.onSearchChange(query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
