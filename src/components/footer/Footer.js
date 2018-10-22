import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import GoTop from './GoTop'

class Footer extends Component {
  
  state = {
    showTopButton: false
  }

  render() {
    return (
      <nav className={`navbar-footer navbar navbar-fixed-botton navbar-dark bg-dark ${this.props.className}`}>
        <ul className="navbar-nav w-100 justify-content-center links">
          <li className="nav-item">
            <NavLink className="nav-link" to='/'>Social Network - Práctica de React</NavLink>
            {
              this.state.showTopButton 
                ? <GoTop onGoTop={this.goTop}/>
                : null
            }
          </li>
        </ul>
    </nav>)
  }

  goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  checkScroll = () => {
    this.setState({showTopButton: window.scrollY < 100 ? false : true})
  }  

  componentDidMount = () => {
    window.addEventListener('scroll', this.checkScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.checkScroll);
  }
}


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
