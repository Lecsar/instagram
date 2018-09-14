import {
  OPEN_TEXT_INPUT_FOR_ANSWER,
  CLOSE_TEXT_INPUT_FOR_ANSWER,
  ON_CHANGE_INPUT_FOR_ANSWER,
  REQUEST_ANSWER_ON_COMMENT,
  SUCCESS_ANSWER_ON_COMMENT,
  ERROR_ANSWER_ON_COMMENT
} from '../const';

const initialState = {
  value: '',
  parentsComment: false,
  currentID: false,
  isRequest: false,
  isError: false
};

const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_TEXT_INPUT_FOR_ANSWER:
      return {
        ...state,
        parentsComment: action.payload.parents,
        currentID: action.payload.id
      };
    case CLOSE_TEXT_INPUT_FOR_ANSWER:
      return {
        ...state,
        value: '',
        currentID: false,
        parentsComment: false
      };
    case ON_CHANGE_INPUT_FOR_ANSWER:
      return { ...state, value: action.payload };
    case REQUEST_ANSWER_ON_COMMENT:
      return {
        ...state,
        isRequest: true
      };
    case SUCCESS_ANSWER_ON_COMMENT:
      return {
        ...state,
        isRequest: false,
        currentID: false
      };
    case ERROR_ANSWER_ON_COMMENT:
      return {
        ...state,
        isRequest: false,
        isError: action.payload || true,
        currentID: false
      };
    default:
      return state;
  }
};

export default answerReducer;
