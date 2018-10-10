import { Redirect } from 'react-router-dom';
import React from 'react';
import { connect }  from 'react-redux';
import User from './Author';
import getSubscriptionState from '../../utils/subscriptions'

const Authors = ({ users: {userList}, login: {currentUser}, user, subscriptions: {subscriptions} }) => {
  return (
    currentUser 
      ? <div>
          <h3>Authors</h3>
          <div>
            {
              // Order users by subscription state, subscribed first
              userList
              .map(user => Object.assign({}, user, {subscriptionState: getSubscriptionState(currentUser, user, subscriptions)}))
              .sort((u1, u2) => u1.subscriptionState === 'accepted' ? -1 : 1)
              .map(user => (
                user.login.uuid === currentUser.login.uuid
                  ? null
                  : <User user={user} key={user.login.uuid} />
              ))
            }
          </div>
        </div>
      : <Redirect to="/login" />
  )
}
export default connect(
  state => ({ users: state.users, login: state.login, subscriptions: state.subscriptions})
)(Authors);
