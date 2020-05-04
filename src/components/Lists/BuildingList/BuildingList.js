import React, { useState } from 'react';

import { Table } from 'reactstrap';

import './BuildingList.scss';

import Building_List from '../../../TempData/TempBuildingNotesData.js';

import ListHeader from '../../ListComponents/ListHeader/ListHeader.js';
import Building from '../../BuildingComponents/Building.js';

const BuildingList = () => {
  const [buildingList, setBuildingList] = useState(Building_List);
  return (
    <section className="building-list-wrapper">
      <div className="building-list-header">
        <ListHeader headerTitle={'Buildings'} btnTitle={'Add a Building'} />
      </div>
      <div className="building-list-wrapper">
        <Table dark hover responsive className="building-table">
          <tbody>
            {buildingList.map((building, i) => (
              <tr key={i}>
                <Building name={building.name} />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default BuildingList;
