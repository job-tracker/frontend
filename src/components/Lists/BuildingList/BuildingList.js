import React, { useState } from 'react';

import { Table } from 'reactstrap';

import './BuildingList.scss';

import Task_List from '../../../TempData/TempTaskData.js';

import ListHeader from '../../ListComponents/ListHeader/ListHeader.js';

const BuildingList = () => {
  const [taskList, setTaskList] = useState(Task_List);
  return (
    <section className="building-list-wrapper">
      <div className="building-list-header">
        <ListHeader headerTitle={'Buildings'} btnTitle={'Add a Building'} />
      </div>
      <div className="building-list-wrapper">
        <Table dark hover responsive className="building-table">
          <tbody>
            {taskList.map((task, i) => (
              <tr key={i}>
                <td>{task.task}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default BuildingList;
