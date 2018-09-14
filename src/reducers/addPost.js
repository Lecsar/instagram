import {
  TOGGLE_ADD_POST_FIELD,
  CHANGE_ADD_POST_TEXTAREA_VALUE,
  SHOW_ADD_POST_IMG_PREVIEW,
  ADD_POST_REQUEST_DATA,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR
} from '../const';

const initialState = {
  isOpenAddWindow: false,
  srcImgDataBs64: '',
  textAreaValue: '',
  isRequest: false,
  error: false,
  img: false
};

const addPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST_FIELD:
      return { ...initialState, isOpenAddWindow: !state.isOpenAddWindow };
    case CHANGE_ADD_POST_TEXTAREA_VALUE:
      return { ...state, textAreaValue: action.payload };
    case SHOW_ADD_POST_IMG_PREVIEW:
      return {
        ...state,
        srcImgDataBs64: action.payload.bs64File,
        img: action.payload.img
      };
    case ADD_POST_REQUEST_DATA:
      return { ...state, isRequest: true };
    case ADD_POST_SUCCESS:
      return { ...initialState };
    case ADD_POST_ERROR:
      return { ...initialState, error: action.payload };
    default:
      return state;
  }
};

export default addPostReducer;
