import { SET_USERS } from '../actionTypes';

const initialState = {
  userList: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: 
      return {
        ...state,
        userList: action.users
      }
    default:
      return state
  }
}
