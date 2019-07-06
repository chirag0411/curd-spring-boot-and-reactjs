import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { routerReducer } from 'react-router-redux';

const store = createStore(
  combineReducers({
    routing: routerReducer
  }),
  {},
  applyMiddleware(thunk, promise)
);
export default store;