import { albumsTypes } from '../types';

const initialState = {
  albums: [],
  album: [],
  isPopupOpen: false,
};

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case albumsTypes.GET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    case albumsTypes.PICK_ALBUM:
      return {
        ...state,
        album: action.payload,
      };

    case albumsTypes.CLOSE_ALBUM_DESCRIPTION:
      return {
        ...state,
        isPopupOpen: false,
        album: [],
      };

    case albumsTypes.OPEN_ALBUM_DESCRIPTION:
      return {
        ...state,
        isPopupOpen: true,
      };

    default:
      return state;
  }
};
