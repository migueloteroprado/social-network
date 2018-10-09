import { LOAD_SUBSCRIPTIONS, ADD_SUBSCRIPTION, REMOVE_SUBSCRIPTION } from '../actionTypes';
import store from '..';

// Action Creators

export const actionLoadSubscriptions = (subscriptions) => ({
  type: LOAD_SUBSCRIPTIONS,
  payload: subscriptions
})

export const actionAddSubscription = (subscription) => ({
  type: ADD_SUBSCRIPTION,
  payload: subscription
})

export const actionRemoveSubscription = (subscription) => ({
  type: REMOVE_SUBSCRIPTION,
  payload: subscription
})

// Action Dispatchers

export const dispatchLoadSubscriptions = (subscriptions) => {
  store.dispatch(actionLoadSubscriptions(subscriptions));
}

export const dispatchAddSubscription = (subscription) => {
  store.dispatch(actionAddSubscription(subscription));
}

export const dispatchRemoveSubscription = (subscription) => {
  store.dispatch(actionRemoveSubscription(subscription));
}
