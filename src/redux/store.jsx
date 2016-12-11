import { createStore, applyMiddleware } from 'redux';
// use combineReducers from redux-immutable for immutableJS state instae of combineReducers from redux
import { combineReducers } from 'redux-immutable';
import * as reducers from './reducers';
import Immutable from 'immutable';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const reducer = combineReducers(reducers);
export default createStore(
  reducer,
  Immutable.Map(),
  applyMiddleware(
    thunk,
    createLogger({stateTransformer: state => state.toJS()})
  )
);
