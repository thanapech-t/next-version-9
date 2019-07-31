import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import auth, { authWatcher } from './auth'
import landing, { landingWatcher } from './landing'

const saga = createSagaMiddleware()
export const reducers = combineReducers({
  form: formReducer,
  auth,
  landing,
})
const store = createStore(reducers, applyMiddleware(saga))

function* rootSaga() {
  yield all([authWatcher(), landingWatcher()])
}

saga.run(rootSaga)

export default store
