import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, SET_USERS } from '../actionTypes';

const initialState = {
  userList: [],
  currentUser: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: 
      return {
        ...state,
        userList: action.users
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.uuid
      }
    case LOGIN_ERROR:
      return state;
    case LOGOUT: {
      return {
        ...state,
        currentUser: null
      }
    }
    default:
      return state
  }
}
