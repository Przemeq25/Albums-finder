import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { closePopup, getAlbumById, searchPhrase } from './redux/actions/albums';
import List from './components/List/List';
import Container from './components/Container/Container';
import SearchInput from './components/SearchInput/SearchInput';
import ListRow from './components/ListRow/ListRow';
import ListItemText from './components/ListItemText/ListItemText';
import ListItemAction from './components/ListItemAction/ListItemAction';
import Button from './components/Button/Button';
import Popup from './components/Popup/Popup';
import AlbumDescription from './components/AlbumDescription/AlbumDescription';

function App() {
  const [phrase, setPhrase] = useState('');
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums);
  const isPopupOpen = useSelector((state) => state.isPopupOpen);
  const albumDescription = useSelector((state) => state.album.albumDescription);
  const albumTracks = useSelector((state) => state.album.albumTracks);
  const albumIsFetching = useSelector((state) => state.album.isFetching);

  useEffect(() => {
    const searchAlbums = () => dispatch(searchPhrase(phrase));

    searchAlbums();
  }, [phrase, dispatch]);

  const handleInputChange = (e) => {
    setPhrase(e.target.value);
  };

  const handlePickAlbum = (albumID) => {
    dispatch(getAlbumById(albumID));
  };

  const handleClosePopup = (e) => {
    dispatch(closePopup());
  };

  return (
    <Container>
      <SearchInput
        handleInputChange={handleInputChange}
        phrase={phrase}
        placeholder="Type artist or album name"
      />
      <List
        headerItems={['Artist', 'Album']}
        action
        isEmpty={Boolean(!phrase.length > 0 || !albums.length)}
      >
        {albums?.map(({ collectionId, artistName, collectionName }) => (
          <ListRow key={collectionId}>
            <ListItemText>{artistName}</ListItemText>
            <ListItemText cursive>{collectionName}</ListItemText>
            <ListItemAction>
              <Button handleClick={() => handlePickAlbum(collectionId)}>
                See more
              </Button>
            </ListItemAction>
          </ListRow>
        ))}
      </List>
      <Popup
        handleClose={handleClosePopup}
        isPopupOpen={isPopupOpen}
        title={albumDescription?.collectionName}
      >
        {albumIsFetching ? (
          <p>Loading...</p>
        ) : (
          <>
            <AlbumDescription
              image={albumDescription?.artworkUrl100}
              artist={albumDescription?.artistName}
              track={albumDescription?.trackCount}
              type={albumDescription?.primaryGenreName}
            />
            <List headerItems={['Songs']}>
              {albumTracks?.map(({ trackId, trackName }) => (
                <ListRow key={trackId} border>
                  <ListItemText>{trackName}</ListItemText>
                </ListRow>
              ))}
            </List>
          </>
        )}
      </Popup>
    </Container>
  );
}
export default App;
