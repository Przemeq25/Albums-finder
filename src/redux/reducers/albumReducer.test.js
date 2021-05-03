import { initialState } from '../../utils/test-utils';
import { albumsTypes } from '../types';
import { albumsReducer } from './albumsReducer';

describe('albums reducer', () => {
  it('should return the initial state', () => {
    expect(albumsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handles request', () => {
    expect(
      albumsReducer(initialState, { type: albumsTypes.GET_ALBUMS_REQUEST })
    ).toEqual({ ...initialState, isFetching: true });
  });

  it('should return albums', () => {
    expect(
      albumsReducer(initialState, {
        type: albumsTypes.GET_ALBUMS_SUCCESS,
        payload: [
          {
            wrapperType: 'collection',
            collectionId: 886198403,
          },
        ],
      })
    ).toEqual({
      ...initialState,
      albums: [
        {
          wrapperType: 'collection',
          collectionId: 886198403,
        },
      ],
    });
  });
  it('should handles error', () => {
    expect(
      albumsReducer(initialState, {
        type: albumsTypes.GET_ALBUMS_ERROR,
        payload: 'Server error - 500',
      })
    ).toEqual({
      ...initialState,
      error: 'Server error - 500',
    });
  });

  it('should handles request for album description', () => {
    expect(
      albumsReducer(initialState, {
        type: albumsTypes.GET_ALBUM_DESCRIPTION_REQUEST,
      })
    ).toEqual({
      ...initialState,
      album: { ...initialState.album, isFetching: true },
    });
  });

  it('should return album description', () => {
    expect(
      albumsReducer(initialState, {
        type: albumsTypes.GET_ALBUM_DESCRIPTION_SUCCESS,
        payload: [
          {
            wrapperType: 'collection',
            collectionId: 886198403,
          },
          {
            wrapperType: 'track',
            collectionId: 886198403,
          },
        ],
      })
    ).toEqual({
      ...initialState,
      album: {
        ...initialState.album,
        albumDescription: {
          wrapperType: 'collection',
          collectionId: 886198403,
        },
        albumTracks: [
          {
            wrapperType: 'track',
            collectionId: 886198403,
          },
        ],
      },
    });
  });

  it('should handles open popup', () => {
    expect(
      albumsReducer(initialState, {
        type: albumsTypes.OPEN_ALBUM_DESCRIPTION,
      })
    ).toEqual({
      ...initialState,
      isPopupOpen: true,
    });
  });

  it('should handles close popup', () => {
    expect(
      albumsReducer(initialState, {
        type: albumsTypes.CLOSE_ALBUM_DESCRIPTION,
      })
    ).toEqual({
      ...initialState,
    });
  });
});
