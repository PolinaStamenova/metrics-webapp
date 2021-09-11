import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { citiesReducer, cityReducer, categoryReducer } from './Reducer';

const reducer = combineReducers({
  cities: citiesReducer,
  city: cityReducer,
  category: categoryReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
