import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBuildings } from '../../../redux/actions';

import { Table } from 'reactstrap';

import './BuildingList.scss';

import ListHeader from '../../ListComponents/ListHeader/ListHeader.js';
import Building from '../../BuildingComponents/Building.js';

const BuildingList = ({ buildingData, fetchBuildings }) => {
	useEffect(() => {
		fetchBuildings();
	}, []);
	return (
		<section className="building-list-wrapper">
			<div className="building-list-header">
				<ListHeader headerTitle={'Buildings'} btnTitle={'Add a Building'} />
			</div>
			<div className="building-list-wrapper">
				<Table dark hover responsive className="building-table">
					<tbody>
						{buildingData.buildings.map((building, i) => (
							<tr key={i}>
								<Building name={building.name} />
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</section>
	);
};

const mapStateToProps = state => {
	return {
		buildingData: state.buildings,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchBuildings: () => dispatch(fetchBuildings()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildingList);
