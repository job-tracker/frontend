import React, { useState } from 'react';

import { Table } from 'reactstrap';

import './TaskList.scss';

import Task_List from '../../../TempData/TempTaskData.js';

import ListHeader from '../../ListComponents/ListHeader/ListHeader.js';
import ListItem from '../../ListComponents/ListItem/ListItem.js';
const TaskList = () => {
  const [taskList, setTaskList] = useState(Task_List);

  return (
    <section className="task-list-wrapper">
      <div className="task-list-header">
        <ListHeader headerTitle={'Daily Tasks'} btnTitle={'Add a Task'} />
      </div>
      <div className="list-wrapper">
        <Table dark hover responsive className="task-table">
          <tbody>
            {taskList.map((task, i) => (
              <tr key={i}>
                <ListItem item={task.task} />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default TaskList;
