import React from 'react';
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import Subscription from './Subscription'
import ArticleList from '../articles/ArticleList'
import { getSubscriptionState, getName } from '../../utils/utils'

class AuthorDetail extends React.Component {

  render() {
    const currentAuthor = this.props.login.currentAuthor
    const author = this.getAuthor()
    const subscriptions = this.props.subscriptions.subscriptions
    const subscriptionState = getSubscriptionState(currentAuthor, author, subscriptions)
    return (
      this.props.login.currentAuthor
        ? author 
          ? <React.Fragment>
              <section>
                <img src={author.picture.large} alt={getName(author)}/>
                <h5>{getName(author)}</h5>
                <Subscription author={author} subscriptionState={subscriptionState}/>
                <div><p>Phone: {author.phone}</p></div>
                <div><p>Cell: {author.cell}</p></div>
                <div><p>Email: <a href={author.email}>{author.email}</a></p></div>
                <div><p>Gender: {author.gender}</p></div>
                <div><p>Age: {author.dob.age}</p></div>
                <div><p>Location: {author.location.street}, {author.location.city}, {author.location.postcode} {author.location.state}</p></div>
                <div><p>Nationality: {author.nat}</p></div>
              </section>
              {
                subscriptionState === 'accepted'
                ? <ArticleList articles={this.getArticles()} />
                : null
              }
            </React.Fragment>
          : <Redirect to="/authors" />
        : <Redirect to="/login" />
    )
  }
  // filter articles
  getArticles = () => {
    const author = this.getAuthor()
    return this.props.articles.articles.filter(article => article.author === author.login.uuid)
  }

  authorExists = () => {
    if (!this.props.login.currentAuthor) {
      return null
    }
    const authorSearch = this.props.authors.authors.filter(author => author.login.currentAuthor.uuid === this.props.match.params.uuid)
    if (authorSearch.length > 0) {
      return authorSearch[0]
    } else {
      return null
    }
  }

  getAuthor = () => {
    // Get the author
    // If this component is invoked from Profile Page, it will be the current user and will come from reducer
    // If it is invoked from author detail, it will be come from props.location.state of the NavLink
    if (this.props.author) {
      return this.props.author
    } else if (this.props.location.state && this.props.location.state.author) {
      return this.props.location.state.author
    } else {
      return null
    }
  }

} 

export default withRouter(
  connect(
    state => ({ login: state.login, authors: state.authors, subscriptions: state.subscriptions, articles: state.articles })
  )(AuthorDetail)
);

