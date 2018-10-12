import React from 'react'
import socialNetwork from '../../assets/social-network.jpg'
import './HomePage.scss'

const HomePage = () =>
  <div className="homePage">
    <header>
      <h4>Welcome to Social Network</h4>
    </header>
    <img src={socialNetwork} alt="Social Network" />
  </div>


export default HomePage;