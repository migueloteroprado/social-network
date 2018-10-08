import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "../components/HomePage";
import LoginForm from "../components/LoginForm";
import Logout from '../components/Logout'
import Users from '../components/Users';
import User from '../components/User';
import Profile from '../components/Profile';
import NotFound from '../components/NotFound';

const Main = props => {
  // const { authUser, errors, removeError, currentUser } = props;
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
          path="/logout"
          component={Logout}
        />
        <Route
          path="/not-found"
          component={NotFound}
        />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default withRouter(
  connect(mapStateToProps, { /*authUser, removeError*/ })(Main)
);
