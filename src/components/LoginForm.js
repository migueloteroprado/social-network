import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchLoginStarted, dispatchSetUsers } from '../store/actions/users';
import API_URL from '../config';
import ModalMessage from '../components/ModalMessage'

class LoginForm extends Component {

  state = {
    userName: 'smallswan392',
    password: 'freedom',
    loadingUsers: false,
    logingIn: false,
    error: null
  };

  handleInput = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = () => {
    this.setState({ logingIn: true });
    this.props.onLogin(this.state.userName, this.state.password)
  };

  handleLoginOK = () => {
    console.log(this.state)
    this.props.history.push("/users");
  }

  render() {
    return (
      this.props.users.currentUser && this.state.logingIn
      ? <ModalMessage message="Loged In successfully" onClose={this.handleLoginOK}/>
      : this.state.error || this.props.users.error
        ? <h2>ERROR: {this.state.error || this.props.users.error}</h2>
        : this.state.loading
          ? <h1>Loading...</h1>
          : <div>
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
              <button type="submit" onClick={this.handleSubmit} disabled={this.state.logingIn}>Login</button>
            </div>
    );
  }

  componentDidMount = async () => {
    // If user list was not loaded from API, then load it
    if (this.props.users.userList.length === 0) {
      // Request users from API
      try {
        this.setState({
          loadingUsers: true
        })
        const response = await fetch(API_URL);
        const usersJSON = await response.json();
        if (usersJSON.results) {
          this.props.onSetUsers(usersJSON.results);
        }
        this.setState({
          error: null
        })
      } catch(err) {
        console.log(err);
        this.setState({
          error: 'There was an Error getting Users Data'
        })
      } finally {
        this.setState({
          loadingUsers: false
        })
      }
    } else {
      this.setState({
        loadingUsers: false
      })
    }
  }
}

export default connect(
  state => ({ users: state.users}), 
  dispatch => ({
    onSetUsers: (users) => dispatchSetUsers(users),
    onLogin: (userName, password) => dispatch(dispatchLoginStarted(userName, password))
  })
)(LoginForm)
