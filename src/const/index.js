import styled, { keyframes } from 'styled-components';

/*eslint-disable */

// userPage
export const OPEN_POST = 'OPEN_POST';
export const CLOSE_POST = 'CLOSE_POST';
export const ON_CHANGE_POST = 'ON_CHANGE_POST';
export const RESET_OPEN_POST_ID = 'RESET_OPEN_POST_ID';

export const ON_CHANGE_SEARCH_INPUT = 'ON_CHANGE_SEARCH_INPUT';
export const ON_RESET_SEARCH_INPUT = 'ON_RESET_SEARCH_INPUT';

export const SEARCH_INPUT_GET_USERS_DATA_REQUEST =
  'SEARCH_INPUT_GET_USERS_DATA_REQUEST';
export const SEARCH_INPUT_GET_USERS_DATA_SUCCESS =
  'SEARCH_INPUT_GET_USERS_DATA_SUCCESS';
export const SEARCH_INPUT_GET_USERS_DATA_ERROR =
  'SEARCH_INPUT_GET_USERS_DATA_ERROR';

//comment
export const ON_CHANGE_COMMENT_LINE = 'ON_CHANGE_COMMENT_LINE';
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR';

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const OPEN_TEXT_INPUT_FOR_ANSWER = 'OPEN_TEXT_INPUT_FOR_ANSWER';
export const CLOSE_TEXT_INPUT_FOR_ANSWER = 'CLOSE_TEXT_INPUT_FOR_ANSWER';
export const ON_CHANGE_INPUT_FOR_ANSWER = 'ON_CHANGE_INPUT_FOR_ANSWER';

export const REQUEST_ANSWER_ON_COMMENT = 'REQUEST_ANSWER_ON_COMMENT';
export const SUCCESS_ANSWER_ON_COMMENT = 'SUCCESS_ANSWER_ON_COMMENT';
export const ERROR_ANSWER_ON_COMMENT = 'ERROR_ANSWER_ON_COMMENT';

export const REQUEST_LOAD_USER_DATA = 'ON_REQUEST_LOAD_USER_DATA';
export const SUCCESS_LOAD_USER_DATA = 'SUCCESS_LOAD_USER_DATA';

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const USER_ERROR = 'ERROR';

// sign-Up
export const EMAIL = 'email';
export const FULL_NAME = 'fullName';
export const USER_NAME = 'userName';
export const PASSWORD = 'password';

export const ON_BLUR_SIGN_INPUT = 'ON_BLUR_SIGN_INPUT';
export const ON_CHANGE_INPUT = 'ON_CHANGE_INPUT';
export const ON_CLEAR_INPUT = 'ON_CLEAR_INPUT';
export const ON_RESET_DEFAULT_VIEW = 'ON_RESET_DEFAULT_VIEW';
export const ON_SIGN_IN = 'ON_SIGN_IN';

// login
export const ON_CHANGE_LOGIN_INPUT = 'ON_CHANGE_LOGIN_INPUT';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const ON_LOG_OUT = 'ON_LOG_OUT';

//Add Post
export const TOGGLE_ADD_POST_FIELD = 'TOGGLE_ADD_POST_FIELD';
export const CHANGE_ADD_POST_TEXTAREA_VALUE = 'CHANGE_ADD_POST_TEXTAREA_VALUE';
export const SHOW_ADD_POST_IMG_PREVIEW = 'SHOW_ADD_POST_IMG_PREVIEW';
export const ADD_POST_REQUEST_DATA = 'ADD_POST_REQUEST_DATA';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_ERROR = 'ADD_POST_ERROR';

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_ERROR = 'DELETE_POST_ERROR';

export const TOOGLE_FOLLOW_ON_USER_REQUEST = 'TOOGLE_FOLLOW_ON_USER_REQUEST';
export const TOOGLE_FOLLOW_ON_USER_SUCCESS = 'TOOGLE_FOLLOW_ON_USER_SUCCESS';
export const TOOGLE_FOLLOW_ON_USER_ERROR = 'TOOGLE_FOLLOW_ON_USER_ERROR';

