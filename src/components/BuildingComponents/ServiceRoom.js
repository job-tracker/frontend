import React from 'react';

import './ServiceRoom.scss';

const ServiceRoom = ({ name, floor, notes }) => {
  return (
    <div>
      <td>{name}</td>
      <td>{floor}</td>
      <td>{notes}</td>
    </div>
  );
};

export default ServiceRoom;
