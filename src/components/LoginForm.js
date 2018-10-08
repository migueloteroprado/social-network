import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchLoginStarted, dispatchSetUsers } from '../store/actions/users';
import API_URL from '../config';

class LoginForm extends Component {

  state = {
    userName: 'smallswan392',
    password: 'freedom',
    loading: true,
    logingIn: false
  };

  handleInput = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = () => {
    this.setState({ logingIn: true });
    console.log(this.state)
    this.props.onLogin(this.state.userName, this.state.password)
  };

  render() {
    return (
      this.state.loading
      ? <h1>Loading...</h1>
      : <div>
          <div>
            <label>User Name
              <input type="text" id="userName" value={this.state.userName} onChange={this.handleInput}/>
            </label>
          </div>
          <div>
            <label>Password
              <input type="password" id="password" value={this.state.password} onChange={this.handleInput}/>
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
        const response = await fetch(API_URL);
        const usersJSON = await response.json();
        if (usersJSON.results) {
          this.props.onSetUsers(usersJSON.results);
        }
      } catch(err) {
        console.log(err);
        throw new Error(err.message);
      } finally {
        this.setState({
          loading: false
        })
      }
    } else {
      this.setState({
        loading: false
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
