import React from 'react';
import styles from './ListItemText.module.css';
import PropTypes from 'prop-types';

const ListItemText = ({ children, cursive }) => (
  <p className={cursive ? styles.cursive : null}>{children}</p>
);

export default ListItemText;

ListItemText.propTypes = {
  children: PropTypes.node.isRequired,
  cursive: PropTypes.bool,
};

ListItemText.defaultProps = {
  cursive: false,
};
