import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchRemoveSubscription } from '../store/actions/subscriptions';
import { dispatchAddRequest } from '../store/actions/requests';

class Subscription extends Component {

  state = {
    subscriptionState: ''
  }
  
  render() {
    return (
      <div>
      {
        this.state.subscriptionState === 'subscribed'
          ? <p>Subscribed</p>
          : this.state.subscriptionState === 'pending'
            ? <p>Subscription Pending</p>
            : this.state.subscriptionState === 'currentUser'
              ? <p>This is You</p>
              : <button onClick={this.handleRequest}>Request Subscription</button> 
      }
      </div>)
  }

  componentDidMount = () => {
    this.setState({subscriptionState: this.props.subscriptionState })
  }

  handleRequest = () => {
    this.setState({ subscriptionState: 'pending' })
    this.props.onRequestSubscription({ from: this.props.login.currentUser.login.uuid, to: this.props.user.login.uuid, status: 'pending' })
  }
}

export default connect(
  state => ({subscriptions: state.subscriptions, requests: state.requests, login: state.login}),
  dispatch => ({
    onRequestSubscription: (request) => dispatchAddRequest(request),
    onRemoveSubscription: (subscription) => dispatchRemoveSubscription(subscription),
  })
)(Subscription)
