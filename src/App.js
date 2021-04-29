import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { searchPhrase } from './redux/actions/albums';
import List from './components/List/List';
import Container from './components/Container/Container';
import SearchInput from './components/SearchInput/SearchInput';
import ListRow from './components/ListRow/ListRow';
import ListItemText from './components/ListItemText/ListItemText';
import ListItemAction from './components/ListItemAction/ListItemAction';
import Button from './components/Button/Button';

function App() {
  const [phrase, setPhrase] = useState('');
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums);

  useEffect(() => {
    const searchAlbums = () => dispatch(searchPhrase(phrase));

    searchAlbums();
  }, [phrase, dispatch]);

  const handleInputChange = (e) => {
    setPhrase(e.target.value);
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
              <Button>See more</Button>
            </ListItemAction>
          </ListRow>
        ))}
      </List>
    </Container>
  );
}

export default App;
