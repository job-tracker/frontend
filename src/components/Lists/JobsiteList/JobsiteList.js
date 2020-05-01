import React, { useState } from 'react';

import { Table } from 'reactstrap';

import './JobsiteList.scss';

import Job_List from '../../../TempData/TempJobData.js';

const JobsiteList = () => {
  const [jobList, setJobList] = useState(Job_List);
  return (
    <section className="employee-job-wrapper">
      <div className="list-header">
        <h2>Jobsites</h2>
      </div>
      <div className="list-wrapper">
        <Table dark hover responsive className="job-table">
          <thead>
            <tr>
              <th>Tracking #</th>
              <th className="jobsite">Jobsite</th>
              <th>Contact</th>
              <th>Notes</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody className="list-body">
            {this.state.jobList
              .sort((a, b) => a.priority - b.priority)
              .map((jobs, i) => (
                <tr key={i}>
                  <td className="tracking-number">{jobs.tracking_number}</td>
                  <td>
                    {jobs.name}
                    <br />
                    {jobs.address}
                  </td>
                  <td>
                    <button className="list-btn">Contact</button>
                  </td>
                  <td>
                    <button className="list-btn">Notes</button>
                  </td>
                  <td className="priority-number">{jobs.priority}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default JobsiteList;
