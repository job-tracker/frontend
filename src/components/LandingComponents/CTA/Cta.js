import React from 'react';

import './Cta.scss';
import herologo from '../../../assests/herologo.svg';

const Cta = () => {
  return (
    <div className="cta-wrapper">
      <section className="cta-phrase-wrapper">
        <img src={herologo} alt="Job Tracker logo"></img>
        <h2>Project Management made easy!</h2>
      </section>
      <section className="cta-btn-wrapper">
        <button>Lets Get Tracking</button>
      </section>
    </div>
  );
};

export default Cta;
