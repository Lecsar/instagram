import {
  GET_NEWS_SUCCESS,
  TOOGLE_COMMENT_INPUT,
  NEWS_ADD_COMMENT_REQUEST,
  NEWS_ADD_COMMENT_SUCCESS,
  NEWS_ADD_COMMENT_ERROR
} from '../const';

const initialState = {
  news: [],
  idOpenCommentField: 1,
  isRequestAddComment: false,
  isError: false
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return { ...state, news: action.payload };
    case TOOGLE_COMMENT_INPUT:
      return { ...state, idOpenCommentField: action.payload };
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
    default:
      return state;
  }
};

export default newsReducer;
