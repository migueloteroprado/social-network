import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dispatchSetAuthors } from '../../store/actions/authors';
import { dispatchLoginStarted, dispatchLoginEnded } from  '../../store/actions/login';
import ModalMessage from '../ModalMessage'

class LoginForm extends Component {

  state = {
    userName: 'smallswan392',
    password: 'freedom',
    showErrorMessage: false
  };

  handleInput = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onLogin(this.state.userName, this.state.password)
  };

  /*
  handleMessageOK = () => {
    if (this.props.login.currentAuthor) {
      this.props.history.push("/authors");
    } else {
      this.props.onReset();
    }
  }
  */

  render() {
    return (
      this.props.login.currentAuthor
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
                ? <div className="alert alert-warning fade show" role="alert">
                    <strong>{this.props.login.error}</strong>
                  </div>
                : null
            }
          </React.Fragment>
    );
  }

  componentWillUnmount = () => {
    this.props.onReset();
  }

  resetMessage = () => {
    this.setState({...this.state, showErrorMessage: false })
  }  
}

export default connect(
  state => ({ authors: state.authors, login: state.login }), 
  dispatch => ({
    onSetAuthors: (authors) => dispatchSetAuthors(authors),
    onLogin: (userName, password) => dispatch(dispatchLoginStarted(userName, password)),
    onReset: () => dispatchLoginEnded()
  })
)(LoginForm)
