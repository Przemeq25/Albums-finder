import React from 'react';
import styles from './ListRow.module.css';
import PropTypes from 'prop-types';

const ListRow = ({ children, border }) => (
  <li
    className={`${styles.listItemWrapper} ${
      border ? styles.listItemBorder : styles.listItemShadow
    }`}
  >
    {children}
  </li>
);

export default ListRow;

ListRow.propTypes = {
  children: PropTypes.node.isRequired,
  border: PropTypes.bool,
};

ListRow.defaultProps = {
  border: false,
};
