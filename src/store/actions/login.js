import { LOGIN_STARTED, LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_ENDED, LOGOUT } from '../actionTypes';
import store from '..';

// Action Creators

export const actionLoginStarted = () => ({
  type: LOGIN_STARTED,
  payload: 'Login Incorrect',
  error: true
})

export const actionLoginError = () => ({
  type: LOGIN_ERROR,
  payload: 'Login Incorrect',
  error: true
})

export const actionLoginSuccess = (author) => ({
  type: LOGIN_SUCCESS,
  author
})

export const actionLoginEnded = () => ({
  type: LOGIN_ENDED
})

export const actionLogout = () => ({
  type: LOGOUT
})

// Action Dispatchers

export const dispatchLoginStarted = (userName, password) => dispatch => {
  dispatch(actionLoginStarted(userName, password));
  const author = checkLogin(userName, password);
  if (author) {
    dispatch(actionLoginSuccess(author))
  } else {
    dispatch(actionLoginError());
  }
}

export const dispatchLoginError = (userName, password) => {
  store.dispatch(actionLoginError(userName, password));
}

export const dispatchLoginSuccess = (author) => {
  store.dispatch(actionLoginSuccess(author));
}

export const dispatchLoginEnded = (author) => {
  store.dispatch(actionLoginEnded(author));
}

export const dispatchLogout = () => {
  store.dispatch(actionLogout());
}

const checkLogin = (userName, password) => {
  const authors = store.getState().authors.authors;
  const author = authors.filter(
    author => author.login.username === userName && author.login.password === password)
  return author && author.length > 0 ? author[0] : null;
}