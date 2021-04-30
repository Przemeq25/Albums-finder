import React, { useRef } from 'react';
import styles from './Popup.module.css';
import PropTypes from 'prop-types';
import { useOverflowHidden } from '../../hooks/useOverflowHidden';
import { useClickAway } from '../../hooks/useClickAway';
import { useKeyPress } from '../../hooks/useKeyPress';

const Popup = ({ children, title, handleClose }) => {
  const popupRef = useRef(null);

  useOverflowHidden();
  useClickAway(popupRef, handleClose);
  useKeyPress(undefined, handleClose);

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
