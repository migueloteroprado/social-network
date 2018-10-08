import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Main from './Main';
import './SocialNetwork.css'
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary'
import store from '../store';

class SocialNetwork extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <ErrorBoundary onError={error =>
                  <h2>There was an Error: {error.message}</h2>
                }>
                <NavBar />
                <Main />
              </ErrorBoundary>
            </div>
          </BrowserRouter>
        </Provider>
    )
  }
}

export default SocialNetwork;
