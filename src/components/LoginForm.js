import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchSetUsers } from '../store/actions/users';
import { dispatchLoginStarted, dispatchLoginEnded } from  '../store/actions/login';
import API_URL from '../config';
import ModalMessage from '../components/ModalMessage'

class LoginForm extends Component {

  state = {
    userName: 'smallswan392',
    password: 'freedom',
  };

  handleInput = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onLogin(this.state.userName, this.state.password)
  };

  handleMessageOK = () => {
    if (this.props.login.currentUser) {
      this.props.history.push("/users");
    } else {
      this.props.onReset();
    }
  }

  render() {
    return (
      this.props.login.currentUser
      ? <ModalMessage message="Loged In successfully" /* showButton={true} onClose={this.handleMessageOK} *//> 
      : this.state.loading
        ? <h1>Loading...</h1>
        : <React.Fragment>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>User Name
                  <input type="text" id="userName" value={this.state.userName} onChange={this.handleInput} required/>
                </label>
              </div>
              <div>
                <label>Password
                  <input type="password" id="password" value={this.state.password} onChange={this.handleInput} required/>
                </label>
              </div>
              <input type="submit" disabled={this.props.login.isLogging} value="Login" />
            </form>
            { 
              this.props.login.error
                ? <ModalMessage message={this.props.login.error} />
                : null
            }
          </React.Fragment>
    );
  }

  componentDidMount = async () => {
    // If user list was not loaded from API, then load it
    if (this.props.users.userList.length === 0) {
      // Request users from API
      try {
        this.setState({ loadingUsers: true })
        const response = await fetch(API_URL);
        const usersJSON = await response.json();
        if (usersJSON.results) {
          this.props.onSetUsers(usersJSON.results);
        }
        this.setState({ error: null })
      } catch(err) {
        console.log(err);
        this.setState({ error: 'There was an Error getting Users Data' })
      } finally {
        this.setState({ loadingUsers: false })
      }
    } else {
      this.setState({ loadingUsers: false })
    }
  }

  componentWillUnmount = () => {
    this.props.onReset();
  }
}

export default connect(
  state => ({ users: state.users, login: state.login }), 
  dispatch => ({
    onSetUsers: (users) => dispatchSetUsers(users),
    onLogin: (userName, password) => dispatch(dispatchLoginStarted(userName, password)),
    onReset: () => dispatchLoginEnded()
  })
)(LoginForm)
