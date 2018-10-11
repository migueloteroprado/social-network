import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchSetAuthors } from '../../store/actions/authors';
import { dispatchLoginStarted, dispatchLoginReset } from  '../../store/actions/login';
import Message from '../common/Message'

class LoginForm extends Component {

  state = {
    userName: 'smallswan392',
    password: 'freedom',
  };

  handleInput = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    this.props.onReset();
  };

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onLogin(this.state.userName, this.state.password)
  };

  resetMessage = () => {
    this.setState({showMessage: false })
    this.props.onReset();
  }

  render() {
    return (
      this.props.login.currentAuthor
      ? <Message message="Loged In successfully" /* showButton={true} onClose={this.handleMessageOK} *//> 
      : <React.Fragment>
          <header className="page-title">
            <h3>Login</h3>
          </header>
          <form id="loginForm" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>
                User Name
                <input type="text" className="form-control" id="userName" value={this.state.userName} onChange={this.handleInput} required/>
              </label>
            </div>
            <div className="form-group">
              <label>Password
                <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handleInput} required/>
              </label>
            </div>
            {
            this.props.login.error
            ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>User name or Password Incorrect</strong>
                <button className="close" data-dismiss="alert" aria-label="Close" onClick={this.resetMessage}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            : null
          }

            <div className="form-group">
              <button className="btn btn-primary" type="submit" disabled={this.props.login.isLogging}>Login</button>
            </div>
          </form>
        </React.Fragment>
    );
  }

  componentWillUnmount = () => {
    this.props.onReset();
  }

}

export default connect(
  state => ({ authors: state.authors, login: state.login }), 
  dispatch => ({
    onSetAuthors: (authors) => dispatchSetAuthors(authors),
    onLogin: (userName, password) => dispatch(dispatchLoginStarted(userName, password)),
    onReset: () => dispatchLoginReset()
  })
)(LoginForm)
