import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Subscription from './Subscription'
import ArticleList from '../articles/ArticleList'
import { getSubscriptionState, getName } from '../../utils/utils'
import './AuthorDetail.scss'

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
              <section className="author-detail">
                <header>
                  <img src={author.picture.large} alt={getName(author)}/>
                  <h4 className="author-name">{getName(author)}</h4>
                </header>
                <div className="author-info">
                  <Subscription author={author} subscriptionState={subscriptionState}/>
                  <div className="author-info-line"><div className="author-info-label">Phone:</div><div> {author.phone}</div></div>
                  <div className="author-info-line"><div className="author-info-label">Cell:</div><div> {author.cell}</div></div>
                  <div className="author-info-line"><div className="author-info-label">Email:</div><div> <a href={author.email}>{author.email}</a></div></div>
                  <div className="author-info-line"><div className="author-info-label">Gender:</div><div> {author.gender}</div></div>
                  <div className="author-info-line"><div className="author-info-label">Age:</div><div> {author.dob.age}</div></div>
                  <div className="author-info-line"><div className="author-info-label">Location:</div><div> {author.location.street}, {author.location.city}, {author.location.postcode} {author.location.state}</div></div>
                  <div className="author-info-line"><div className="author-info-label">Nationality:</div><div> {author.nat}</div></div>
                </div>
              </section>
              {
                subscriptionState === 'accepted'
                // filter articles of the current author
                ? <section>
                    <ArticleList articles={articles.filter(article => article.author === author.login.uuid)} />
                  </section>
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


