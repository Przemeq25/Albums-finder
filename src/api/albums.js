import axios from 'axios';

const apiUrl = 'https://itunes.apple.com';

export const searchForAlbumsOrArtists = (phrase) => {
  return axios.get(`${apiUrl}/search`, {
    params: {
      term: phrase || null,
      entity: 'album',
    },
  });
};

export const getAlbumDescription = (albumID) => {
  return axios.get(`${apiUrl}/lookup`, {
    params: {
      id: albumID,
      entity: 'song',
    },
  });
};
