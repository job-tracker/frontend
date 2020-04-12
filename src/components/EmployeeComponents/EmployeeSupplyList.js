import React, { Component } from 'react';

import { Table } from 'reactstrap';

import './EmployeeSupplyList.scss';
import { HD_List, Job_List } from './TempData.js';

class EmployeeSupplyList extends Component {
	constructor() {
		super();
		this.state = {
			hdList: HD_List,
		};
	}

	render() {
		return (
			<section className="employee-supply-wrapper">
				<div className="employee-supply-text">
					<div className="inner-list-wrapper">
						<div className="list-content">
							<div className="list-header">
								<h2>Supply Lists</h2>
							</div>
							<div className="list-wrapper">
								<h1 className="list-name">
									{/* this will need to be dynamic */}
									The Home Depot
								</h1>

								<Table dark hover bordered responsive className="supply-table">
									<thead>
										<tr>
											<th className="item">Item</th>
											<th>Qty</th>
										</tr>
									</thead>
									<tbody>
										{this.state.hdList.map(item => (
											<tr>
												<td>{item.item}</td>
												<td>1000</td>
											</tr>
										))}
									</tbody>
								</Table>
							</div>
						</div>
						<div className="list-content">
							<div className="list-header">
								<h2>Supply Lists</h2>
							</div>
							<div className="list-wrapper">
								<h3 className="list-name">
									{/* this will need to be dynamic */}
									The Home Depot
								</h3>
								<Table dark hover bordered responsive className="supply-table">
									<thead>
										<tr>
											<th className="item">Item</th>
											<th>Qty</th>
										</tr>
									</thead>
									<tbody>
										{this.state.hdList.map(item => (
											<tr>
												<td>{item.item}</td>
												<td>1000</td>
											</tr>
										))}
									</tbody>
								</Table>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default EmployeeSupplyList;
