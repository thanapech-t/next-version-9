import { put, takeLatest, call, delay } from 'redux-saga/effects'
import { createReducer, Creator } from '../helper'
import axios from 'axios'

const GET_DATA_TWEET = 'GET_DATA_TWEET'
const SET_DATA_TWEET = 'SET_DATA_TWEET'
const POST_TWEET = 'POST_TWEET'
const DELETE_TWEET = 'DELETE_TWEET'

export const getTweetInfo = Creator(GET_DATA_TWEET)
export const setDataTweet = Creator(SET_DATA_TWEET, 'data')
export const postTweet = Creator(POST_TWEET, 'data', 'callback')
export const deleteTweet = Creator(DELETE_TWEET, 'id')

export function* getTweetInfoSaga() {
  yield put(setDataTweet({ isLoading: true }))
  try {
    const response = yield axios.get('/api/tweet')
    yield put(setDataTweet({ tweets: response.data }))
  } catch (error) {
    console.log('getUserInfoSaga error', error)
  } finally {
    yield put(setDataTweet({ isLoading: false }))
  }
}

export function* postTweetInfoSaga({ payload: { data, callback } }) {
  yield put(setDataTweet({ isLoading: true }))

  try {
    const response = yield axios.post('/api/tweet', data)
    console.log('response', response)
  } catch (error) {
    console.log('getUserInfoSaga error', error)
  } finally {
    if (callback) {
      callback('')
      let inputText = document.getElementById('textarea')
      inputText.innerHTML = ''
    }
    yield delay(1000)
    yield call(getTweetInfoSaga)
    yield put(setDataTweet({ isLoading: false }))
  }
}

export function* deleteTweetInfoSaga({ payload: { id } }) {
  yield put(setDataTweet({ isLoading: true }))
  console.log('delte', id)
  try {
    const response = yield axios.get(`/api/tweet`, {
      params: {
        id: id,
      },
    })
    console.log('response', response)
  } catch (error) {
    console.log('getUserInfoSaga error', error)
  } finally {
    yield delay(1000)
    yield call(getTweetInfoSaga)
    yield put(setDataTweet({ isLoading: false }))
  }
}

export function* landingWatcher() {
  yield takeLatest(GET_DATA_TWEET, getTweetInfoSaga)
  yield takeLatest(POST_TWEET, postTweetInfoSaga)
  yield takeLatest(DELETE_TWEET, deleteTweetInfoSaga)
}

const initial = {
  tweets: [],
  isLoading: false,
}

const reducer = createReducer(initial, state => ({
  [SET_DATA_TWEET]: ({ data }) => ({
    ...state,
    ...data,
  }),
}))

export default reducer
