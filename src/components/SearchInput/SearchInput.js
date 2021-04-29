import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchInput.module.css';

const SearchInput = ({ phrase, handleInputChange }) => (
  <input
    className={styles.input}
    type="text"
    autoFocus
    placeholder="Type artist or album name"
    value={phrase}
    onChange={handleInputChange}
  />
);

export default SearchInput;

SearchInput.propTypes = {
  phrase: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  phrase: '',
};
