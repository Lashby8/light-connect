import { applyMiddleware, createStore, compose } from 'redux';
import mainReducer from './reducers/mainReducer';
import logger from 'redux-logger';

let store = createStore(mainReducer, compose(applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
