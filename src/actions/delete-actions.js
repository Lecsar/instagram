import {
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  createDataForPostRequest
} from '../const';

/* eslint-disable no-shadow */

export const deletePostRequest = payload => (dispatch) => {
  dispatch({
    type: DELETE_POST_REQUEST,
    payload: payload.deletedPostId
  });

  fetch('http://localhost:8000/deletePost', createDataForPostRequest(payload))
    .then(res => res.json())
    .then(payload => dispatch({ type: DELETE_POST_SUCCESS, payload }))
    .catch(payload => dispatch({ type: DELETE_POST_ERROR, payload }));
};

export const deleteCommentRequest = payload => (dispatch) => {};
