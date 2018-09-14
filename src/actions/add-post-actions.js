import {
  TOGGLE_ADD_POST_FIELD,
  CHANGE_ADD_POST_TEXTAREA_VALUE,
  SHOW_ADD_POST_IMG_PREVIEW,
  ADD_POST_REQUEST_DATA,
  ADD_POST_ERROR,
  ADD_POST_SUCCESS,
  createDataForPostRequest
} from '../const';

/* eslint-disable no-shadow */

export const addPostToggleField = () => ({
  type: TOGGLE_ADD_POST_FIELD
});

export const changeAddPostTextareaValue = payload => ({
  type: CHANGE_ADD_POST_TEXTAREA_VALUE,
  payload
});

export const showAddPostImgPreview = payload => ({
  type: SHOW_ADD_POST_IMG_PREVIEW,
  payload
});

export const addPostRequestData = payload => (dispatch) => {
  const formData = new FormData();
  Object.keys(payload).forEach(formValue => formData.append(formValue, payload[formValue]));

  dispatch({ type: ADD_POST_REQUEST_DATA });

  // сохраняем картинку на сервер и получаем ссылку
  fetch('http://uploads.ru/api', {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(({ data: { img_url: img } }) => img)
    // сохраняем ссылку на картинку и данные о картинке на локальный сервер
    .then(img => fetch(
        'http://localhost:8000/addNewPost',
        createDataForPostRequest({ ...payload, img })
      ))
    .then(res => res.json())
    .then(payload => dispatch({ type: ADD_POST_SUCCESS, payload }))
    .catch(payload => dispatch({ type: ADD_POST_ERROR, payload }));
};
