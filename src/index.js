import React from 'react';
import ReactDOM from 'react-dom';
import SocialNetwork from './components/SocialNetwork';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <SocialNetwork/>
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));

serviceWorker.unregister();



