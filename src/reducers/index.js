import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import userReducer from './user';
import signUp from './sign-up';
import login from './log-in';
import answer from './answer';
import addPostReducer from './addPost';
import deleteReducer from './delete';
import newsReducer from './news';

export default combineReducers({
  userReducer,
  signUp,
  login,
  answer,
  addPostReducer,
  deleteReducer,
  newsReducer,
  router: routerReducer
});
