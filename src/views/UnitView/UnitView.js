import React from 'react';

import './UnitView.scss';

import JobsiteHeader from '../../components/JobsiteComponents/JobsiteHeader.js';
import BuildingNotesList from '../../components/Lists/NoteList/BuildingNotesList.js';
import UnitList from '../../components/Lists/UnitList/UnitList.js';
import ServiceList from '../../components/Lists/ServiceRoomList/ServiceRoomList.js';

const UnitView = () => {
  return (
    <div className="main-unit-wrapper">
      <JobsiteHeader />
      <section className="main-note-task-wrapper">
        <div className="top-task-wrapper">
          <div className="notes-wrapper">
            <BuildingNotesList />
          </div>
          <div className="daily-task-wrapper">
            <UnitList />
          </div>
          <div className="bot-task-wrapper">
            <ServiceList />
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnitView;
