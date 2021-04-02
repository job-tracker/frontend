import React from 'react';

import './Header.scss';
import logo from '../../assests/logo.svg';

const Header = () => {
  return (
    <div className="header-wrapper">
      <section className="left-nav-buttons-wrapper">
        <a href="/landing">Home</a>
        <a href="/contact">Contact</a>
      </section>
      <section className="logo-wrapper">
        <img src={logo} alt="Job Tracker logo"></img>
      </section>
      <section className="right-nav-buttons-wrapper">
        <a href="/login">Login</a>
        <a href="/signup">Sign up</a>
      </section>
    </div>
  );
};

export default Header;
