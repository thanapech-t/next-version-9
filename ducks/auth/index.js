import { put, takeLatest, delay } from 'redux-saga/effects'
import { createReducer, Creator } from '../helper'
import axios from 'axios'

const SET_DATA_AUTH = 'SET_DATA_AUTH'
const GET_DATA_AUTH = 'GET_DATA_AUTH'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

export const setDataUser = Creator(SET_DATA_AUTH, 'data')
export const getUserInfo = Creator(GET_DATA_AUTH)
export const login = Creator(LOGIN, 'data')
export const logout = Creator(LOGOUT)

export function* getUserInfoSaga() {
  try {
    const checkToken = sessionStorage.getItem('twittee')
    const response = yield axios.get('/api/auth', {
      params: {
        token: checkToken,
      },
    })

    if (checkToken) {
      yield put(setDataUser({ user: response.data, isLogin: true }))
    }
  } catch (error) {
    console.log('getUserInfoSaga error', error)
  } finally {
    yield put(setDataUser({ initialized: true }))
  }
}

export function* loginSaga({ payload: { data } }) {
  yield put(setDataUser({ isLoading: true }))
  yield delay(1000)
  try {
    const response = yield axios.post('/api/auth', data)
    sessionStorage.setItem('twittee', response.data.token)
    yield put(setDataUser({ user: response.data, isLogin: true }))
  } catch (error) {
    switch (error.response.status) {
      case 401:
        yield put(
          setDataUser({ errorMessage: 'email or password is incorrect' }),
        )
        break
      default:
        yield put(setDataUser({ errorMessage: 'server has been down' }))
        break
    }
  } finally {
    yield put(
      setDataUser({
        isLoading: false,
      }),
    )
  }
}

export function* logoutSaga() {
  try {
    sessionStorage.clear()
    yield put(setDataUser({ isLogin: false }))
  } catch (error) {
  } finally {
    yield put(
      setDataUser({
        isLoading: false,
      }),
    )
  }
}

export function* authWatcher() {
  yield takeLatest(GET_DATA_AUTH, getUserInfoSaga)
  yield takeLatest(LOGIN, loginSaga)
  yield takeLatest(LOGOUT, logoutSaga)
}

const initial = {
  user: {},
  initialized: false,
  isLogin: false,
  isLoading: false,
  errorMessage: '',
}

const reducer = createReducer(initial, state => ({
  [SET_DATA_AUTH]: ({ data }) => ({
    ...state,
    ...data,
  }),
}))

export default reducer
