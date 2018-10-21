import request from 'request-promise-native'
import { post, getJson, put } from '../../api'
import apiPaths from '../../api/paths'
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

/**
 * Create
 */

export function startCreateNews() {
  return { type: START_CREATE_NEWS }
}

export function finishedCreateNews(payload) {
  return {
    type: FINISHED_CREATE_NEWS,
    payload
  }
}

export function failedCreateNews(error) {
  return {
    type: FAILED_CREATE_NEWS,
    error: error.message
  }
}

export function apiCreateNews(payload) {
  return function (dispatch) {
    dispatch(startCreateNews())

    return request(post(apiPaths.storeNews, payload))
      .then((snapshot) => dispatch(finishedCreateNews(snapshot)))
      .catch((error) => dispatch(failedCreateNews(error)))
  }
}

/**
 * Fetch one
 */

export function startFetchNews() {
  return { type: START_FETCH_NEWS }
}

export function finishedFetchNews(payload) {
  return {
    type: FINISHED_FETCH_NEWS,
    payload
  }
}

export function failedFetchNews(error) {
  return {
    type: FAILED_FETCH_NEWS,
    error: error.message
  }
}

export function apiFetchNews(id) {
  return function (dispatch) {
    dispatch(startFetchNews())

    return request(getJson(apiPaths.viewNews(id)))
      .then((snapshot) => dispatch(finishedFetchNews(snapshot)))
      .catch((error) => {
        dispatch(failedFetchNews(error));
        return Promise.reject();
      })
  }
}

/**
 * Update
 */

export function startUpdateNews() {
  return { type: START_UPDATE_NEWS }
}

export function finishedUpdateNews(payload) {
  return {
    type: FINISHED_UPDATE_NEWS,
    payload
  }
}

export function failedUpdateNews(error) {
  return {
    type: FAILED_UPDATE_NEWS,
    error: error.message
  }
}

export function apiUpdateNews(id, payload) {
  return function (dispatch) {
    dispatch(startUpdateNews())

    return request(put(apiPaths.updateNews(id), payload))
      .then((snapshot) => dispatch(finishedUpdateNews(snapshot)))
      .catch((error) => {
        dispatch(failedUpdateNews(error));
        return Promise.reject();
      })
  }
}
