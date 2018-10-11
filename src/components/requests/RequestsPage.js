import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { dispatchAcceptSubscription, dispatchRejectSubscription } from '../../store/actions/subscriptions'
import { getAuthorByUUID, getName } from '../../utils/utils'

class RequestsPage extends Component {

  render = () => {
    const authors = this.props.authors
    const subscriptions = this.props.currentAuthor
      ? this.props.subscriptions.filter(subscription => 
        subscription.author === this.props.currentAuthor.login.uuid && subscription.state === 'pending')
      : []
    return (
      this.props.currentAuthor
      ? <section>
          <header>
            <h3>Pending Requests</h3>
          </header>
          {
            subscriptions.length > 0
            ? subscriptions.map(subscription => 
              <div key={subscription.subscriptor}>
                {
                  getName(getAuthorByUUID(subscription.subscriptor, authors))

                }
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
      author: this.props.currentAuthor.login.uuid,
      subscriptor: subscription.subscriptor,
      state: 'accepted'
    })
  }

  handleReject = (event, subscription) => {
    this.props.onReject({
      author: this.props.currentAuthor.login.uuid,
      subscriptor: subscription.subscriptor,
      state: 'rejected'
    })
  }

}

export default connect(
  state => ({ authors: state.authors.authors, currentAuthor: state.login.currentAuthor, subscriptions: state.subscriptions.subscriptions }),
  dispatch => ({
    onAccept: (subscription) => dispatchAcceptSubscription(subscription),
    onReject: (subscription) => dispatchRejectSubscription(subscription)
  })
)(RequestsPage)
