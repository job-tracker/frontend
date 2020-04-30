import React from 'react';

import './Button.scss';

const Button = ({ title, size }) => {
  return <button className={`list-btn ${size}`}>{title}</button>;
};

export default Button;
