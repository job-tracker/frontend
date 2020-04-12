import React, { Component } from 'react';

import EmployeeCreds from '../../components/EmployeeComponents/EmployeeCreds.js';
import EmployeeSupplyList from '../../components/EmployeeComponents/EmployeeSupplyList.js';

class EmployeeView extends Component {
	render() {
		return (
			<div className="main-employee-wrapper">
				<EmployeeCreds />
				<EmployeeSupplyList />
			</div>
		);
	}
}

export default EmployeeView;
