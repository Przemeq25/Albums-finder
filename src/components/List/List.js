import React from 'react';
import styles from './List.module.css';
import PropTypes from 'prop-types';

const List = ({ children, headerItems, action }) => (
  <>
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
    <ul className={styles.list}>{children}</ul>
  </>
);

export default List;

List.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.bool,
  headerItems: PropTypes.arrayOf(PropTypes.string.isRequired),
};

List.defaultProps = {
  action: false,
};
