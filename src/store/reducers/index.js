import { combineReducers } from 'redux';
import users from './users';
// import articles from "./articles";
// import subscriptions from "./subscriptions";
// import requests from "./requests";
// import responses from "./responses";

const rootReducer = combineReducers({
  users,
  //articles,
  //subscriptions,
  //requests,
  //responses
});

export default rootReducer;