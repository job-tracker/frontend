import React, { Component } from 'react';

import { Table } from 'reactstrap';

import './TaskList.scss';

import Task_List from '../../../TempData/TempTaskData.js';

class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      taskList: Task_List,
    };
  }

  render() {
    return (
      <section className="job-task-list-wrapper">
        <div className="task-list-header">
          <h2>Daily Tasks</h2>
          <button className="task-list-btn">Make a list</button>
        </div>
        <div className="task-list-wrapper">
          <Table dark hover responsive className="task-table">
            <tbody>
              {this.state.taskList.map((task, i) => (
                <tr key={i}>
                  <td>{task.task}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    );
  }
}

export default TaskList;
