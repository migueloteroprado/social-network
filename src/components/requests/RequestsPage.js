import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
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
      ? <section className={this.props.className}>
          <header className="page-title">
            <h4>Pending Requests</h4>
          </header>
          <div className="requests-detail">
          {
            subscriptions.length > 0
            ? subscriptions.map(subscription => 
              <div className="request" key={subscription.subscriptor}>
                {
                  getName(getAuthorByUUID(subscription.subscriptor, authors))
                }
                <div className="subscription-buttons">
                  <button className='btn btn-success' onClick={(event) => this.handleAccept(event, subscription)}>Accept</button>
                  <button className='btn btn-danger' onClick={(event) => this.handleReject(event, subscription)}>Reject</button>
                </div>
              </div>)
            : <div className="info-message">
                <h5>No pending requests</h5>
              </div>
          }
          </div>
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

export default styled(
  connect(
    state => ({ authors: state.authors.authors, currentAuthor: state.login.currentAuthor, subscriptions: state.subscriptions.subscriptions }),
    dispatch => ({
      onAccept: (subscription) => dispatchAcceptSubscription(subscription),
      onReject: (subscription) => dispatchRejectSubscription(subscription)
    })
  )(RequestsPage)
)`
  .info-message {
    padding: 15px 20px 15px 20px;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 5px;
    margin: 20px 0;
    background: ${props => props.theme.colors.background.content};  
  }
  .request {
    display: flex;
    justify-content: space-between;
    text-align: right;
    align-items: center;
    padding: 20px 20px 15px 25px;
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 5px;
    background: white;
    margin-bottom: 15px;
    box-shadow: 2px 2px 3px 0px #ccc;
    position: relative;
    font-size: 1.1rem;
    text-transform: capitalize;
  }
  button {
    margin-left: 15px;
    outline: none;
  }`
