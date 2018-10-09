import { LOAD_REQUESTS, ADD_REQUEST } from '../actionTypes';
import store from '..';

// Action Creators

export const actionLoadRequests = (requests) => ({
  type: LOAD_REQUESTS,
  payload: requests
})

export const actionAddRequest = (request) => ({
  type: ADD_REQUEST,
  payload: request
})

// Action Dispatchers

export const dispatchLoadRequests = (requests) => {
  store.dispatch(actionLoadRequests(requests));
}

export const dispatchAddRequest = (request) => {
  store.dispatch(actionAddRequest(request));
}
