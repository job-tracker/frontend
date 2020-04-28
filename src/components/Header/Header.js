import React, { Component } from 'react';

import './Header.scss';
import logo from '../../assests/logo.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // placeholder
    };
  }
  render() {
    return (
      <div className="header-wrapper">
        <section className="logo-wrapper">
          <img src={logo} alt="Job Tracker logo"></img>
        </section>
        <section className="nav-buttons-wrapper">
          <a href="/login">Login</a>
          <a href="/signup">Sign up</a>
          <a href="/contact">Contact</a>
        </section>
      </div>
    );
  }
}

export default Header;
