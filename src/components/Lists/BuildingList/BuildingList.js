import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Table } from 'reactstrap';

import './BuildingList.scss';

import { fetchBuilding } from '../../../actions';

import ListHeader from '../../ListComponents/ListHeader/ListHeader.js';
import Building from '../../BuildingComponents/Building.js';

const BuildingList = () => {
	const [buildingList, setBuildingList] = useState(fetchBuilding);
	return (
		<section className="building-list-wrapper">
			<div className="building-list-header">
				<ListHeader headerTitle={'Buildings'} btnTitle={'Add a Building'} />
			</div>
			<div className="building-list-wrapper">
				<Table dark hover responsive className="building-table">
					<tbody>
						{
							(console.log(buildingList),
							buildingList.map((building, i) => (
								<tr key={i}>
									<Building name={building.name} />
								</tr>
							)))
						}
					</tbody>
				</Table>
			</div>
		</section>
	);
};

const mapStateToProps = state => ({
	buildings: state.buildingReducer.buildings,
});

export default connect(mapStateToProps, {
	fetchBuilding,
})(BuildingList);
