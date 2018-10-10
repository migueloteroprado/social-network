import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { dispatchAcceptSubscription, dispatchRejectSubscription } from '../../store/actions/subscriptions'

class Requests extends Component {

  render() {
    const subscriptions = this.props.login.currentAuthor
      ? this.props.subscriptions.subscriptions.filter(subscription => 
        subscription.author === this.props.login.currentAuthor.login.uuid && subscription.state === 'pending')
      : []
    return (
      this.props.login.currentAuthor
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
      author: this.props.login.currentAuthor.login.uuid,
      subscriptor: subscription.subscriptor,
      state: 'accepted'
    })
  }

  handleReject = (event, subscription) => {
    this.props.onReject({
      author: this.props.login.currentAuthor.login.uuid,
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
