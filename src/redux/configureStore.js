import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import citiesReducer from './Reducer';

const reducer = combineReducers({
  cities: citiesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
