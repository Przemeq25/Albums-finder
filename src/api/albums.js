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
