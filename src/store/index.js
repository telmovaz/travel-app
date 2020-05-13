import { createStore } from 'redux';
import hotelsReducer from './reducers/hotels-reducer';

const store = createStore(hotelsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;