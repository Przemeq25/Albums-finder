import { albumsTypes } from '../types';

const initialState = {
  albums: [],
  album: {},
};

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case albumsTypes.GET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };

    default:
      return state;
  }
};
