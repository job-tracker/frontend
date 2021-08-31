import { combineReducers } from 'redux';

import { jobsiteReducer } from './jobsiteReducer';
import { buildingReducer } from './buildingReducer';
import { floorReducer } from './floorReducer';
import { unitReducer } from './unitReducer';

export default combineReducers({
	jobsiteReducer,
	buildingReducer,
	floorReducer,
	unitReducer,
});
