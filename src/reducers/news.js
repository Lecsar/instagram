import { GET_NEWS_SUCCESS } from '../const';

const initialState = {
  news: []
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return { ...state, news: action.payload };

    default:
      return state;
  }
};

export default newsReducer;
