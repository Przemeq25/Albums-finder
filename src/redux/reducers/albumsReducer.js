import { albumsTypes } from '../types';

const initialState = {
  isFetching: false,
  error: '',
  albums: [],
  album: {
    isFetching: false,
    error: '',
    albumDescription: {},
    albumTracks: [],
  },
  isPopupOpen: false,
};

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case albumsTypes.GET_ALBUMS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case albumsTypes.GET_ALBUMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        albums: action.payload,
      };
    case albumsTypes.GET_ALBUMS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case albumsTypes.OPEN_ALBUM_DESCRIPTION:
      return {
        ...state,
        isPopupOpen: true,
      };
    case albumsTypes.GET_ALBUM_DESCRIPTION_REQUEST:
      return {
        ...state,
        album: { ...state.album, isFetching: true },
      };
    case albumsTypes.GET_ALBUM_DESCRIPTION_SUCCESS:
      return {
        ...state,
        album: {
          ...state.album,
          isFetching: false,
          albumDescription: action.payload[0],
          albumTracks: action.payload.slice(1),
        },
      };
    case albumsTypes.GET_ALBUM_DESCRIPTION_ERROR:
      return {
        ...state,
        album: { ...state.album, isFetching: false, error: action.payload },
      };

    case albumsTypes.CLOSE_ALBUM_DESCRIPTION:
      return {
        ...state,
        isPopupOpen: false,
        album: initialState.album,
      };

    default:
      return state;
  }
};
