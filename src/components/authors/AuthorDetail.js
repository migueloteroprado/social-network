import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Subscription from './Subscription'
import ArticleList from '../articles/ArticleList'
import { getSubscriptionState, getName } from '../../utils/utils'

class AuthorDetail extends React.Component {

  //render({login: {currentAuthor}, subscriptions: {subscriptions}, articles: {articles}, author}) {
  render() {
    const {
      currentAuthor,
      subscriptions,
      articles,
      author
    } = this.props;
    const subscriptionState = getSubscriptionState(currentAuthor, author, subscriptions)
    return (
      currentAuthor
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
                // filter articles of the current author
                ? <ArticleList articles={articles.filter(article => article.author === author.login.uuid)} />
                : null
              }
            </React.Fragment>
          : <Redirect to="/authors" />
        : <Redirect to="/login" />
    )
  }
} 

export default connect(
  state => ({ 
    currentAuthor: state.login.currentAuthor,
    subscriptions: state.subscriptions.subscriptions,
    articles: state.articles.articles
  })
)(AuthorDetail)


