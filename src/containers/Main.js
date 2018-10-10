import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "../components/HomePage";
import LoginForm from "../components/LoginForm";
import Logout from '../components/Logout'
import Users from '../components/Users';
import UserDetail from '../components/UserDetail';
import Profile from '../components/Profile';
import Requests from '../components/Requests';
import NotFound from '../components/NotFound';

const Main = props => {
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          component={HomePage}
        />
        <Route
          exact
          path="/users"
          component={Users}
        />
        <Route
          exact
          path="/users/:uuid"
          component={UserDetail}
        />
        <Profile
          exact
          path="/profile"
          component={Users}
        />
        <Route
          exact
          path="/login"
          component={LoginForm}
        />
        <Route
          exact
          path="/requests"
          component={Requests}
        />
        <Route
          exact
          path="/logout"
          component={Logout}
        />
        <Route
          component={NotFound}
        />
      </Switch>
    </div>
  );
};

export default withRouter(
  connect(
    state => ({
      users: state.users,
      login: state.login
    })
  )(Main)
);
