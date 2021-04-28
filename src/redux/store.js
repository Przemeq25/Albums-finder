import { createStore } from 'redux';
import { albumsReducer } from './reducers/albumsReducer';

const store = createStore(albumsReducer);

export default store;
