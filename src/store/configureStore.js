import { createStore, applyMiddleware, compose } from 'redux';

import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

import { history } from '../routing';

import redirect from '../middlewares/redirect';

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, routerMiddleware(history), redirect),
      window.devToolsExtension ? window.devToolsExtension() : f => f // eslint-disable-line
    )
  );

  return store;
};

export default configureStore;
