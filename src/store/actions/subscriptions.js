import { LOAD_SUBSCRIPTIONS, ADD_SUBSCRIPTION, REMOVE_SUBSCRIPTION, ACCEPT_SUBSCRIPTION, REJECT_SUBSCRIPTION } from '../actionTypes';
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

export const actionAcceptSubscription = (subscription) => ({
  type: ACCEPT_SUBSCRIPTION,
  payload: subscription
})

export const actionRejectSubscription = (subscription) => ({
  type: REJECT_SUBSCRIPTION,
  payload: subscription
})

// Action Dispatchers

export const dispatchLoadSubscriptions = (subscriptions) => {
  store.dispatch(actionLoadSubscriptions(subscriptions));
}

export const dispatchAddSubscription = (subscription) => {
  store.dispatch(actionAddSubscription(subscription));
  localStorage.setItem('social.subscriptions', JSON.stringify(store.getState().subscriptions.subscriptions));
}

export const dispatchRemoveSubscription = (subscription) =>{
  store.dispatch(actionRemoveSubscription(subscription));
  localStorage.setItem('social.subscriptions', JSON.stringify(store.getState().subscriptions.subscriptions));
}

export const dispatchAcceptSubscription = (subscription) => {
  store.dispatch(actionAcceptSubscription(subscription));
  localStorage.setItem('social.subscriptions', JSON.stringify(store.getState().subscriptions.subscriptions));
}

export const dispatchRejectSubscription = (subscription) => {
  store.dispatch(actionRejectSubscription(subscription));
  localStorage.setItem('social.subscriptions', JSON.stringify(store.getState().subscriptions.subscriptions));
}
