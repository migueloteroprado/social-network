import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './NavBar.scss'
import logo from './../../assets/logo.svg'

class Navbar extends Component {

  state = {
    collapsed: true
  }

  toggleNavbar = (e) => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }  

  render() {

    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';    
    return (

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <NavLink exact to="/" className="navbar-brand">
            <img className="logo" src={logo} alt="Social Network Logo" />
            Social Network
          </NavLink>
          
          <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars fa-1x"></i>
          </button>

          {/*<button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarContent">
            <i className="fa fa-bars fa-1x"></i>
          </button>*/}
          
          <div className={`${classOne}`} id="navbarContent">
              <ul className="navbar-nav w-100 justify-content-center links">
                <li className="nav-item">
                  <NavLink className="nav-link menu-item-center" onClick={this.toggleNavbar} to='/authors'>Authors</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link menu-item-center" onClick={this.toggleNavbar} /*data-toggle="collapse" data-target=".navbar-collapse.show"*/ to='/profile'>My Profile</NavLink>
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

export default withRouter(connect(
  state => ({ 
    currentAuthor: state.login.currentAuthor
  })
)(Navbar));
