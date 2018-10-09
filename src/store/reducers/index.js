import { combineReducers } from 'redux';
import users from './users';
import login from './login';
import articles from "./articles";
import subscriptions from "./subscriptions";
import requests from "./requests";
// import responses from "./responses";

const rootReducer = combineReducers({
  login,
  users,
  articles,
  subscriptions,
  requests,
  //responses
});

export default rootReducer;