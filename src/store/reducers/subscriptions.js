import { LOAD_SUBSCRIPTIONS, ADD_SUBSCRIPTION, REMOVE_SUBSCRIPTION } from '../actionTypes';

const initialState = {
  subscriptions: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUBSCRIPTIONS:
      return {
        subscriptions: action.payload
      }    
    case ADD_SUBSCRIPTION:
      const subscriptionsAdded = [...state.subscriptions, action.payload]
      localStorage.setItem('social.subscriptions', JSON.stringify(subscriptionsAdded));
      return {
        subscriptions: subscriptionsAdded
      }
    case REMOVE_SUBSCRIPTION:
      const subscriptionsRemoved = 
        state.subscriptions.filter(
          subscription => subscription.user !== action.payload.user && subscription.subscriptor !== action.payload.subscriptor
        )
      return {
        subscriptions: subscriptionsRemoved
      }
    default:
      return state
  }
}