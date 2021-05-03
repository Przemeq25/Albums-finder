/**
 * @jest-environment node
 */

import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import { getAlbumById, searchPhrase } from './albums';
import {
  initialState,
  responseForSearchPhrase,
  responseForGetAlbumById,
} from '../../utils/test-utils';

const createStore = configureMockStore([thunk]);

describe('Albums actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should get albums successfully', () => {
    let expectedActions = [
      { type: 'GET_ALBUMS_REQUEST' },
      {
        type: 'GET_ALBUMS_SUCCESS',
        payload: responseForSearchPhrase.response,
      },
    ];

    fetchMock.getOnce(
      `/search?term=${responseForSearchPhrase.phrase}&entity=album`,
      {
        data: {
          result: responseForSearchPhrase.response,
        },
      }
    );

    const store = createStore(initialState);

    return store
      .dispatch(searchPhrase(responseForSearchPhrase.phrase))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('should get album description successfully', () => {
    let expectedActions = [
      {
        type: 'OPEN_ALBUM_DESCRIPTION',
      },
      { type: 'GET_ALBUM_DESCRIPTION_REQUEST' },
      {
        type: 'GET_ALBUM_DESCRIPTION_SUCCESS',
        payload: responseForGetAlbumById.response,
      },
    ];

    fetchMock.getOnce(
      `/lookup?id=${responseForGetAlbumById.collectionId}&entity=song`,
      {
        data: {
          results: responseForGetAlbumById.response,
        },
      }
    );

    const store = createStore(initialState);

    return store
      .dispatch(getAlbumById(responseForGetAlbumById.collectionId))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
