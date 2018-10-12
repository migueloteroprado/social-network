import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dispatchRemoveSubscription, dispatchAddSubscription } from '../../store/actions/subscriptions'
import './Subscription.scss'

class Subscription extends Component {

  state = {
    subscriptionState: 'unsubscribed'
  }
  
  render() {
    switch (this.state.subscriptionState) {
      case 'unsubscribed':
        return (
          <div className="author-subscription-state">
            <span className="subscription-state unsubscribed">Unsubscribed</span>
            <span className="subscription-link" onClick={this.requestSubscription}>Request Subscription</span> 
          </div>
        )
      case 'accepted':
        return (
          <div className="author-subscription-state">
            <span className="subscription-state accepted">Subscribed</span>
            <span className="subscription-link" onClick={this.removeSubscription}>Remove Subscription</span>
          </div>
        )
      case 'pending':
        return (
          <div className="author-subscription-state ">
            <span className="subscription-state pending">Request Pending</span>
            <span className="subscription-link" onClick={this.removeSubscription}>Cancel Request</span>
          </div>
        )
      case 'rejected':
        return (
          <div className="author-subscription-state ">
            <span className="subscription-state rejected">Request Rejected</span>
            <span className="subscription-link" onClick={this.requestSubscription}>Request Subscription</span> 
          </div>
        )
      default:
        return null;
    }
  }

  componentDidMount = () => {
    this.setState({subscriptionState: this.props.subscriptionState })
  }

  requestSubscription = () => {
    this.setState({ subscriptionState: 'pending' })
    this.props.onAddSubscription({ author: this.props.author.login.uuid, subscriptor: this.props.currentAuthor.login.uuid, state: 'pending' })
  }
  removeSubscription = () => {
    this.setState({ subscriptionState: 'unsubscribed' })
    this.props.onRemoveSubscription({ author: this.props.author.login.uuid, subscriptor: this.props.currentAuthor.login.uuid })
  }

}

export default connect(
  state => ({currentAuthor: state.login.currentAuthor}),
  dispatch => ({
    onAddSubscription: (subscription) => dispatchAddSubscription(subscription),
    onRemoveSubscription: (subscription) => dispatchRemoveSubscription(subscription),
  })
)(Subscription)
