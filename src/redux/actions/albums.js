import { albumsTypes } from '../types';
import {
  getAlbumDescription,
  searchForAlbumsOrArtists,
} from '../../api/albums';

export const searchPhrase = (phrase) => async (dispatch) => {
  dispatch({ type: albumsTypes.GET_ALBUMS_REQUEST });
  try {
    const {
      data: { results },
    } = await searchForAlbumsOrArtists(phrase);
    dispatch({
      type: albumsTypes.GET_ALBUMS_SUCCESS,
      payload: results,
    });
  } catch (e) {
    alert('Something goes wrong. Try again');
    dispatch({
      type: albumsTypes.GET_ALBUMS_ERROR,
      payload: 'Something goes wrong. Try again',
    });
  }
};

export const closePopup = () => (dispatch) =>
  dispatch({ type: albumsTypes.CLOSE_ALBUM_DESCRIPTION });

export const getAlbumById = (albumID) => async (dispatch) => {
  dispatch({ type: albumsTypes.OPEN_ALBUM_DESCRIPTION });
  dispatch({ type: albumsTypes.GET_ALBUM_DESCRIPTION_REQUEST });
  try {
    const {
      data: { results },
    } = await getAlbumDescription(albumID);
    dispatch({
      type: albumsTypes.GET_ALBUM_DESCRIPTION_SUCCESS,
      payload: results,
    });
  } catch (e) {
    alert('Something goes wrong. Try again');
    dispatch({
      type: albumsTypes.GET_ALBUM_DESCRIPTION_ERROR,
      payload: 'Something goes wrong. Try again',
    });
    dispatch(closePopup());
  }
};
