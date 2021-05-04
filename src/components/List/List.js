import React from 'react';
import styles from './List.module.css';
import PropTypes from 'prop-types';

const List = ({ children, headerItems, action, isEmpty }) => (
  <div data-testid="list" className={styles.listWrapper}>
    <div className={styles.listHeadWrapper}>
      {headerItems?.map((item) => (
        <p className={styles.listHeadText} key={item}>
          {item}
        </p>
      ))}
      {action && (
        <span>
          <p className={styles.listHeadText}>Actions</p>
        </span>
      )}
    </div>
    {isEmpty ? (
      <h3 className={styles.infoText}>No data to display</h3>
    ) : (
      <ul className={styles.list}>{children}</ul>
    )}
  </div>
);

export default List;

List.propTypes = {
  children: PropTypes.node,
  action: PropTypes.bool,
  headerItems: PropTypes.arrayOf(PropTypes.string.isRequired),
  isEmpty: PropTypes.bool,
};

List.defaultProps = {
  action: false,
  isEmpty: false,
};
