import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import reduxPromise from 'redux-promise';
import io from 'socket.io-client';
import { Router, browserHistory } from 'react-router';

import reducers from './reducers/index';
import routes from './routes';

// const socket = io(`${location.protocol}//${location.hostname}:3000`);
// console.log(socket);

const createStoreWithMiddleware = applyMiddleware(reduxPromise, thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('body'));
