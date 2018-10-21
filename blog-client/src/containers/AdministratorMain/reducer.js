import {
  ADD_NEWS,
  START_FETCH_ALL_NEWS,
  FINISHED_FETCH_ALL_NEWS,
  FAILED_FETCH_ALL_NEWS,
  START_DELETE_NEWS,
  FINISHED_DELETE_NEWS,
  FAILED_DELETE_NEWS,
  RESET_NEWS_STATE
} from '../../constants'

/**
 * News object model
 * [id]: {
 *  id: int,
 *  title: string,
 *  content: string,
 *  category: string,
 *  author: string,
 *  keywords: string
 * }
 */

const initialState = {
  isFetching: false,
  isDeleting: false,
  error: null,
  news: {}, // news object
}

export default function reducer(state = initialState, action) {
  let news = null;

  switch(action.type) {
    case ADD_NEWS:
      news = { ...state.news, [action.payload.id]: action.payload }
      return { ...state, isSending: false, news };

    case START_FETCH_ALL_NEWS:
      return { ...initialState, isFetching: true };

    case FINISHED_FETCH_ALL_NEWS:
      return { ...state, isFetching: false };

    case FAILED_FETCH_ALL_NEWS:
      return { ...state, isFetching: false, error: action.error };

    case START_DELETE_NEWS:
      return { ...state, isDeleting: true };

    case FINISHED_DELETE_NEWS:
      news = { ...state.news };
      delete news[action.newsId];

      return { ...state, isDeleting: false, news };

    case FAILED_DELETE_NEWS:
      return { ...state, isDeleting: false, error: action.error };

    case RESET_NEWS_STATE:
      return { ...initialState };

    default:
      return state
  }
}
