import React from 'react';
import styles from './AlbumDescription.module.css';
import PropTypes from 'prop-types';

const AlbumDescription = ({ image, artist, track, type }) => {
  return (
    <div className={styles.descriptionWrapper}>
      <img src={image} alt="" className={styles.descriptionImage} />
      <h4>Artist:</h4>
      <p>{artist}</p>
      <h4>Tracks:</h4>
      <p>{track}</p>
      <h4>Type:</h4>
      <p>{type}</p>
    </div>
  );
};

export default AlbumDescription;

AlbumDescription.propTypes = {
  image: PropTypes.string,
  artist: PropTypes.string,
  track: PropTypes.number,
  type: PropTypes.string,
};
