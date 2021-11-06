import { combineReducers } from 'redux';

import { jobsiteReducer } from './jobsiteReducer';
import { buildingReducer } from './buildingReducer';
import { floorReducer } from './floorReducer';
import { unitReducer } from './unitReducer';
import { loginReducer } from './loginReducer';

export default combineReducers({
	jobsiteReducer,
	buildingReducer,
	floorReducer,
	unitReducer,
	loginReducer,
});
