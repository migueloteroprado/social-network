import React, { Component } from 'react';
import {BrowserRouter, NavLink, Link, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './SocialNetwork.css';

class SocialNetwork extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="menu">
          <NavLink exact to="/">Authors</NavLink>
          <NavLink exact to="/:name">Authors - Author</NavLink>
          <NavLink exact to="/profile">Profile</NavLink>
          <NavLink exact to="/pending-requests">Pending Requests</NavLink>
          <NavLink exact to="/login">Login</NavLink>
          <Switch>
              <Route exact path="/" component={Authors} />
              <Route exact path="/:name" component={Author} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/pending-requests" component={PendingRequests} />
              <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const Authors = () =>
  <h1>Authors</h1>

const Author = () =>
  <h1>Author</h1>

const Profile = () =>
  <h1>Profile</h1>
  
const PendingRequests = () =>
  <h1>Pendinf Requests</h1>  

const Login = () =>
  <h1>Login</h1>

export default SocialNetwork;
