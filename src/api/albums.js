import axios from 'axios';

const apiUrl = 'https://itunes.apple.com';

export const searchForAlbumsOrArtists = (phrase, entity = 'album') => {
  return axios.get(`${apiUrl}/search`, {
    params: {
      term: phrase || null,
      entity,
    },
  });
};

export const getAlbumDescription = (albumID, entity = 'song') => {
  return axios.get(`${apiUrl}/lookup`, {
    params: {
      id: albumID,
      entity,
    },
  });
};
