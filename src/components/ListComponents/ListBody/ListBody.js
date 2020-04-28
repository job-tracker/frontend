import React from 'react';

import './ListBody.scss';

import { Table } from 'reactstrap';

const ListBody = ({ name, building }) => {
  return (
    <Table dark hover responsive className="table">
      <thead>
        <tr>
          {name.map(name => (
            <th>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {building.floors.map((task, i) => (
          <tr key={i}>
            <td>{task.task}</td>
          </tr>
        ))}
        <div>
          <button className="list-btn">Make a list</button>
          <button className="list-btn">Make a list</button>
        </div>
      </tbody>
    </Table>
  );
};

export default ListBody;
