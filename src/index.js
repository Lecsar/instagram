import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import { Router } from './routing';

const store = configureStore();

/* eslint-disable */

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('insta-app')
);
