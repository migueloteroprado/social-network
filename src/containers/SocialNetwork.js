import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Main from './Main';
import './SocialNetwork.css'
import { Provider, connect } from 'react-redux';
import ErrorBoundary from './ErrorBoundary'
import store from '../store';
import { dispatchLoadArticles } from '../store/actions/articles';
import { dispatchLoadSubscriptions } from '../store/actions/subscriptions';
import { dispatchLoadRequests } from '../store/actions/requests';

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
  componentDidMount = () => {
    // Get data from localStorage
    this.getLocalStorageArticles();
    this.getLocalStorageSubscriptions();
    this.getLocalStorageRequests();

    const self = this;
    window.addEventListener('storage', (event) => {  
      if (event.key === 'social.articles') {
        self.getLocalStorageArticles();
      }
      if (event.key === 'social.subscriptions') {
        self.getLocalStorageSubscriptions();
      }
      if (event.key === 'social.articles') {
        self.getLocalStorageRequests();
      }
    });

  }

  // Get articles from localStorage and calculate id
  getLocalStorageArticles() {
    let articles = [];
    try {
      const storageArticles = localStorage.getItem('social.articles');
      if (storageArticles) 
        articles = JSON.parse(storageArticles);
    }
    catch (error) {
      articles = [];
    }
    // calculate id
    const id = articles.reduce((prev, next) => Math.max(prev, next.id), 0);
    this.props.loadArticles({ articles, id });
  }

  getLocalStorageSubscriptions() {
    let subscriptions = [];
    try {
      const storageSubscriptions = localStorage.getItem('social.subscriptions');
      if (storageSubscriptions) 
        subscriptions = JSON.parse(storageSubscriptions);
    }
    catch (error) {
      subscriptions = [];
    }
    this.props.loadSubscriptions(subscriptions);
  }

  getLocalStorageRequests() {
    let requests = [];
    try {
      const storageRequests = localStorage.getItem('social.requests');
      if (storageRequests) 
      requests = JSON.parse(storageRequests);
    }
    catch (error) {
      requests = [];
    }
    this.props.loadRequests(requests);
  }  

}

export default connect(
  state => ({ 
    users: state.users,
    login: state.login,
    articles: state.articles,
    subscriptions: state.subscriptions,
    requests: state.requests }),
  dispatch => ({
    loadArticles: (articles) => dispatchLoadArticles(articles),
    loadSubscriptions: (subscriptions) => dispatchLoadSubscriptions(subscriptions),
    loadRequests: (requests) => dispatchLoadRequests(requests),
  })
)(SocialNetwork);
