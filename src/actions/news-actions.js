import {
  GET_NEWS_REQUEST,
  createDataForPostRequest,
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR
} from '../const';

export const getNewsRequest = profileName => (dispatch) => {
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

export const test = () => false;
