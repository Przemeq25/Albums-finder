import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ children, handleClick }) => {
  return (
    <button
      className={styles.button}
      onClick={handleClick}
      data-testid="seemore-button"
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};
