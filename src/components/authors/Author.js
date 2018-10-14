import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Subscription from './Subscription'
import { getSubscriptionState, getName } from '../../utils/utils'

const Author = ({match: {path}, author, currentAuthor, subscriptions, ...props}) => (
  <article className={props.className}>
    <div className="author-header">
      <NavLink className="nav-link" to={{ pathname: `${path}/${author.login.uuid}`, state: {author: author}}}>
        <img src={author.picture.medium} alt={getName(author)}/>
      </NavLink>
      <div className="author-info">
        <h5>
          <NavLink className="nav-link" to={{ pathname: `${path}/${author.login.uuid}`, state: {author: author}}}>
            {getName(author)}
          </NavLink>
        </h5>
      </div>
    </div>
    <Subscription author={author} subscriptionState={getSubscriptionState(currentAuthor, author, subscriptions)} />
  </article>
)

export default styled(
  withRouter(
    connect(
      state => ({ currentAuthor: state.login.currentAuthor, subscriptions: state.subscriptions.subscriptions })
    )(Author)
  )
)`
  padding: 15px;
  border: ${props => props.theme.colors.border};
  border-radius: 5px;
  background: ${props => props.theme.colors.background.content};
  margin-bottom: 15px;
  box-shadow: 2px 2px 3px 0px #ccc;
  position: relative;
  @media (min-width: 992px) {
    width: calc(50% - 8px);
  }
  .author-header {
    display: flex;
    img {
      width: 100%;
      border-radius: 10px;
    }
    a {
      padding: 0;
    }
    .author-info {
      padding-left: 15px;
      display: flex;
      align-items: center;

      h5 {
        margin: 0;
        text-transform: capitalize
      }
    }
  }
`