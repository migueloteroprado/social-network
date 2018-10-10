import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Subscription from './Subscription'
import { getSubscriptionState, getName } from '../../utils/utils'

const Author = ({match: {path}, author, login: {currentAuthor}, subscriptions: {subscriptions}}) => (
  <div>
    <img src={author.picture.thumbnail} alt={getName(author)}/>

    <NavLink className="nav-link" to={{ pathname: `${path}/${author.login.uuid}`, state: {author: author}}}>
    <h4>
      {getName(author)}
    </h4>
    </NavLink>
    <p><a href={author.email}>{author.email}</a></p>
    <Subscription author={author} subscriptionState={getSubscriptionState(currentAuthor, author, subscriptions)} />
  </div>
)

export default withRouter(
  connect(
    state => ({ login: state.login, subscriptions: state.subscriptions })
  )(Author)
)
