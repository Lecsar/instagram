import {
  ON_CHANGE_LOGIN_INPUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  ON_LOG_OUT
} from '../const';

const initialState = {
  email: '',
  password: '',
  defaultView: true,
  showErrorMessage: false,
  loginRequest: false,
  user: '',
  profilePhotoOfAuhorizedUser: ''
};

const loginReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ON_CHANGE_LOGIN_INPUT:
      newState = { ...state };
      newState[action.payload.name] = action.payload.value;
      newState.defaultView = !newState.email;
      return newState;
    case LOGIN_REQUEST:
      return { ...state, loginRequest: true };
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        user: action.payload.profileName,
        profilePhotoOfAuhorizedUser: action.payload.profilePhoto
      };
    case LOGIN_FAIL:
      return { ...state, showErrorMessage: true, loginRequest: false };
    case ON_LOG_OUT:
      return { ...state, user: false };
    default:
      return state;
  }
};

export default loginReducer;
