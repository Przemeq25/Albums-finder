import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Popup.module.css';
import PropTypes from 'prop-types';
import { useClickAway } from '../../hooks/useClickAway';
import { useKeyPress } from '../../hooks/useKeyPress';

const Popup = ({ children, title, handleClose, isPopupOpen }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    if (isPopupOpen) document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, [isPopupOpen]);

  useClickAway(popupRef, handleClose);
  useKeyPress(undefined, handleClose);

  if (!isPopupOpen) return null;

  return createPortal(
    <div className={styles.popupBox} data-testid="popup">
      <div className={styles.popupWrapper} ref={popupRef}>
        <div className={styles.popupHeader}>
          <h3 className={styles.popupTitle}>{title}</h3>
          <span className={styles.closeIcon} onClick={handleClose}>
            &#10006;
          </span>
        </div>
        {children}
      </div>
    </div>,
    document.body
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
