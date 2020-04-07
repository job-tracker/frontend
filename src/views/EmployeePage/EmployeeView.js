import React, { Component } from 'react';

import EmployeeCreds from '../../components/EmployeeComponents/EmployeeCreds.js';

class EmployeeView extends Component {
	render() {
		return (
			<div className="main-employee-wrapper">
				<EmployeeCreds />
			</div>
		);
	}
}

export default EmployeeView;
