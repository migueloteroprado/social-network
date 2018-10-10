import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./HomePage";
import LoginForm from "./login/LoginForm";
import Logout from './login/Logout'
import Authors from './authors/Authors';
import AuthorDetail from './authors/AuthorDetail';
import Profile from './profile/Profile';
import Requests from './requests/Requests';
import NotFound from './NotFound';

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
          component={Authors}
        />
        <Route
          exact
          path="/users/:uuid"
          component={AuthorDetail}
        />
        <Profile
          exact
          path="/profile"
          component={Profile}
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
