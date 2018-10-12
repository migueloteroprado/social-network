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
        s => s.author === action.payload.author && s.subscriptor === action.payload.subscriptor
      )
      if (subscriptionsFound.length === 0) {
        subscriptionsAdded = [...state.subscriptions, action.payload]
      } else {
        subscriptionsAdded = state.subscriptions.map(s => {
          return s.author === action.payload.author && s.subscriptor === action.payload.subscriptor
            ? {author: s.author, subscriptor: s.subscriptor, state: 'pending'}
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
          s => s.author !== action.payload.author && s.subscriptor !== action.payload.subscriptor
        )
        localStorage.setItem('social.subscriptions', JSON.stringify(subscriptionsRemoved));
      return {
        subscriptions: subscriptionsRemoved
      }
    case ACCEPT_SUBSCRIPTION:
    case REJECT_SUBSCRIPTION:
      // map() over all requests: if same author and subscriber, change state, otherwise keep it unchanged
      const subscriptionsUpdated = state.subscriptions.map(s => {
        if (s.author !== action.payload.author || s.subscriptor !== action.payload.subscriptor) {
          return s
        } else {
          return {author: action.payload.author, subscriptor: action.payload.subscriptor, state: action.payload.state}
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