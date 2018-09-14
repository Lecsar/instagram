import { history } from '../routing';

import { ROUTING } from '../const';

const redirect = () => next => (action) => {
  const { payload, type } = action;

  if (type === ROUTING) {
    history[payload.method](payload.nextUrl);
  }

  return next(action);
};

export default redirect;
