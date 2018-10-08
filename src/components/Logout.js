import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { dispatchLogout } from '../store/actions/users';

class Logout extends Component {

  state = {
    loggingOut: true
  }
  render(props) {
    return (
      this.props.users.currentUser 
        ? <h1>Logging out...</h1>
        : <h1>Logged out successfully</h1>
    )
  }
  componentDidMount() {
    console.log(this.props);
    this.props.onLogout();
  }
}

export default connect(
  state => ({ users: state.users}),
  dispatch => ({
    onLogout: () => dispatchLogout()
  })
)(Logout);