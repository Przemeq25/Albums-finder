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
  const albumDescription = useSelector((state) => state.album);

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

  const handleClosePopup = () => {
    dispatch(closePopup());
  };

  return (
    <Container>
      <SearchInput handleInputChange={handleInputChange} phrase={phrase} />
      <List headerItems={['Artist', 'Album']} action>
        {albums?.map((item) => (
          <ListRow key={item.collectionId}>
            <ListItemText>{item.artistName}</ListItemText>
            <ListItemText cursive>{item.collectionName}</ListItemText>
            <ListItemAction>
              <Button handleClick={() => handlePickAlbum(item.collectionId)}>
                See more
              </Button>
            </ListItemAction>
          </ListRow>
        ))}
      </List>
      {isPopupOpen && (
        <Popup
          handleClose={handleClosePopup}
          title={albumDescription[0]?.collectionName}
        >
          {console.log(albumDescription)}
          <AlbumDescription
            image={albumDescription[0]?.artworkUrl100}
            artist={albumDescription[0]?.artistName}
            track={albumDescription[0]?.trackCount}
            type={albumDescription[0]?.primaryGenreName}
          />
          <List headerItems={['Songs']}>
            {albumDescription?.slice(1).map((song) => (
              <ListRow key={song.trackId} border>
                <ListItemText>{song.trackName}</ListItemText>
              </ListRow>
            ))}
          </List>
        </Popup>
      )}
    </Container>
  );
}
export default App;
