import React, { Component } from 'react'
import styled from 'styled-components'

class GoTop extends Component {

  render = () => 
    <div id="btnTop" className={`${this.props.className} hidden`} onClick={() => this.goTop()}>
      <i className="fas fa-arrow-circle-up"></i>
    </div>

  goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  checkScroll = () => {
    if (window.scrollY < 100) {
      document.querySelector('#btnTop').classList.add('hidden')
    } else {
      document.querySelector('#btnTop').classList.remove('hidden')
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScroll.bind(this));
  }

}

export default styled(GoTop)`
  position: fixed;
  bottom: 7px;
  right: 10px;
  //transform: translateY(-50%);
  z-index: 2;
  &.hidden {
    display: none;
  }
  i {
    font-size: 2rem;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
  }
`
