import { SET_USERS, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from '../actionTypes';
import store from '..';

// Action Creators

export const actionSetUsers = users => ({
  type: SET_USERS,
  users
});

export const actionLoginError = () => ({
  type: LOGIN_ERROR,
  payload: 'Login Incorrect',
  error: true
})

export const actionLoginSuccess = (uuid) => ({
  type: LOGIN_SUCCESS,
  uuid
})

export const actionLogout = () => ({
  type: LOGOUT
})

// Action Dispatchers

export const dispatchSetUsers = (users) => {
  store.dispatch(actionSetUsers(users));
};

export const dispatchLoginStarted = (userName, password) => dispatch => {
  const uuid = checkUser(userName, password);
  if (uuid) {
    dispatch(actionLoginSuccess(uuid))
  } else {
    dispatch(actionLoginError());
  }
}

export const dispatchLoginError = (userName, password) => {
  store.dispatch(actionLoginError(userName, password));
}

export const dispatchLoginSuccess = (id) => {
  store.dispatch(actionLoginSuccess(id));
}

export const dispatchLogout = () => {
  store.dispatch(actionLogout());
}

const checkUser = (userName, password) => {
  const users = store.getState().users.userList;
  const user = users.filter(
    user => user.login.username === userName && user.login.password === password)
  return user && user.length > 0 ? user[0].login.uuid : null;
}