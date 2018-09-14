import React from 'react';
import { Route } from 'react-router';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import User from '../containers/userPage/User';
import SignUp from '../containers/sign-up/Sign-up';
import Login from '../containers/log-in/Log-in';

// import requireAuthentication from '../containers/authenticated/index';

export const history = createHistory();

export const Router = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route
        path="/profile/:profileName"
        // component={requireAuthentication(User)}
        component={User}
      />
    </div>
  </ConnectedRouter>
);
