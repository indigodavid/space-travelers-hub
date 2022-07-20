import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';
import '../styles/Header.scss';

const Header = () => (
  <div className="header">
    <div className="logo">
      <img className="space-logo" src={logo} alt="logo" />
      <span className="title-logo">Space Travelers Hub</span>
    </div>
    <div className="nav">
      <ul>
        <NavLink to="/"><li>Rocket</li></NavLink>
        <NavLink to="missions"><li>Mission</li></NavLink>
        |
        <NavLink to="myprofile"><li>My Profile</li></NavLink>
      </ul>
    </div>
  </div>
);

export default Header;
