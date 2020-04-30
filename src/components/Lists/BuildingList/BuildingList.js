import React, { Component } from 'react';

import { Table, ListGroupItem } from 'reactstrap';

import './BuildingList.scss';

import Task_List from '../../../TempData/TempTaskData.js';

import ListHeader from '../../ListComponents/ListHeader/ListHeader.js';

class BuildingList extends Component {
  constructor() {
    super();
    this.state = {
      taskList: Task_List,
    };
  }

  render() {
    return (
      <section className="building-list-wrapper">
        <div className="building-list-header">
          <ListHeader headerTitle={'Buildings'} btnTitle={'Add a Building'} />
        </div>
        <div className="building-list-wrapper">
          <Table dark hover responsive className="building-table">
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

export default BuildingList;
