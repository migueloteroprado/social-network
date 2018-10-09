import { LOAD_REQUESTS, ADD_REQUEST } from '../actionTypes';

const initialState = {
  requests: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REQUESTS:
      return {
        requests: action.payload
      }    
    case ADD_REQUEST:
      const requests = [...state.requests, action.payload]
      localStorage.setItem('social.requests', JSON.stringify(requests));
      return {
        requests
      }
    default:
      return state
  }
}