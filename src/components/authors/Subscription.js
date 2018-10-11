import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchRemoveSubscription, dispatchAddSubscription } from '../../store/actions/subscriptions';

class Subscription extends Component {

  state = {
    subscriptionState: 'unsubscribed'
  }
  
  render() {
    switch (this.state.subscriptionState) {
      case 'unsubscribed':
        return (
          <div>
            <span>Unsubscribed</span>
            <button className='btn btn-secondary btn-sm' onClick={this.requestSubscription}>Request Subscription</button> 
          </div>
        )
      case 'accepted':
        return (
          <div>
            <p>Subscribed</p>
            <button className='btn btn-secondary btn-sm' onClick={this.removeSubscription}>Remove Subscription</button>
          </div>
        )
      case 'pending':
        return (
          <div>
            <p>Request Pending</p>
            <button className='btn btn-secondary btn-sm' onClick={this.removeSubscription}>Cancel Request</button>
          </div>
        )
      case 'rejected':
        return (
          <div>
            <p>Request Rejected</p>
            <button className='btn btn-secondary btn-sm' onClick={this.requestSubscription}>Request Subscription</button> 
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
