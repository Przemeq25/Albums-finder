import { albumsTypes } from '../types';
import { searchForAlbumsOrArtists } from '../../api/albums';

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
