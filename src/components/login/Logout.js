import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import { connect }  from 'react-redux';
import { dispatchLogout } from '../../store/actions/login';
import Message from '../common/Message'

class Logout extends Component {

  render() {
    return (
      <Message message="Logged out successfully" /*onClose={() => this.props.history.push('/')}*/ /> 
      /*<Redirect to='/'/> */
    )
  }
  componentDidMount() {
    this.props.onLogout();
  }
}

export default connect(
  state => ({ authors: state.authors, login: state.login }),
  dispatch => ({
    onLogout: () => dispatchLogout()
  })
)(Logout);