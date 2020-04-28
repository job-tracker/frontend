import React, { Component } from 'react';

import { Table } from 'reactstrap';

import './BuildingNotesList.scss';

import Building_Notes_List from '../../../TempData/TempBuildingNotesData.js';
import ListHeader from '../../ListComponents/ListHeader/ListHeader.js';

class BuildingNotesList extends Component {
  constructor() {
    super();
    this.state = {
      buildingNotesList: Building_Notes_List,
    };
  }

  render() {
    return (
      <section className="job-task-list-wrapper">
        <ListHeader headerTitle="Notes" btnTitle="Make a Note" />
        <div className="task-list-wrapper">
          {this.state.buildingNotesList.map((buildings, i) => (
            <div key={i}>
              <Table dark hover responsive className="task-table">
                <tbody>
                  {buildings.notes.map((note, i) => (
                    <tr key={i}>
                      <td>{note.note}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default BuildingNotesList;
