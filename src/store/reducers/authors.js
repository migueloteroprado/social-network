import { LOAD_AUTHORS_STARTED, LOAD_AUTHORS_ERROR, LOAD_AUTHORS_COMPLETED } from '../actionTypes';

const initialState = {
  authors: [],
  error: null,
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_AUTHORS_STARTED: 
      return {
        ...state,
        loading: true,
        error: null
      }
    case LOAD_AUTHORS_ERROR: 
        return {
        ...state,
        error: action.payload,
        loading: false
      }      
    case LOAD_AUTHORS_COMPLETED: 
      return {
        ...state,
        authors: action.payload,
        loading: false,
        error: false
      }
    default:
      return state
  }
}
