import request from 'request-promise-native'
import { remove, getJson } from '../../api'
import apiPaths from '../../api/paths'
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
 * Fetch All News
 */

export function addNews(payload) {
  return {
    type: ADD_NEWS,
    payload
  }
}

export function startFetchNews() {
  return { type: START_FETCH_ALL_NEWS }
}

export function finishedFetchNews(payload) {
  return {
    type: FINISHED_FETCH_ALL_NEWS,
    payload
  }
}

export function failedFetchNews(error) {
  return {
    type: FAILED_FETCH_ALL_NEWS,
    error: error.message
  }
}

export function apiFetchAllNews() {
  return function (dispatch) {
    dispatch(startFetchNews())

    return request(getJson(apiPaths.listNews))
      .then((snapshot) => {
        snapshot.forEach((news) => {
          dispatch(addNews(news))
        })

        return dispatch(finishedFetchNews(snapshot))
      })
      .catch((error) => {
        dispatch(failedFetchNews(error));
        return Promise.reject();
      });
  }
}

/**
 * Delete
 */

export function startDeleteNews() {
  return { type: START_DELETE_NEWS }
}

export function finishedDeleteNews(newsId) {
  return { type: FINISHED_DELETE_NEWS, newsId }
}

export function failedDeleteNews(error) {
  return {
    type: FAILED_DELETE_NEWS,
    error: error.message
  }
}

export function apiDeleteNews(id) {
  return function (dispatch) {
    dispatch(startDeleteNews())

    return request(remove(apiPaths.deleteNews(id)))
      .then(() => dispatch(finishedDeleteNews(id)))
      .catch((error) => {
        dispatch(failedDeleteNews(error));
        return Promise.reject();
      });
  }
}

/**
 * Reset State
 */
export function resetNewsState() {
  return { type: RESET_NEWS_STATE }
}
