import React from 'react';

import './BuildingView.scss';

import JobsiteHeader from '../../components/JobsiteComponents/JobsiteHeader.js';
import BuildingNotesList from '../../components/Lists/NoteList/BuildingNotesList.js';
import UnitList from '../../components/Lists/UnitList/UnitList.js';
import BuildingList from '../../components/Lists/BuildingList/BuildingList.js';

const BuildingView = () => {
  return (
    <div className="main-building-wrapper">
      <JobsiteHeader />
      <section className="main-note-task-wrapper">
        <div className="top-task-wrapper">
          <div className="notes-wrapper">
            <BuildingNotesList />
          </div>
          <div className="daily-task-wrapper">
            <UnitList />
          </div>
          <div className="bot-task-wrapper"></div>
        </div>
      </section>
    </div>
  );
};

export default BuildingView;
