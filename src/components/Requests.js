import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { dispatchAcceptSubscription, dispatchRejectSubscription } from '../store/actions/subscriptions'

class Requests extends Component {

  render() {
    const subscriptions = this.props.login.currentUser 
      ? this.props.subscriptions.subscriptions.filter(subscription => 
        subscription.user === this.props.login.currentUser.login.uuid && subscription.state === 'pending')
      : []
    return (
      this.props.login.currentUser 
      ? <section>
          <header>
            <h3>Pending Requests</h3>
          </header>
          {
            subscriptions.length > 0
            ? subscriptions.map(subscription => 
              <div key={subscription.subscriptor}>
                {subscription.subscriptor}
                <button type="button" onClick={(event) => this.handleAccept(event, subscription)}>Accept</button>
                <button type="button" onClick={(event) => this.handleReject(event, subscription)}>Reject</button>
              </div>)
            : <p>No pending requests</p>
          }
        </section>
      : <Redirect to="/login" />
    )
  }

  handleAccept = (event, subscription) => {
    this.props.onAccept({
      user: this.props.login.currentUser.login.uuid,
      subscriptor: subscription.subscriptor,
      state: 'accepted'
    })
  }

  handleReject = (event, subscription) => {
    this.props.onReject({
      user: this.props.login.currentUser.login.uuid,
      subscriptor: subscription.subscriptor,
      state: 'rejected'
    })
  }

}

export default connect(
  state => ({ login: state.login, subscriptions: state.subscriptions }),
  dispatch => ({
    onAccept: (subscription) => dispatchAcceptSubscription(subscription),
    onReject: (subscription) => dispatchRejectSubscription(subscription)
  })
)(Requests)
