import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchRemoveSubscription } from '../store/actions/subscriptions';
import { dispatchAddRequest } from '../store/actions/requests';

class User extends Component {

  state = {
    subscriptionState: ''
  }
  
  render() {
    const user = this.props.user
    return (
    <div>
      <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`}/>
      <h3>{`${user.name.first} ${user.name.last}`}</h3>
      <p>{user.email}</p>
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

  component

  componentDidMount() {
    const currentUser = this.props.login.currentUser
    const user = this.props.user
    const subscriptions = this.props.subscriptions.subscriptions
    const requests = this.props.requests.requests
    if (user.login.uuid === currentUser.login.uuid) {
      this.setState({ subscriptionState: 'currentUser'})
      return;
    }
    const subscribed = subscriptions.filter(
      subscription => 
        subscription.user === user.login.uuid && subscription.subscriptor === currentUser.login.uuid
    );
    if (subscribed.length > 0) {
      this.setState({ subscriptionState: 'subscribed'})
    } else {
      const pending = requests.filter(
        request => 
          request.status === 'pending' && request.from === currentUser.login.uuid && request.to === user.login.uuid
      );
      if (pending.length > 0) {
        this.setState({ subscriptionState: 'pending' })
      }
    }
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
)(User);