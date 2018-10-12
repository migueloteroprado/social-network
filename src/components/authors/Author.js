import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Subscription from './Subscription'
import { getSubscriptionState, getName } from '../../utils/utils'
import './Author.scss'

const Author = ({match: {path}, author, currentAuthor, subscriptions}) => (
  <article className="author">
    <div className="author-header">
      <NavLink className="nav-link" to={{ pathname: `${path}/${author.login.uuid}`, state: {author: author}}}>
        <img src={author.picture.thumbnail} alt={getName(author)}/>
      </NavLink>
      <div className="author-info">
        <h5>
          <NavLink className="nav-link" to={{ pathname: `${path}/${author.login.uuid}`, state: {author: author}}}>
            {getName(author)}
          </NavLink>
        </h5>
        {/*<a href={`mailto:${author.email}`}>{author.email}</a>*/}
      </div>
    </div>
    <Subscription author={author} subscriptionState={getSubscriptionState(currentAuthor, author, subscriptions)} />
  </article>
)

export default withRouter(
  connect(
    state => ({ currentAuthor: state.login.currentAuthor, subscriptions: state.subscriptions.subscriptions })
  )(Author)
)
