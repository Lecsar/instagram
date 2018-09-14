import {
  ON_BLUR_SIGN_INPUT,
  ON_RESET_DEFAULT_VIEW,
  ON_CHANGE_INPUT,
  ON_CLEAR_INPUT,
} from '../const';

export const onBlurSignInput = payload => ({
  type: ON_BLUR_SIGN_INPUT,
  payload,
});

export const onChangeInput = payload => ({
  type: ON_CHANGE_INPUT,
  payload,
});

export const onClearInput = payload => ({
  type: ON_CLEAR_INPUT,
  payload,
});

export const onResetDefaultView = () => ({
  type: ON_RESET_DEFAULT_VIEW,
});
