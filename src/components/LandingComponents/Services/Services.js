import React, { Component } from 'react';

import './Services.scss';

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Placeholder
    };
  }
  render() {
    return (
      <div className="services-wrapper">
        <section className="service-selection-wrapper">
          <i class="fas fa-clipboard-list fa-3x"></i>
          <i class="fas fa-clipboard-check fa-3x"></i>
          <i class="fas fa-calendar-check fa-3x"></i>
        </section>
        <section className="service-quote-wrapper">
          <div className="quote-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </section>
      </div>
    );
  }
}
export default Services;
