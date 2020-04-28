import React, { Component } from 'react';

import './EmployeeView.scss';

import EmployeeCreds from '../../components/EmployeeComponents/EmployeeCreds.js';
import EmployeeSupplyList from '../../components/ListComponents/EmployeeSupplyList/EmployeeSupplyList.js';
import JobsiteList from '../../components/ListComponents/JobsiteList/JobsiteList.js';

class EmployeeView extends Component {
  render() {
    return (
      <div className="main-employee-wrapper">
        <EmployeeCreds />
        <section className="main-list-wrapper">
          <div className="supply-list-wrapper">
            <EmployeeSupplyList />
          </div>
          <div className="job-list-wrapper">
            <JobsiteList />
          </div>
        </section>
      </div>
    );
  }
}

export default EmployeeView;
