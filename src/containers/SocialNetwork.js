import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Main from './Main';
import './SocialNetwork.css'
import { Provider } from 'react-redux';
import store from '../store';

class SocialNetwork extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NavBar />
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default SocialNetwork;
