import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ErrorBoundary from './common/ErrorBoundary'
import NavBar from './common/NavBar'
import Footer from './common/Footer'
import Main from './common/Main'
import Message from './common/Message'
import { dispatchLoadAuthorsStarted } from '../store/actions/authors'
import { dispatchLoginSuccess } from '../store/actions/login'
import { dispatchLoadArticles } from '../store/actions/articles'
import { dispatchLoadSubscriptions } from '../store/actions/subscriptions'

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
    console.log(this.props)
    return (
      <BrowserRouter>
        <div className={this.props.className}>
          <ErrorBoundary onError={error =>
            <h2>There was an Error: {error.message}</h2>
          }>
          {
            this.props.authors.loading
              ? <Message message="Loading..."/>
              : this.props.authors.error
                ? <Message message={this.props.authors.error}/>
                : <React.Fragment>
                    <NavBar />
                    <Main />
                    <Footer />
                  </React.Fragment>
          }
          </ErrorBoundary>
         </div>
      </BrowserRouter>
    )
  }

  componentDidMount = () => {
    // If authors list was not loaded from API, then load it
    if (this.props.authors.authors.length === 0) {
      this.props.loadAuthors()
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

export default styled(connect(
  state => ({
    authors: state.authors
  }),
  dispatch => ({
    loadAuthors: () => dispatch(dispatchLoadAuthorsStarted()),
    loadArticles: (articles) => dispatchLoadArticles(articles),
    loadSubscriptions: (subscriptions) => dispatchLoadSubscriptions(subscriptions),
    setLoggedAuthor: (author) => dispatchLoginSuccess(author)
  })
)(SocialNetwork))`
  a {
    color: ${props => props.theme.colors.secondary};
    &:hover {
      color: ${props => props.theme.colors.hover};
      text-decoration: none;
    }
  }
  header.page-title {
    h4 {
      padding: 10px 10px 10px 20px;
      margin: 20px 0 15px 0;
      background: ${props => props.theme.colors.background.title};
      border-radius: 5px;
      color: ${props => props.theme.colors.primary};
      box-shadow: 2px 2px 5px grey;
    }
  }
`
