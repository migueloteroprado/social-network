import { LOAD_SUBSCRIPTIONS, ADD_SUBSCRIPTION, REMOVE_SUBSCRIPTION, ACCEPT_SUBSCRIPTION, REJECT_SUBSCRIPTION } from '../actionTypes';

const initialState = {
  subscriptions: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUBSCRIPTIONS:
      return {
        subscriptions: action.payload
      }    
    case ADD_SUBSCRIPTION:
      // Find previous subscription. If exists update state, otherwise create a new one
      let subscriptionsAdded = []
      const subscriptionsFound = state.subscriptions.filter(
        s => s.user === action.payload.user && s.subscriptor === action.payload.subscriptor
      )
      if (subscriptionsFound.length === 0) {
        subscriptionsAdded = [...state.subscriptions, action.payload]
      } else {
        subscriptionsAdded = state.subscriptions.map(s => {
          return s.user === action.payload.user && s.subscriptor === action.payload.subscriptor
            ? {user: s.user, subscriptor: s.subscriptor, state: 'pending'}
            : s
        })
      }
      localStorage.setItem('social.subscriptions', JSON.stringify(subscriptionsAdded));
      return {
        subscriptions: subscriptionsAdded
      }
    case REMOVE_SUBSCRIPTION:
      const subscriptionsRemoved = 
        state.subscriptions.filter(
          s => s.user !== action.payload.user && s.subscriptor !== action.payload.subscriptor
        )
        localStorage.setItem('social.subscriptions', JSON.stringify(subscriptionsRemoved));
      return {
        subscriptions: subscriptionsRemoved
      }
    case ACCEPT_SUBSCRIPTION:
    case REJECT_SUBSCRIPTION:
      const subscriptionsUpdated = state.subscriptions.map(s => {
        if (s.user !== action.payload.user && s.subscriptor !== action.payload.subscriptor) {
          return s
        } else {
          return {user: action.payload.user, subscriptor: action.payload.subscriptor, state: action.payload.state}
        }
      })
      localStorage.setItem('social.subscriptions', JSON.stringify(subscriptionsUpdated));
      return {
        subscriptions: subscriptionsUpdated
      }
    default:
      return state
  }
}