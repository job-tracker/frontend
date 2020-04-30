import React from 'react';

import './ListItem.scss';

const ListItem = ({ item, title }) => {
  return (
    <td>
      <h6>{title}</h6>
      <p>{item}</p>
    </td>
  );
};

export default ListItem;
