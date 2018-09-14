import {
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  TOOGLE_FOLLOW_ON_USER_REQUEST,
  TOOGLE_FOLLOW_ON_USER_SUCCESS,
  TOOGLE_FOLLOW_ON_USER_ERROR
} from '../const';

const initialState = {
  deletedPost: {
    deletedPostId: false,
    isRequestOnDeletedPost: false
  },
  isRequestOnFollow: false,
  error: false
};

const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST_REQUEST:
      return {
        ...state,
        deletedPost: {
          deletedPostId: action.payload,
          isRequestOnDeletedPost: true
        }
      };
    case DELETE_POST_SUCCESS:
      return { ...state, deletedPost: { ...initialState.deletedPost } };
    case DELETE_POST_ERROR:
      return {
        ...state,
        deletedPost: { ...initialState.deletedPost },
        error: action.payload
      };
    case TOOGLE_FOLLOW_ON_USER_REQUEST:
      return {
        ...state,
        isRequestOnFollow: true
      };
    case TOOGLE_FOLLOW_ON_USER_SUCCESS:
      return { ...state, isRequestOnFollow: false };
    case TOOGLE_FOLLOW_ON_USER_ERROR:
      return {
        ...state,
        isRequestOnFollow: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default deleteReducer;
