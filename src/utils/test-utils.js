import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { albumsReducer } from '../redux/reducers/albumsReducer';
import thunk from 'redux-thunk';

//util to test App with provider
export function renderWrapper(
  ui,
  {
    initialState,
    store = createStore(albumsReducer, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export const responseForSearchPhrase = {
  phrase: 'coldplay mylo xyloto ',
  response: [
    {
      wrapperType: 'collection',
      collectionType: 'Album',
      artistId: 471744,
      collectionId: 726372830,
      amgArtistId: 435023,
      artistName: 'Coldplay',
      collectionName: 'Mylo Xyloto',
      collectionCensoredName: 'Mylo Xyloto',
      artistViewUrl: 'https://music.apple.com/us/artist/coldplay/471744?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/mylo-xyloto/726372830?uo=4',
      artworkUrl60:
        'https://is3-ssl.mzstatic.com/image/thumb/Music4/v4/0d/bc/ea/0dbceab6-0aea-08a4-36d2-81a2618e85cd/source/60x60bb.jpg',
      artworkUrl100:
        'https://is3-ssl.mzstatic.com/image/thumb/Music4/v4/0d/bc/ea/0dbceab6-0aea-08a4-36d2-81a2618e85cd/source/100x100bb.jpg',
      collectionPrice: 9.99,
      collectionExplicitness: 'notExplicit',
      trackCount: 14,
      copyright: '℗ 2011 Parlophone Records Ltd, a Warner Music Group Company',
      country: 'USA',
      currency: 'USD',
      releaseDate: '2011-10-19T07:00:00Z',
      primaryGenreName: 'Alternative',
    },
    {
      wrapperType: 'collection',
      collectionType: 'Album',
      artistId: 218352633,
      collectionId: 481892198,
      amgArtistId: 1083352,
      artistName: 'Vitamin String Quartet',
      collectionName: "Vitamin String Quartet Performs Coldplay's Mylo Xyloto",
      collectionCensoredName:
        "Vitamin String Quartet Performs Coldplay's Mylo Xyloto",
      artistViewUrl:
        'https://music.apple.com/us/artist/vitamin-string-quartet/218352633?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/vitamin-string-quartet-performs-coldplays-mylo-xyloto/481892198?uo=4',
      artworkUrl60:
        'https://is5-ssl.mzstatic.com/image/thumb/Music/v4/8c/8d/3c/8c8d3cd0-5522-05fd-f033-d97cbac46f1b/source/60x60bb.jpg',
      artworkUrl100:
        'https://is5-ssl.mzstatic.com/image/thumb/Music/v4/8c/8d/3c/8c8d3cd0-5522-05fd-f033-d97cbac46f1b/source/100x100bb.jpg',
      collectionPrice: 9.99,
      collectionExplicitness: 'notExplicit',
      trackCount: 11,
      copyright: '℗ 2011 Vitamin Records',
      country: 'USA',
      currency: 'USD',
      releaseDate: '2011-11-15T08:00:00Z',
      primaryGenreName: 'Rock',
    },
  ],
};

export const responseForGetAlbumById = {
  collectionId: 514504432,
  response: [
    {
      wrapperType: 'collection',
      collectionType: 'Album',
      artistId: 355898104,
      collectionId: 514504432,
      amgArtistId: 1100957,
      artistName: 'Rita Ora',
      collectionName: 'How We Do (Party) - Single',
      collectionCensoredName: 'How We Do (Party) - Single',
      artistViewUrl:
        'https://music.apple.com/us/artist/rita-ora/355898104?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/how-we-do-party-single/514504432?uo=4',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/70/99/51/70995116-ca41-a65e-b793-f805656e3808/source/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/70/99/51/70995116-ca41-a65e-b793-f805656e3808/source/100x100bb.jpg',
      collectionPrice: 1.29,
      collectionExplicitness: 'explicit',
      contentAdvisoryRating: 'Explicit',
      trackCount: 1,
      copyright:
        '℗ 2012 Roc Nation LLC, under exclusive license to Columbia Records, a Division of Sony Music Entertainment',
      country: 'USA',
      currency: 'USD',
      releaseDate: '2012-03-27T07:00:00Z',
      primaryGenreName: 'Pop',
    },
    {
      wrapperType: 'track',
      kind: 'song',
      artistId: 355898104,
      collectionId: 514504432,
      trackId: 514504434,
      artistName: 'Rita Ora',
      collectionName: 'How We Do (Party) - Single',
      trackName: 'How We Do (Party)',
      collectionCensoredName: 'How We Do (Party) - Single',
      trackCensoredName: 'How We Do (Party)',
      artistViewUrl:
        'https://music.apple.com/us/artist/rita-ora/355898104?uo=4',
      collectionViewUrl:
        'https://music.apple.com/us/album/how-we-do-party/514504432?i=514504434&uo=4',
      trackViewUrl:
        'https://music.apple.com/us/album/how-we-do-party/514504432?i=514504434&uo=4',
      previewUrl:
        'https://audio-ssl.itunes.apple.com/itunes-assets/Music/2f/7f/27/mzm.yaterurg.aac.p.m4a',
      artworkUrl30:
        'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/70/99/51/70995116-ca41-a65e-b793-f805656e3808/source/30x30bb.jpg',
      artworkUrl60:
        'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/70/99/51/70995116-ca41-a65e-b793-f805656e3808/source/60x60bb.jpg',
      artworkUrl100:
        'https://is2-ssl.mzstatic.com/image/thumb/Music/v4/70/99/51/70995116-ca41-a65e-b793-f805656e3808/source/100x100bb.jpg',
      collectionPrice: 1.29,
      trackPrice: 1.29,
      releaseDate: '2012-03-20T07:00:00Z',
      collectionExplicitness: 'explicit',
      trackExplicitness: 'explicit',
      discCount: 1,
      discNumber: 1,
      trackCount: 1,
      trackNumber: 1,
      trackTimeMillis: 247213,
      country: 'USA',
      currency: 'USD',
      primaryGenreName: 'Pop',
      contentAdvisoryRating: 'Explicit',
      isStreamable: true,
    },
  ],
};

export const initialState = {
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
