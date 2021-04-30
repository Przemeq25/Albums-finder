import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchInput.module.css';

const SearchInput = ({ phrase, handleInputChange, placeholder }) => (
  <input
    className={styles.input}
    type="text"
    autoFocus
    placeholder={placeholder}
    value={phrase}
    onChange={handleInputChange}
  />
);

export default SearchInput;

SearchInput.propTypes = {
  phrase: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

SearchInput.defaultProps = {
  phrase: '',
};
