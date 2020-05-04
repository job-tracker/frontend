import React, { useState } from 'react';

import { Table } from 'reactstrap';

import './ServiceRoomList.scss';

import Service_List from '../../../TempData/TempServiceData';

import ListHeader from '../../ListComponents/ListHeader/ListHeader.js';
import ServiceRoom from '../../BuildingComponents/ServiceRoom.js';

const ServiceRoomList = () => {
  const [serviceList, setServiceList] = useState(Service_List);
  return (
    <section className="service-room-list-wrapper">
      <div className="service-list-header">
        <ListHeader headerTitle={'Service Rooms'} btnTitle={'Add a Room'} />
      </div>
      <div className="service-list-wrapper">
        <Table dark hover responsive className="service-table">
          <tbody>
            {serviceList.map((room, i) => (
              <tr key={i}>
                <ServiceRoom
                  name={room.name}
                  floor={room.floor_id}
                  notes={room.notes.note}
                />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default ServiceRoomList;
