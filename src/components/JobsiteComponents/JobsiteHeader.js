import React, { Component } from 'react';

import Job_List from '../../TempData/TempJobData.js';

import './JobsiteHeader.scss';

class JobsiteHeader extends Component {
  constructor() {
    super();
    this.state = {
      jobList: Job_List,
    };
  }
  render() {
    return (
      <section className="employee-creds-wrapper">
        <div className="employee-name">
          <h1>{this.state.jobList[0].name}</h1>
          <h3>{this.state.jobList[0].address}</h3>
        </div>
        <div className="employee-id-wrapper">
          {/* these will need to be dynamic */}
          <h1>Tracking#</h1>
          <h1 className="employee-id">
            {this.state.jobList[0].tracking_number}
          </h1>
        </div>
      </section>
    );
  }
}

export default JobsiteHeader;
