import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import './NavBar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand">
        <div className="container-fluid">

          <div className="navbar-header">
            <NavLink exact to="/" className="navbar-brand">
              <i className="logo far fa-newspaper" alt="Social Network Logo"></i>
              Social Network
            </NavLink>
          </div>

          <ul className="navbar-nav menu">
            <li className="nav-item">
              <NavLink exact className="nav-link" to='/users'>Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to='/profile'>Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to='/pending-requests'>Pending Requests</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav menu navbar-right">
            <li className="nav-item">
              { 
                this.props.users.currentUser
                ? <NavLink exact className="nav-link" to="/logout">Logout</NavLink>
                : <NavLink exact className="nav-link" to="/login">Login</NavLink>
              }
            </li>
          </ul>

        </div>
      </nav>
    );
  }
}

export default connect(
  state => ({ users: state.users }),
  null, null, { pure: false } 
)(Navbar);
