import { applyMiddleware, createStore } from 'redux';
import mainReducer from './reducers/mainReducer';
import logger from 'redux-logger';

let store = createStore(mainReducer, applyMiddleware(logger));

export default store;
