import React, { Component } from 'react';

import './EmployeeCreds.scss';

class EmployeeSupplyList extends Component {
	render() {
		return (
			<section className="employee-supply-wrapper">
				<div className="employee-supply-text">
					<h1 className="list-name">
						{/* this will need to be dynamic */}
						The Home Depot
					</h1>
					<div className="inner-list-wrapper">
						<div className="list-content"></div>
					</div>
				</div>
				<div className="employee-id-wrapper">
					{/* these will need to be dynamic */}
					<h1>Employee ID#</h1>
					<h1 className="employee-id">4321</h1>
				</div>
			</section>
		);
	}
}

export default EmployeeSupplyList;
