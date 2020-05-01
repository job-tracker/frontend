import React, { useState } from 'react';

import { Table } from 'reactstrap';

import './BuildingNotesList.scss';

import Buildings_List from '../../../TempData/TempBuildingNotesData.js';
import Unit_List from '../../../TempData/TempUnitData.js';
import ListHeader from '../../ListComponents/ListHeader/ListHeader.js';
import ListItem from '../../ListComponents/ListItem/ListItem.js';
import Button from '../../Buttons/Button.js';

const BuildingNotesList = () => {
  const [unitList, setUnitList] = useState(Unit_List);
  return (
    <section className="note-list-wrapper">
      <ListHeader headerTitle="Notes" btnTitle="Make a Note" />
      <div className="list-wrapper">
        <h5 className="list-name">{'Building G'}</h5>
        {unitList.map((unit, i) => (
          <div key={i}>
            <h6 className="list-name">{unit.name}</h6>
            <Table dark hover responsive className="note-table">
              <tbody>
                {unit.notes.map((note, i) => (
                  <tr key={i}>
                    <ListItem item={note.note} />
                  </tr>
                ))}
                <div className="btn-wrapper">
                  <Button title={'Edit'} size={'sm'} />
                  <Button title={'Clear Completed'} size={'sm'} />
                </div>
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BuildingNotesList;
