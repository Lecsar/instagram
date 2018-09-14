import {
  ON_BLUR_SIGN_INPUT,
  EMAIL,
  FULL_NAME,
  USER_NAME,
  PASSWORD,
  ON_RESET_DEFAULT_VIEW,
  ON_CHANGE_INPUT,
  ON_CLEAR_INPUT,
} from '../const';

const initialState = {
  inputs: {
    [EMAIL]: {
      value: '',
      isError: true,
    },
    [FULL_NAME]: {
      value: '',
      isError: true,
    },
    [USER_NAME]: {
      value: '',
      isError: true,
    },
    [PASSWORD]: {
      value: '',
      isError: true,
    },
  },
  isDefaultView: true,
  signUpWasPress: false,
};

const signUpReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ON_BLUR_SIGN_INPUT:
      newState = { ...state };
      newState.inputs[action.payload.name] = {
        value: action.payload.value,
        isError: action.payload.isError,
      };
      return newState;
    case ON_CHANGE_INPUT:
      newState = { ...state };
      newState.inputs[action.payload.name].value = action.payload.value;
      return newState;
    case ON_CLEAR_INPUT:
      newState = { ...state };
      newState.inputs[action.payload].value = '';
      return newState;
    case ON_RESET_DEFAULT_VIEW:
      newState = { ...state, isDefaultView: false };
      return newState;
    default:
      return state;
  }
};

export default signUpReducer;
