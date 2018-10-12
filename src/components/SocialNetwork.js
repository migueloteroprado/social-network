import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './common/NavBar';
import Main from './common/Main';
import './SocialNetwork.scss'
import { Provider, connect } from 'react-redux';
import ErrorBoundary from './common/ErrorBoundary'
import Message from './common/Message'
import store from '../store';
import { dispatchLoadAuthorsStarted } from '../store/actions/authors';
import { dispatchLoginSuccess } from '../store/actions/login';
import { dispatchLoadArticles } from '../store/actions/articles';
import { dispatchLoadSubscriptions } from '../store/actions/subscriptions';

class SocialNetwork extends Component {

  state = {
    loadingAuthors: false,
    error: null
  }

  constructor(props) {
    super(props)
    // get authorLogged from sessionStorage
    const authorLogged = sessionStorage.getItem('social.currentAuthor')
    if (authorLogged) {
      this.props.setLoggedAuthor(JSON.parse(authorLogged))
    }
    // Get data from localStorage
    this.getLocalStorageArticles();
    this.getLocalStorageSubscriptions();
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <ErrorBoundary onError={error =>
                <h2>There was an Error: {error.message}</h2>
              }>
              {
                this.props.authors.loading
                  ? <Message message="Loading ..."/>
                  : this.props.authors.error
                    ? <Message message={this.props.authors.error}/>
                    : <React.Fragment>
                        <NavBar />
                        <Main />
                      </React.Fragment>
              }
            </ErrorBoundary>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }

  componentDidMount = () => {
    // If authors list was not loaded from API, then load it
    if (this.props.authors.authors.length === 0) {
      this.props.loadAuthors()
      //this.loadAuthors();

    }
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

  // Get subscriptions from localStorage
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

}

export default connect(
  state => ({
    authors: state.authors
  }),
  dispatch => ({
    loadAuthors: () => dispatch(dispatchLoadAuthorsStarted()),
    loadArticles: (articles) => dispatchLoadArticles(articles),
    loadSubscriptions: (subscriptions) => dispatchLoadSubscriptions(subscriptions),
    setLoggedAuthor: (author) => dispatchLoginSuccess(author)
  })
)(SocialNetwork)
