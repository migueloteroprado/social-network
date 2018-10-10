import { LOGIN_STARTED, LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_ENDED, LOGOUT } from '../actionTypes';

const initialState = {
  isLogging: false,
  currentAuthor: null,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STARTED:
      return {
        ...state,
        currentAuthor: null,
        isLogging: true,
        error: null
      }    
    case LOGIN_SUCCESS:
sessionStorage.setItem('social.currentAuthor', JSON.stringify(action.author))
      return {
        ...state,
        currentAuthor: action.author,
        isLogging: false
      }
    case LOGIN_ERROR:
      return {
        ...state,
        isLogging: false,
        error: 'User name or Password Incorrect...'
      };
    case LOGIN_ENDED:
      return {
        ...state,
        isLogging: false,
        error: null
      };
    case LOGOUT: {
sessionStorage.removeItem('social.currentAuthor')
      return {
        ...state,
        currentAuthor: null,
        isLogging: false,
        error: null
      }
    }
    default:
      return state
  }
}
