import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import users from './reducers/users';
import login from './reducers/login';
import articles from './reducers/articles';
import subscriptions from './reducers/subscriptions';

const rootReducer = combineReducers({
  login,
  users,
  articles,
  subscriptions
});

const enhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  enhance(applyMiddleware(thunk))
);

window.store = store;

export default store;
