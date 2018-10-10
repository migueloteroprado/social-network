import { SET_AUTHORS } from '../actionTypes';

const initialState = {
  authors: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORS: 
      return {
        ...state,
        authors: action.authors
      }
    default:
      return state
  }
}
