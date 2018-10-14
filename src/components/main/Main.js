import React from "react"
import { Switch, Route, withRouter } from "react-router-dom"
import styled from 'styled-components'
import HomePage from "../home/HomePage"
import LoginForm from "../login/LoginForm"
import Logout from '../login/Logout'
import AuthorsPage from '../authors/AuthorsPage'
import AuthorDetailPage from '../authors/AuthorDetailPage'
import ProfilePage from '../profile/ProfilePage'
import RequestsPage from '../requests/RequestsPage'
import GoTop from '../footer/GoTop'
import NotFound from '../common/NotFound'

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
      <GoTop />
    </div>
  );
};

export default styled(
  withRouter(Main)
)`
  margin-bottom: 70px;
`
