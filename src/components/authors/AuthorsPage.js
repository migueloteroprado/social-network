import { Redirect } from 'react-router-dom';
import React from 'react';
import { connect }  from 'react-redux';
import Author from './Author';
import { getSubscriptionState } from '../../utils/utils'
import './AuthorsPage.scss'

const AuthorsPage = ({ authors, currentAuthor, subscriptions }) => {
  return (
    currentAuthor
      ? <div>
          <header className="page-title">
            <h3>Authors</h3>
          </header>
          <section className="author-list">
            {
              // Order authors by subscription state, subscribed first
              authors
              .map(author => Object.assign({}, author, {subscriptionState: getSubscriptionState(currentAuthor, author, subscriptions)}))
              .sort((u1, u2) => u1.subscriptionState === 'accepted' ? -1 : 1)
              .map(author => (
                author.login.uuid === currentAuthor.login.uuid
                  ? null
                  : <Author author={author} key={author.login.uuid} />
              ))
            }
          </section>
        </div>
      : <Redirect to="/login" />
  )
}
export default connect(
  state => ({ authors: state.authors.authors, currentAuthor: state.login.currentAuthor, subscriptions: state.subscriptions.subscriptions})
)(AuthorsPage);
