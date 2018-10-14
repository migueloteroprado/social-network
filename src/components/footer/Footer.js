import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const Footer = (props) =>
  (<nav className={`navbar-footer navbar navbar-fixed-botton navbar-dark bg-dark ${props.className}`}>
      <ul className="navbar-nav w-100 justify-content-center links">
        <li className="nav-item">
          <NavLink className="nav-link" to='/'>Social Network - Práctica de React</NavLink>
        </li>
      </ul>
  </nav>)

export default styled(
  withRouter(Footer)
)`
  &.navbar-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: ${props => props.theme.colors.background.footer} !important;
    text-align: center;
    box-shadow: 0px -3px 5px grey;
  }
`
