import {
  OPEN_POST,
  CLOSE_POST,
  ON_CHANGE_POST,
  RESET_OPEN_POST_ID,
  ON_RESET_SEARCH_INPUT,
  ON_CHANGE_COMMENT_LINE,
  REQUEST_LOAD_USER_DATA,
  SUCCESS_LOAD_USER_DATA,
  LOGIN_SUCCESS,
  USER_ERROR,
  ON_CHANGE_SEARCH_INPUT,
  SEARCH_INPUT_GET_USERS_DATA_REQUEST,
  SEARCH_INPUT_GET_USERS_DATA_SUCCESS,
  SEARCH_INPUT_GET_USERS_DATA_ERROR,
  SUCCESS_ANSWER_ON_COMMENT,
  ADD_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  ADD_COMMENT_SUCCESS,
  TOOGLE_FOLLOW_ON_USER_SUCCESS
} from '../const';

const initialState = {
  user: null,
  currentPage: {
    openPostId: false,
    searchField: {
      value: '',
      profilesList: [],
      error: false,
      isRequest: false
    },
    commentFieldValue: ''
  },
  isLoadingRequest: false,
  isError: false
};

export default (state = initialState, action) => {
  let newState;
  let user;
  let currentPage;

  switch (action.type) {
    // user
    case REQUEST_LOAD_USER_DATA:
      return {
        ...state,
        isLoadingRequest: true
      };
    case SUCCESS_LOAD_USER_DATA:
      return {
        ...initialState,
        user: action.payload,
        isLoadingRequest: false
      };
    case USER_ERROR:
      return {
        ...state,
        isError: action.payload,
        isLoadingRequest: false
      };
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        user: action.payload
      };
    case OPEN_POST:
      newState = { ...state };
      newState.currentPage.openPostId = action.payload;
      return newState;
    case CLOSE_POST:
      newState = { ...state };
      newState.currentPage.openPostId = false;
      return newState;
    case ON_CHANGE_POST:
      newState = { ...state };
      newState.currentPage.openPostId = action.payload;
      return newState;
    case RESET_OPEN_POST_ID:
      newState = { ...state };
      newState.currentPage.openPostId = false;
      return newState;
    case ON_CHANGE_SEARCH_INPUT:
      newState = { ...state };
      newState.currentPage.searchField.value = action.payload;
      return newState;
    case SEARCH_INPUT_GET_USERS_DATA_REQUEST:
      newState = { ...state };
      newState.currentPage.searchField.isRequest = true;
      return newState;
    case SEARCH_INPUT_GET_USERS_DATA_SUCCESS:
      newState = { ...state };
      newState.currentPage.searchField.isRequest = false;
      newState.currentPage.searchField.profilesList = action.payload;
      return newState;
    case SEARCH_INPUT_GET_USERS_DATA_ERROR:
      newState = { ...state };
      newState.currentPage.searchField.isRequest = false;
      newState.currentPage.searchField.isError = action.payload;
      return newState;
    case ON_RESET_SEARCH_INPUT:
      newState = { ...state };
      newState.currentPage.searchField = {
        value: '',
        profilesList: [],
        isRequest: false
      };
      return newState;
    case ON_CHANGE_COMMENT_LINE:
      newState = { ...state };
      newState.currentPage.commentFieldValue = action.payload;
      return newState;
    case SUCCESS_ANSWER_ON_COMMENT:
      user = { ...state.user };
      user.posts = action.payload;
      return { ...state, user };
    case ADD_COMMENT_SUCCESS:
      user = { ...state.user };
      currentPage = { ...state.currentPage };
      currentPage.commentFieldValue = '';
      user.posts = action.payload;
      return { ...state, user, currentPage };
    case ADD_POST_SUCCESS:
      user = { ...state.user };
      user.posts = action.payload;
      return { ...state, user };
    case DELETE_POST_SUCCESS:
      user = { ...state.user };
      user.posts = action.payload;
      return { ...state, user };
    case TOOGLE_FOLLOW_ON_USER_SUCCESS:
      user = { ...state.user };
      user.followers = action.payload;
      return { ...state, user };
    default:
      return state;
  }
};
