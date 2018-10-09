import { LOGIN_STARTED, LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_ENDED, LOGOUT } from '../actionTypes';

const initialState = {
  isLogging: false,
  isLogged: false,
  currentUser: null,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STARTED:
      return {
        ...state,
        currentUser: null,
        isLogged: false,
        isLogging: true,
        error: null
      }    
    case LOGIN_SUCCESS:
      //sessionStorage.setItem('social.currentUser', JSON.stringify(action.user))
      return {
        ...state,
        currentUser: action.user,
        isLogged: true,
        isLogging: false
      }
    case LOGIN_ERROR:
      return {
        ...state,
        isLogged: false,
        isLogging: false,
        error: 'User or Password Incorrect...'
      };
    case LOGIN_ENDED:
      return {
        ...state,
        isLogging: false,
        isLogged: true,
        error: null
      };
    case LOGOUT: {
      //sessionStorage.removeItem('social.currentUser')
      return {
        ...state,
        currentUser: null,
        isLogged: false,
        isLogging: false,
        error: null
      }
    }
    default:
      return state
  }
}
