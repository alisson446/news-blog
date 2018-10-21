import {
  START_CREATE_NEWS,
  FINISHED_CREATE_NEWS,
  FAILED_CREATE_NEWS,
  START_FETCH_NEWS,
  FINISHED_FETCH_NEWS,
  FAILED_FETCH_NEWS,
  START_UPDATE_NEWS,
  FINISHED_UPDATE_NEWS,
  FAILED_UPDATE_NEWS
} from '../../constants'

const initialState = {
  isSending: false,
  isFetching: false,
  error: null,
  news: {}
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case START_CREATE_NEWS:
      return { ...state, isSending: true }

    case FINISHED_CREATE_NEWS:
      return { ...state, isSending: false }

    case FAILED_CREATE_NEWS:
      return { ...state, isSending: false, error: action.error }

    case START_FETCH_NEWS:
      return { ...state, isFetching: true }

    case FINISHED_FETCH_NEWS:
      return { ...state, isFetching: false, news: action.payload }

    case FAILED_FETCH_NEWS:
      return { ...state, isFetching: false, error: action.error }

    case START_UPDATE_NEWS:
      return { ...state, isSending: true }

    case FINISHED_UPDATE_NEWS:
      return { ...state, isSending: false, news: action.payload }

    case FAILED_UPDATE_NEWS:
      return { ...state, isSending: false, error: action.error }

    default:
      return state
  }
}
