import React from "react"
import { Switch, Route, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import styled from 'styled-components'
import HomePage from "./HomePage"
import LoginForm from "../login/LoginForm"
import Logout from '../login/Logout'
import AuthorsPage from '../authors/AuthorsPage'
import AuthorDetailPage from '../authors/AuthorDetailPage'
import ProfilePage from '../profile/ProfilePage'
import RequestsPage from '../requests/RequestsPage'
import NotFound from './NotFound'

const Main = (props) => {
  return (
    <div className={props.className}>
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/authors" component={AuthorsPage} />
          <Route exact path="/authors/:uuid" component={AuthorDetailPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/requests" component={RequestsPage} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/logout" component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default styled(
  withRouter(
    connect(
      state => ({
        authors: state.authors,
        login: state.login
      })
    )(Main)
  )
)`
  position: fixed;
  top: 55px;
  left: 0;
  right: 0;
  height: calc(100% - 95px);
  overflow: auto;
`
