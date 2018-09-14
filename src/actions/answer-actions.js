import {
  OPEN_TEXT_INPUT_FOR_ANSWER,
  CLOSE_TEXT_INPUT_FOR_ANSWER,
  ON_CHANGE_INPUT_FOR_ANSWER,
  REQUEST_ANSWER_ON_COMMENT,
  SUCCESS_ANSWER_ON_COMMENT,
  ERROR_ANSWER_ON_COMMENT,
  createDataForPostRequest,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR
} from '../const';

/* eslint-disable no-undef, no-shadow */

export const openTextInputForAnswer = payload => ({
  type: OPEN_TEXT_INPUT_FOR_ANSWER,
  payload
});

export const closeTextInputForAnswer = () => ({
  type: CLOSE_TEXT_INPUT_FOR_ANSWER
});

export const onChangeInputForAnswer = payload => ({
  type: ON_CHANGE_INPUT_FOR_ANSWER,
  payload
});

export const answerOnComment = payload => (dispatch) => {
  dispatch({
    type: REQUEST_ANSWER_ON_COMMENT
  });

  fetch('http://localhost:8000/addComment', createDataForPostRequest(payload))
    .then(res => res.json())
    .then(payload => dispatch({
        type: SUCCESS_ANSWER_ON_COMMENT,
        payload
      }))
    .catch(({ message: payload }) => dispatch({ type: ERROR_ANSWER_ON_COMMENT, payload }));
};

export const addComment = payload => (dispatch) => {
  dispatch({
    type: ADD_COMMENT_REQUEST
  });

  fetch('http://localhost:8000/addComment', createDataForPostRequest(payload))
    .then(res => res.json())
    .then(payload => dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload
      }))
    .catch(payload => dispatch({ type: ADD_COMMENT_ERROR, payload }));
};
