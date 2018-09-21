import {
  GET_NEWS_REQUEST,
  createDataForPostRequest,
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR,
  TOOGLE_COMMENT_INPUT,
  NEWS_ADD_COMMENT_REQUEST,
  NEWS_ADD_COMMENT_SUCCESS,
  NEWS_ADD_COMMENT_ERROR,
  NEWS_TOOGLE_LIKE_REQUEST,
  NEWS_TOOGLE_LIKE_SUCCESS,
  NEWS_TOOGLE_LIKE_ERROR,
  NEWS_OPEN_ANSWER_INPUT,
  NEWS_DELETE_COMMENT_REQUEST,
  NEWS_DELETE_COMMENT_SUCCESS,
  NEWS_DELETE_COMMENT_ERROR
} from '../const';

/* eslint-disable no-shadow */

export const getNewsRequest = profileName => dispatch => {
  dispatch({
    type: GET_NEWS_REQUEST
  });

  fetch(
    'http://localhost:8000/getNews',
    createDataForPostRequest({ profileName })
  )
    .then(res => res.json())
    .then(payload => dispatch({ type: GET_NEWS_SUCCESS, payload }))
    .catch(payload => dispatch({ type: GET_NEWS_ERROR, payload }));
};

export const toogleCommentInput = payload => ({
  type: TOOGLE_COMMENT_INPUT,
  payload
});

export const newsAddCommentRequest = payload => dispatch => {
  const { isLogin: profileName } = payload;

  dispatch({ type: NEWS_ADD_COMMENT_REQUEST });

  fetch('http://localhost:8000/addComment', createDataForPostRequest(payload))
    .then(() => {
      fetch(
        'http://localhost:8000/getNews',
        createDataForPostRequest({ profileName })
      )
        .then(res => res.json())
        .then(payload => {
          // для показа спиннера
          setTimeout(
            () => dispatch({ type: NEWS_ADD_COMMENT_SUCCESS, payload }),
            200
          );
        });
    })
    .catch(payload => dispatch({ type: NEWS_ADD_COMMENT_ERROR, payload }));
};

export const newsToogleLikeRequest = payload => dispatch => {
  const { profileNameWhoSetLike: profileName } = payload;

  dispatch({ type: NEWS_TOOGLE_LIKE_REQUEST });

  fetch('http://localhost:8000/toogleLike', createDataForPostRequest(payload))
    .then(() => {
      fetch(
        'http://localhost:8000/getNews',
        createDataForPostRequest({ profileName })
      )
        .then(res => res.json())
        .then(payload => {
          dispatch({ type: NEWS_TOOGLE_LIKE_SUCCESS, payload });
        });
    })
    .catch(payload => dispatch({ type: NEWS_TOOGLE_LIKE_ERROR, payload }));
};

export const newsOpenAnswerInput = payload => ({
  type: NEWS_OPEN_ANSWER_INPUT,
  payload
});

export const newsDeleteComment = ({
  profileNameOfAuthorizedUser: profileName,
  ...dataForRequest
}) => dispatch => {
  dispatch({ type: NEWS_DELETE_COMMENT_REQUEST });

  fetch(
    'http://localhost:8000/deleteComment',
    createDataForPostRequest(dataForRequest)
  )
    .then(() => {
      fetch(
        'http://localhost:8000/getNews',
        createDataForPostRequest({ profileName })
      )
        .then(res => res.json())
        .then(payload => {
          dispatch({ type: NEWS_DELETE_COMMENT_SUCCESS, payload });
        });
    })
    .catch(payload => dispatch({ type: NEWS_DELETE_COMMENT_ERROR, payload }));
};