export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_ERROR = 'GET_NEWS_ERROR';

export const ROUTING = 'ROUTING';

export const DELAY_ON_ENTER_TO_USER_PAGE = 1000;
export const TIMER_DELAY_FOR_SEARCH_INPUT = 300;

export const EMAIL_REG_EXP = '@';
export const MIN_PASSWORD_LENGTH = 4;
export const MIN_NAME_LENGTH = 10;

export const ENTER_KEY_CODE = 13;
export const ESCAPE_KEY_CODE = 27;
export const createID = () => Math.floor(Math.random() * 100000);
export const NOT_FOUND_CODE = 404;
export const DELETE_TYPE = 'delete';

export const IMG_STUB_LINK =
  'https://leonardo.osnova.io/e29a372d-dd79-bffe-243f-c3b81e51fe80/-/resize/512/-/quality/lightest/';

// styled
export const RESET = `
    margin:0;
    padding:0
`;

export const FLEX_ROW = `
    display: flex;
    flex-directiron: row
`;

export const FLEX_ROW_CENTER = `
    ${FLEX_ROW}; 
    align-items: center
`;

export const FLEX_COLUMN = `
    display:flex;
    flex-direction:column
`;

export const FLEX_COLUMN_CENTER = `
    ${FLEX_COLUMN};
    align-items:center;
`;

export const ERROR_COLOR = 'red';
export const BORDER_COLOR = '#dbd9d9';
export const BTN_COLOR_HEADER = '#3897f0';
export const BTN_COLOR_HEADER_HOVER = '#0f71cc';
export const BTN_COLOR_UNACTIVE = '#c4e0fb';
export const BACKGROUND_COLOR = '#fafafa';
export const TEXT_COLOR = '#999';
export const INPUT_BACKGROUND_COLOR = '#F5F5F5';
export const INPUT_BORDER_COLOR = '#9E9E9E';
export const INPUT_TEXT_COLOR = '#424242';

export const Spin = keyframes`0%,
100% {
  box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
    0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
}
12.5% {
  box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
    0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
}
25% {
  box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
    0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
}
37.5% {
  box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
    0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
}
50% {
  box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
    0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
}
62.5% {
  box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
    0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
}
75% {
  box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em,
    2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em,
    -2em -2em 0 0;
}
87.5% {
  box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
    0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
}
`;

export const SpinnerStyle = styled.div`
  color: rgb(5, 5, 221);
  left: 50%;
  top: 12.5rem;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: absolute;
  text-indent: -9999em;
  animation: ${Spin} 1.3s infinite linear;
  transform: translateZ(0);
`;

export const createDataForPostRequest = dataForRequest => ({
  method: 'POST',
  body: JSON.stringify(dataForRequest),
  headers: {
    'Content-Type': 'application/json'
  }
});

export const correctImageSize = imgLink => {
  const MAX_WIDTH = 600;
  const MAX_HEIGHT = 450;

  const image = new Image();
  image.src = imgLink;

  const { width, height } = image;

  const compressionRationWidth = width / MAX_WIDTH;
  const compressionRationHeight = height / MAX_HEIGHT;

  if (compressionRationWidth >= compressionRationHeight) {
    const resizeHeight = Math.round(height / compressionRationWidth);
    const paddingTop = `${(MAX_HEIGHT - resizeHeight) / 2}px`;
    const paddingBottom = paddingTop;

    return {
      paddingBottom,
      paddingTop,
      width: `${MAX_WIDTH}px`,
      height: `${resizeHeight}px`
    };
  }

  const resizeWidth = Math.round(width / compressionRationHeight);
  const paddingLeft = `${(MAX_WIDTH - resizeWidth) / 2}px`;
  const paddingRight = paddingLeft;

  return {
    paddingLeft,
    paddingRight,
    width: `${resizeWidth}px`,
    height: `${MAX_HEIGHT}px`
  };
};
