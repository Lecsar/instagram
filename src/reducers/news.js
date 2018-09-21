import {
  GET_NEWS_SUCCESS,
  TOOGLE_COMMENT_INPUT,
  NEWS_ADD_COMMENT_REQUEST,
  NEWS_ADD_COMMENT_SUCCESS,
  NEWS_ADD_COMMENT_ERROR,
  NEWS_TOOGLE_LIKE_SUCCESS,
  NEWS_TOOGLE_LIKE_ERROR,
  NEWS_OPEN_ANSWER_INPUT,
  NEWS_DELETE_COMMENT_REQUEST,
  NEWS_DELETE_COMMENT_SUCCESS,
  NEWS_DELETE_COMMENT_ERROR
} from '../const';

const initialState = {
  news: [],
  idOpenCommentField: false,
  isRequestAddComment: false,
  isError: false,
  commentInputValue: '',
  idPrevComment: false,
  parents: [],
  isRequestDeleteComment: false
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return { ...state, news: action.payload };
    case TOOGLE_COMMENT_INPUT:
      return {
        ...state,
        idOpenCommentField: action.payload,
        commentInputValue: '',
        idPrevComment: false,
        parents: []
      };
    case NEWS_ADD_COMMENT_REQUEST:
      return { ...state, isRequestAddComment: true };
    case NEWS_ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isRequestAddComment: false,
        news: action.payload,
        idOpenCommentField: false
      };
    case NEWS_ADD_COMMENT_ERROR:
      return {
        ...state,
        isRequestAddComment: false,
        isError: action.payload,
        idOpenCommentField: false
      };
    case NEWS_TOOGLE_LIKE_SUCCESS:
      return {
        ...state,
        news: action.payload
      };
    case NEWS_TOOGLE_LIKE_ERROR:
      return {
        ...state,
        isError: action.payload
      };
    case NEWS_OPEN_ANSWER_INPUT:
      return {
        ...state,
        idOpenCommentField: action.payload.postId,
        commentInputValue: action.payload.profileName,
        idPrevComment: action.payload.idPrevComment,
        parents: action.payload.parents
      };
    case NEWS_DELETE_COMMENT_REQUEST:
      return {
        ...state,
        isRequestDeleteComment: true
      };
    case NEWS_DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        news: action.payload,
        isRequestDeleteComment: false
      };
    case NEWS_DELETE_COMMENT_ERROR:
      return {
        ...state,
        isRequestDeleteComment: false,
        isError: action.payload
      };
    default:
      return state;
  }
};

export default newsReducer;
