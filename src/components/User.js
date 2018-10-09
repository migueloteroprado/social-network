import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Subscription from './Subscription'
import getSubscriptionState from '../utils/subscriptions'

const User = ({match: {path}, user, login: {currentUser}, subscriptions: {subscriptions}, requests: {requests}}) => (
  <div>
    <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`}/>
    <NavLink className="nav-link" to={{ pathname: `${path}/${user.login.uuid}`, state: {user: user}}}>
    <h4>
      {`${user.name.first} ${user.name.last}`}
    </h4>
    </NavLink>
    <p><a href={user.email}>{user.email}</a></p>
    <Subscription user={user} subscriptionState={getSubscriptionState(currentUser, user, subscriptions, requests)} />
  </div>
)

export default withRouter(
  connect(
    state => ({ login: state.login, subscriptions: state.subscriptions, requests: state.requests })
  )(User)
)
