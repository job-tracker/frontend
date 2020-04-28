import React, { Component } from 'react';

import { Table } from 'reactstrap';

import './TaskList.scss';

import Task_List from '../../../TempData/TempTaskData.js';

class MilestoneTaskList extends Component {
  constructor() {
    super();
    this.state = {
      taskList: Task_List,
    };
  }

  render() {
    return (
      <section className="milestone-task-list-wrapper">
        <div className="milestone-list-header">
          <h2>Milestone Tasks</h2>
          <button className="milestone-list-btn">Make a list</button>
        </div>
        <div className="milestone-list-wrapper">
          <Table dark hover responsive className="milestone-table">
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

export default MilestoneTaskList;
