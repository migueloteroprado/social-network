import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import NotFound from './NotFound'
import Subscription from './Subscription'
import Article from './Article'
import getSubscriptionState from '../utils/subscriptions'
import { actionAddArticle } from '../store/actions/articles'


class UserDetail extends React.Component {

  render() {
    const currentUser = this.props.login.currentUser
    const user = this.getUser()
    const subscriptions = this.props.subscriptions.subscriptions
    const requests = this.props.requests.requests
    const subscriptionState = getSubscriptionState(currentUser, user, subscriptions, requests)
    return (
      this.props.login.isLogged
        ? user 
          ? <React.Fragment>
              <section>
                <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`}/>
                <h5>{`${user.name.first} ${user.name.last}`}</h5>
                <Subscription user={user} subscriptionState={subscriptionState}/>
                <div><p>Phone: {user.phone}</p></div>
                <div><p>Cell: {user.cell}</p></div>
                <div><p>Email: <a href={user.email}>{user.email}</a></p></div>
                <div><p>Gender: {user.gender}</p></div>
                <div><p>Age: {user.dob.age}</p></div>
                <div><p>Location: {user.location.street}, {user.location.city}, {user.location.postcode} {user.location.state}</p></div>
                <div><p>Nationality: {user.nat}</p></div>
              </section>
              {
                subscriptionState === 'subscribed'
                ? <section>
                    <header>
                      <h4>Articles</h4>
                    </header>
                    { 
                      this.getArticles().map(article => (
                        <Article article={article} key={article.id} />
                      ))
                    }
                  </section>
                : null
              }

            </React.Fragment>
          : <Redirect to="/users" />
        : <Redirect to="/login" />
    )
  }

  getArticles = () => {
    return this.props.articles.articles.filter(article => article.author === this.props.login.currentUser.login.uuid)
  }

  userExists = () => {
    if (!this.props.login.isLogged) {
      return null
    }
    const userSearch = this.props.users.userList.filter(user => user.login.currentUser.uuid === this.props.match.params.uuid)
    if (userSearch.length > 0) {
      return userSearch[0]
    } else {
      return null
    }
  }

  getUser= () => {
    if (this.props.user) {
      return this.props.user
    } else if (this.props.location.state && this.props.location.state.user) {
      return this.props.location.state.user
    } else {
      return null
    }
  }

} 

export default connect(
  state => ({ login: state.login, users: state.users, subscriptions: state.subscriptions, requests: state.requests, articles: state.articles })
)(UserDetail);

