import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dispatchRemoveSubscription, dispatchAddSubscription } from '../../store/actions/subscriptions'
import styled from 'styled-components'

class Subscription extends Component {

  state = {
    subscriptionState: 'unsubscribed'
  }
  
  render() {
    switch (this.state.subscriptionState) {
      case 'unsubscribed':
        return (
          <div className={this.props.className}>
            <span className="subscription-state unsubscribed">Unsubscribed</span>
            <span className="subscription-link" onClick={this.requestSubscription}>Request Subscription</span> 
          </div>
        )
      case 'accepted':
        return (
          <div className={this.props.className}>
            <span className="subscription-state accepted">Subscribed</span>
            <span className="subscription-link" onClick={this.removeSubscription}>Remove Subscription</span>
          </div>
        )
      case 'pending':
        return (
          <div className={this.props.className}>
            <span className="subscription-state pending">Request Pending</span>
            <span className="subscription-link" onClick={this.removeSubscription}>Cancel Request</span>
          </div>
        )
      case 'rejected':
        return (
          <div className={this.props.className}>
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

export default styled(
  connect(
    state => ({currentAuthor: state.login.currentAuthor}),
    dispatch => ({
      onAddSubscription: (subscription) => dispatchAddSubscription(subscription),
      onRemoveSubscription: (subscription) => dispatchRemoveSubscription(subscription),
    })
  )(Subscription)
)`
  position: absolute;
  height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 10px;
  right: 15px;
  top: 0;
  //bottom: 10px;

  .subscription-state {
    font-size: 0.9rem;
    font-weight: bold;
    &.unsubscribed {
      color: ${props => props.theme.colors.subscription.unsubscribed};
    }
    &.accepted {
      color: ${props => props.theme.colors.subscription.accepted};
    }
    &.pending {
      color: ${props => props.theme.colors.subscription.pending};
    }
    &.rejected {
      color: ${props => props.theme.colors.subscription.rejected};
    }
  }

  .subscription-link {
    cursor: pointer;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.secondary};
    &:hover {
      color: ${props => props.theme.colors.hover};
    }
  }
`