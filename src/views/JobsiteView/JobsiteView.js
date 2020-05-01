import React, { Component } from 'react';

import './JobsiteView.scss';

import JobsiteHeader from '../../components/JobsiteComponents/JobsiteHeader.js';
import BuildingNotesList from '../../components/Lists/NoteList/BuildingNotesList.js';
import TaskList from '../../components/Lists/TaskList/TaskList.js';
import BuildingList from '../../components/Lists/BuildingList/BuildingList.js';

class JobsiteView extends Component {
  render() {
    return (
      <div className="main-jobsite-wrapper">
        <JobsiteHeader />
        <section className="main-note-task-wrapper">
          <div className="top-task-wrapper">
            <div className="notes-wrapper">
              <BuildingNotesList />
            </div>
            <div className="daily-task-wrapper">
              <TaskList />
            </div>
            <div className="bot-task-wrapper">
              <BuildingList />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default JobsiteView;
