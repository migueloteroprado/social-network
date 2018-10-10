import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect }  from 'react-redux';
import { dispatchLogout } from '../store/actions/login';
import ModalMessage from './ModalMessage'

class Logout extends Component {

  render() {
    return (
      /* <ModalMessage message="Logged out successfully" onClose={() => this.props.history.push('/')}/> */
      <Redirect to='/'/>
    )
  }
  componentDidMount() {
    console.log(this.props);
    this.props.onLogout();
  }
}

export default connect(
  state => ({ users: state.users, login: state.login }),
  dispatch => ({
    onLogout: () => dispatchLogout()
  })
)(Logout);