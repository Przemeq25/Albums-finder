import { albumsTypes } from '../types';
import {
  getAlbumDescription,
  searchForAlbumsOrArtists,
} from '../../api/albums';

export const searchPhrase = (phrase) => async (dispatch) => {
  try {
    const {
      data: { results },
    } = await searchForAlbumsOrArtists(phrase);
    dispatch({
      type: albumsTypes.GET_ALBUMS,
      payload: results,
    });
  } catch (e) {
    alert('Something goes wrong. Try again');
  }
};

export const closePopup = () => (dispatch) =>
  dispatch({ type: albumsTypes.CLOSE_ALBUM_DESCRIPTION });

export const getAlbumById = (albumID) => async (dispatch) => {
  dispatch({ type: albumsTypes.OPEN_ALBUM_DESCRIPTION });
  try {
    const {
      data: { results },
    } = await getAlbumDescription(albumID);
    dispatch({
      type: albumsTypes.PICK_ALBUM,
      payload: results,
    });
  } catch (e) {
    alert('Something goes wrong. Try again');
    dispatch(closePopup());
  }
};
