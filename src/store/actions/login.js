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

export const actionLoginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user
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
  const user = checkUser(userName, password);
  if (user) {
    dispatch(actionLoginSuccess(user))
  } else {
    dispatch(actionLoginError());
  }
}

export const dispatchLoginError = (userName, password) => {
  store.dispatch(actionLoginError(userName, password));
}

export const dispatchLoginSuccess = (user) => {
  store.dispatch(actionLoginSuccess(user));
}

export const dispatchLoginEnded = (user) => {
  store.dispatch(actionLoginEnded(user));
}

export const dispatchLogout = () => {
  store.dispatch(actionLogout());
}

const checkUser = (userName, password) => {
  const users = store.getState().users.userList;
  const user = users.filter(
    user => user.login.username === userName && user.login.password === password)
  return user && user.length > 0 ? user[0] : null;
}