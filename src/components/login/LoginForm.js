import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchSetAuthors } from '../../store/actions/authors';
import { dispatchLoginStarted, dispatchLoginReset } from  '../../store/actions/login';
import Message from '../common/Message'

class LoginForm extends Component {

  state = {
    userName: 'smallswan392',
    password: 'freedom'
  };

  handleInput = (event) => {
    this.setState({ [event.target.id]: event.target.value });
    this.props.onReset();
  };

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onLogin(this.state.userName, this.state.password)
  };

  render() {
    return (
      this.props.login.currentAuthor
      ? <Message message="Loged In successfully" /* showButton={true} onClose={this.handleMessageOK} *//> 
      : <React.Fragment>
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
            <div className="form-group">
              <button className="btn btn-secondary btn-sm" type="submit" disabled={this.props.login.isLogging}>Login</button>
            </div>
          </form>
          {
            this.props.login.error
            ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Login or Password Incorrect...</strong>
              </div>
            : null
          }
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
