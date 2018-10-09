import { combineReducers } from 'redux';
import users from './users';
import login from './login';
import articles from "./articles";
import subscriptions from "./subscriptions";
import requests from "./requests";

const rootReducer = combineReducers({
  login,
  users,
  articles,
  subscriptions,
  requests
});

export default rootReducer;