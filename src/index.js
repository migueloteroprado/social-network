import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialNetwork from './containers/SocialNetwork';
import store from './store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<SocialNetwork />, document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
    <SocialNetwork/>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();



