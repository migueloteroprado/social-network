import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import logo from './../../assets/logo.svg'

class Navbar extends Component {

  state = {
    expanded: false
  }

  toggleNavbar = (e) => {
    this.setState({
      expanded: !this.state.expanded,
    });
  }  

  render() {
    const expanded = this.state.expanded;
    const classMenuContent = expanded ? 'collapse navbar-collapse show' : 'collapse navbar-collapse';
    const classButton = expanded ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';    
    return (

      <nav className={`main-menu navbar navbar-expand-sm ${this.props.className}`}>
        <NavLink exact to="/" className="navbar-brand">
          <img className="logo" src={logo} alt="Social Network Logo" />
          Social Network
        </NavLink>
        
        <button onClick={this.toggleNavbar} className={`${classButton}`} type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars fa-1x"></i>
        </button>
        
        <div className={`${classMenuContent}`} id="navbarContent">
          <ul className="navbar-nav w-100 justify-content-center links">
            <li className="nav-item">
              <NavLink className="nav-link menu-item-center" onClick={this.toggleNavbar} to='/authors'>Authors</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link menu-item-center" onClick={this.toggleNavbar} /*data-toggle="collapse" data-target=".navbar-collapse.show"*/ to='/profile'>Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link menu-item-center" onClick={this.toggleNavbar} /*data-toggle="collapse" data-target=".navbar-collapse.show"*/ to='/requests'>Requests</NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav justify-content-end">
            <li className="nav-item">
              { 
                this.props.currentAuthor
                ? <NavLink exact className="nav-link menu-item-right" onClick={this.toggleNavbar} /*data-toggle="collapse" data-target=".navbar-collapse.show"*/ to="/logout">Logout</NavLink>
                : <NavLink exact className="nav-link menu-item-right" onClick={this.toggleNavbar} /*data-toggle="collapse" data-target=".navbar-collapse.show"*/ to="/login">Login</NavLink>
              }
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default styled(
  withRouter(
    connect(
      state => ({ 
        currentAuthor: state.login.currentAuthor
      })
    )(Navbar)
  )
)`
  position: fixed !important; 
  top: 0;
  left: 0;
  right: 0;
  color: ${props => props.theme.colors.white} !important;
  background: ${props => props.theme.colors.background.header} !important;
  box-shadow: 0px 3px 5px grey;
  z-index: 1;
  a.navbar-brand {
    color: ${props => props.theme.colors.white} !important;
    &:hover {
      color: ${props => props.theme.colors.primary} !important;    
    }
  }
  li.nav-item {
    font-size: 1.1rem;
    a {
      color: ${props => props.theme.colors.white} !important;
      &.active, &:hover {
        color: ${props => props.theme.colors.primary} !important;
      }
    }
    a.menu-item-right {
      padding-left: 1.2rem;  
    }
    a.menu-item-center {
      padding-left: 1.2rem;
      padding-right: 1.2rem;
    }
  }
  .navbar-toggler {
    border: 0;
    i {
      color: ${props => props.theme.colors.white} !important;
      font-size: 1.5rem;
      &:hover {
        color: white !important;
      }
    }
  }
  .logo {
    margin-top: -5px;
    padding-right: 5px;
    width: 40px;
  }
`
