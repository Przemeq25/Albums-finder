import axios from 'axios';
import { searchForAlbumsOrArtists, getAlbumDescription } from './albums';

jest.mock('axios');
const data = {
  resultCount: 2,
  results: [
    {
      wrapperType: 'collection',
      collectionId: 886198403,
    },
  ],
};

describe('fetch data', () => {
  it('should fetches albums successfully', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(searchForAlbumsOrArtists('ac/dc')).resolves.toEqual(data);
  });

  it('should fetches album description successfully', async () => {
    const collectionId = data.results[0].collectionId;
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(getAlbumDescription(collectionId)).resolves.toEqual(data);
  });
});
