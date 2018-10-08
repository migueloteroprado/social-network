import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

const enhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  enhance(applyMiddleware(thunk))
);

window.store = store;

export default store;
