import React, { useState } from 'react';

import { Table } from 'reactstrap';

import './ServiceRoomList.scss';

import Unit_List from '../../../TempData/TempUnitData.js';

import ListHeader from '../../ListComponents/ListHeader/ListHeader.js';
import Unit from '../../BuildingComponents/Unit.js';

const UnitList = () => {
  const [unitList, setUnitList] = useState(Unit_List);
  return (
    <section className="unit-list-wrapper">
      <div className="unit-list-header">
        <ListHeader headerTitle={'Units'} btnTitle={'Add a Unit'} />
      </div>
      <div className="unit-list-wrapper">
        <Table dark hover responsive className="unit-table">
          <tbody>
            {unitList.map((unit, i) => (
              <tr key={i}>
                <Unit name={unit.name} />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default UnitList;
