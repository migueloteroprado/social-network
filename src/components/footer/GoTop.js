import React, { Component } from 'react'
import styled from 'styled-components'

class GoTop extends Component {

render = () => 
  <div id="btnTop" className={`${this.props.className}`} onClick={this.props.onGoTop}>
    <i className="fas fa-arrow-circle-up"></i>
  </div>
}

export default styled(GoTop)`
  position: fixed;
  bottom: 6px;
  right: 10px;
  z-index: 2;
  i {
    font-size: 2rem;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
  }
`
