import { applyMiddleware, createStore } from 'redux';
import { albumsReducer } from './reducers/albumsReducer';
import thunk from 'redux-thunk';

const store = createStore(albumsReducer, applyMiddleware(thunk));

export default store;
