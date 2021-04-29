import React from 'react';
import styles from './ListItemAction.module.css';
import PropTypes from 'prop-types';

const ListItemAction = ({ children }) => (
  <div className={styles.listItemAction}>{children}</div>
);

export default ListItemAction;

ListItemAction.propTypes = {
  children: PropTypes.node.isRequired,
};
