import { LOGIN_STARTED, LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_RESET, LOGOUT } from '../actionTypes'
import store from '..'

// Action Creators

export const actionLoginStarted = () => ({
  type: LOGIN_STARTED,
  payload: 'Login Incorrect',
  error: false
})

export const actionLoginError = () => ({
  type: LOGIN_ERROR,
  payload: 'Login Incorrect',
  error: true
})

export const actionLoginSuccess = (author) => ({
  type: LOGIN_SUCCESS,
  payload: author
})

export const actionLoginReset = () => ({
  type: LOGIN_RESET
})

export const actionLogout = () => ({
  type: LOGOUT
})

// Action Dispatchers

export const dispatchLoginStarted = (userName, password) => dispatch => {
  dispatch(actionLoginStarted(userName, password))
  const author = checkLogin(userName, password)
  if (author) {
    dispatch(actionLoginSuccess(author))
  } else {
    dispatch(actionLoginError())
  }
}

export const dispatchLoginError = (error) => {
  store.dispatch(actionLoginError(error))
}

export const dispatchLoginSuccess = (author) => {
  store.dispatch(actionLoginSuccess(author))
}

export const dispatchLoginReset = () => {
  store.dispatch(actionLoginReset())
}

export const dispatchLogout = () => {
  store.dispatch(actionLogout())
}

const checkLogin = (userName, password) => {
  const authors = store.getState().authors.authors;
  const author = authors.filter(
    author => author.login.username === userName && author.login.password === password)
  return author && author.length > 0 ? author[0] : null
}