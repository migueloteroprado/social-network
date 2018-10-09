import { SET_USERS } from '../actionTypes';
import store from '..';

// Action Creators

export const actionSetUsers = users => ({
  type: SET_USERS,
  users
});

// Action Dispatchers

export const dispatchSetUsers = (users) => {
  store.dispatch(actionSetUsers(users));
};
