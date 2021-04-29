import React, { useEffect, useRef } from 'react';
import styles from './Popup.module.css';
import PropTypes from 'prop-types';

const Popup = ({ children, title, handleClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };

    function handleClick(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        handleClose();
      }
    }
  });

  return (
    <div className={styles.popupBox}>
      <div className={styles.popupWrapper} ref={popupRef}>
        <div className={styles.popupHeader}>
          <h3 className={styles.popupTitle}>{title}</h3>
          <span className={styles.closeIcon} onClick={handleClose}>
            &#10006;
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;

Popup.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
};

Popup.defaultProps = {
  title: '...',
};
