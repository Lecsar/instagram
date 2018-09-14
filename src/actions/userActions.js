/* eslint-disable no-shadow, no-undef */

import {
  OPEN_POST,
  CLOSE_POST,
  ON_CHANGE_POST,
  RESET_OPEN_POST_ID,
  ON_RESET_SEARCH_INPUT,
  ON_CHANGE_COMMENT_LINE,
  REQUEST_LOAD_USER_DATA,
  SUCCESS_LOAD_USER_DATA,
  USER_ERROR,
  ON_CHANGE_SEARCH_INPUT,
  SEARCH_INPUT_GET_USERS_DATA_REQUEST,
  SEARCH_INPUT_GET_USERS_DATA_SUCCESS,
  SEARCH_INPUT_GET_USERS_DATA_ERROR,
  TIMER_DELAY_FOR_SEARCH_INPUT,
  TOOGLE_FOLLOW_ON_USER_REQUEST,
  TOOGLE_FOLLOW_ON_USER_SUCCESS,
  TOOGLE_FOLLOW_ON_USER_ERROR,
  createDataForPostRequest
} from '../const';

export const onRequestUserData = currentProfileName => (dispatch) => {
  dispatch({
    type: REQUEST_LOAD_USER_DATA
  });

  // eslint-disable-next-line
  fetch(`http://localhost:8000/getuser/${currentProfileName}`)
    .then(res => res.json())
    .then(payload => dispatch({
        type: SUCCESS_LOAD_USER_DATA,
        payload
      }))
    .catch(({ message }) => dispatch({ type: USER_ERROR, payload: new Error(message) }));
};

export const onOpenPost = payload => ({
  type: OPEN_POST,
  payload
});

export const onClosePost = () => ({
  type: CLOSE_POST
});

export const onChangePost = payload => ({
  type: ON_CHANGE_POST,
  payload
});

export const onResetOpenPostId = () => ({
  type: RESET_OPEN_POST_ID
});

// поправить работу с таймером
const timer = {
  id: null,
  timeOfLastCall: null
};

export const onChangeSearchInput = payload => (dispatch) => {
  new Promise((res) => {
    // changed value in search input
    dispatch({
      type: ON_CHANGE_SEARCH_INPUT,
      payload
    });

    // res (value of search input without spaces and in lower case)
    res(payload.toLowerCase().trim());
  })
    // send request on server for get data about users
    .then((valueForRequest) => {
      const nowTime = Date.now();

      // if the delay time does not end, then cancel the previous request and execute the new one
      if (nowTime - timer.timeOfLastCall < TIMER_DELAY_FOR_SEARCH_INPUT) {
        clearTimeout(timer.id);
      }

      if (valueForRequest) {
        new Promise((resolve) => {
          // changed state on isRequest:true
          dispatch({
            type: SEARCH_INPUT_GET_USERS_DATA_REQUEST
          });

          // artificial delay to avoid unnecessary requests
          timer.timeOfLastCall = nowTime;

          timer.id = setTimeout(
            () => resolve(valueForRequest),
            TIMER_DELAY_FOR_SEARCH_INPUT
          );
        })
          // request on server
          .then(profileName => fetch(`http://localhost:8000/findUsers/${profileName}`))
          // parse answer
          .then(res => res.json())
          // show finded users
          .then(payload => dispatch({
              type: SEARCH_INPUT_GET_USERS_DATA_SUCCESS,
              payload
            }));
      } else {
        dispatch({
          type: ON_RESET_SEARCH_INPUT
        });
      }
    })
    // if have some errors after request show banner with error
    .catch(({ message: payload }) => dispatch({
        type: SEARCH_INPUT_GET_USERS_DATA_ERROR,
        payload
      }));
};

export const onResetSearchInput = () => ({
  type: ON_RESET_SEARCH_INPUT
});

export const onChangeCommentLine = payload => ({
  type: ON_CHANGE_COMMENT_LINE,
  payload
});

export const toggleFollowOnUserRequest = payload => (dispatch) => {
  dispatch({
    type: TOOGLE_FOLLOW_ON_USER_REQUEST
  });

  fetch('http://localhost:8000/toggleFollow', createDataForPostRequest(payload))
    .then(res => res.json())
    .then((payload) => {
      setTimeout(() => {
        dispatch({ type: TOOGLE_FOLLOW_ON_USER_SUCCESS, payload });
      }, 500);
    })
    .catch(payload => dispatch({ type: TOOGLE_FOLLOW_ON_USER_ERROR, payload }));
};
