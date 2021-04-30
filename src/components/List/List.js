import React from 'react';
import styles from './List.module.css';
import PropTypes from 'prop-types';

const List = ({ children, headerItems, action, isEmpty, noResult }) => (
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
    {(() => {
      if (noResult)
        return (
          <h3 className={styles.infoText}>Your search term was not found</h3>
        );
      else if (isEmpty)
        return <h3 className={styles.infoText}>Search for favorite albums</h3>;
      else return <ul className={styles.list}>{children}</ul>;
    })()}
  </>
);

export default List;

List.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.bool,
  headerItems: PropTypes.arrayOf(PropTypes.string.isRequired),
  isEmpty: PropTypes.bool,
  noResult: PropTypes.bool,
};

List.defaultProps = {
  action: false,
  isEmpty: false,
  noResult: false,
};
