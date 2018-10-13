import React from 'react'
import styled from 'styled-components'
import socialNetwork from '../../assets/social-network.jpg'


const HomePage = (props) =>
  <div className={props.className}>
    <header className="page-title">
      <h4>Welcome to Social Network</h4>
    </header>
    <img src={socialNetwork} alt="Social Network" />
  </div>

export default styled(HomePage)`
  text-align: center;
  img {
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;;
    box-shadow: 4px 4px 8px #888;
  }
`