import React, { Component } from 'react';

import { Table } from 'reactstrap';

import './EmployeeSupplyList.scss';
import { HD_List } from './TempData.js';

class EmployeeSupplyList extends Component {
	constructor() {
		super();
		this.state = {
			hdList: HD_List,
			completed: false,
		};
	}

	render() {
		return (
			<section className="employee-supply-wrapper">
				<div className="list-header">
					<h2>Supply Lists</h2>
					<button className="list-btn">Make a list</button>
				</div>
				<div className="list-wrapper">
					{this.state.hdList.map((jobs, i) => (
						<div key={i}>
							<h3 className="list-name">{jobs.name}</h3>
							<Table dark hover responsive className="supply-table">
								<thead>
									<tr>
										<th className="item">Item</th>
										<th>Qty</th>
									</tr>
								</thead>
								<tbody>
									{jobs.list.map((lists, i) => (
										<tr key={i}>
											<td>{lists.item}</td>
											<td>{lists.qty}</td>
										</tr>
									))}
									<div>
										<button className="list-btn">Make a list</button>
										<button className="list-btn">Make a list</button>
									</div>
								</tbody>
							</Table>
						</div>
					))}
				</div>
			</section>
		);
	}
}

export default EmployeeSupplyList;
