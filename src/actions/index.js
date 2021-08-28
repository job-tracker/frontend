import axios from 'axios';

// Sign up
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// Login
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Log out
export const LOG_OUT = 'LOG_OUT';

// User
export const FETCH_USER_START = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

// Jobsite
export const POST_JOBSITE_START = 'POST_JOBSITE_START';
export const POST_JOBSITE_SUCCESS = 'POST_JOBSITE_SUCCESS';
export const POST_JOBSITE_FAILURE = 'POST_JOBSITE_FAILURE';
export const FETCH_JOBSITE_START = 'FETCH_JOBSITE_START';
export const FETCH_JOBSITE_SUCCESS = 'FETCH_JOBSITE_SUCCESS';
export const FETCH_JOBSITE_FAILURE = 'FETCH_JOBSITE_FAILURE';
export const DELETE_JOBSITE_START = 'DELETE_JOBSITE_START';
export const DELETE_JOBSITE_SUCCESS = 'DELETE_JOBSITE_SUCCESS';
export const DELETE_JOBSITE_FAILURE = 'DELETE_JOBSITE_FAILURE';
export const UPDATE_JOBSITE_START = 'UPDATE_JOBSITE_START';
export const UPDATE_JOBSITE_SUCCESS = 'UPDATE_JOBSITE_SUCCESS';
export const UPDATE_JOBSITE_FAILURE = 'UPDATE_JOBSITE_FAILURE';

// Building
export const POST_BUILDING_START = 'POST_BUILDING_START';
export const POST_BUILDING_SUCCESS = 'POST_BUILDING_SUCCESS';
export const POST_BUILDING_FAILURE = 'POST_BUILDING_FAILURE';
export const FETCH_BUILDING_START = 'FETCH_BUILDING_START';
export const FETCH_BUILDING_SUCCESS = 'FETCH_BUILDING_SUCCESS';
export const FETCH_BUILDING_FAILURE = 'FETCH_BUILDING_FAILURE';
export const DELETE_BUILDING_START = 'DELETE_BUILDING_START';
export const DELETE_BUILDING_SUCCESS = 'DELETE_BUILDING_SUCCESS';
export const DELETE_BUILDING_FAILURE = 'DELETE_BUILDING_FAILURE';
export const UPDATE_BUILDING_START = 'UPDATE_BUILDING_START';
export const UPDATE_BUILDING_SUCCESS = 'UPDATE_BUILDING_SUCCESS';
export const UPDATE_BUILDING_FAILURE = 'UPDATE_BUILDING_FAILURE';

// Floor
export const POST_FLOOR_START = 'POST_FLOOR_START';
export const POST_FLOOR_SUCCESS = 'POST_FLOOR_SUCCESS';
export const POST_FLOOR_FAILURE = 'POST_FLOOR_FAILURE';
export const FETCH_FLOOR_START = 'FETCH_FLOOR_START';
export const FETCH_FLOOR_SUCCESS = 'FETCH_FLOOR_SUCCESS';
export const FETCH_FLOOR_FAILURE = 'FETCH_FLOOR_FAILURE';
export const DELETE_FLOOR_START = 'DELETE_FLOOR_START';
export const DELETE_FLOOR_SUCCESS = 'DELETE_FLOOR_SUCCESS';
export const DELETE_FLOOR_FAILURE = 'DELETE_FLOOR_FAILURE';
export const UPDATE_FLOOR_START = 'UPDATE_FLOOR_START';
export const UPDATE_FLOOR_SUCCESS = 'UPDATE_FLOOR_SUCCESS';
export const UPDATE_FLOOR_FAILURE = 'UPDATE_FLOOR_FAILURE';

// Unit
export const FETCH_UNIT_START = 'FETCH_UNIT_START';
export const FETCH_UNIT_SUCCESS = 'FETCH_UNIT_SUCCESS';
export const FETCH_UNIT_FAILURE = 'FETCH_UNIT_FAILURE';
export const DELETE_UNIT_START = 'DELETE_UNIT_START';
export const DELETE_UNIT_SUCCESS = 'DELETE_UNIT_SUCCESS';
export const DELETE_UNIT_FAILURE = 'DELETE_UNIT_FAILURE';
export const UPDATE_UNIT_START = 'UPDATE_UNIT_START';
export const UPDATE_UNIT_SUCCESS = 'UPDATE_UNIT_SUCCESS';
export const UPDATE_UNIT_FAILURE = 'UPDATE_UNIT_FAILURE';

// Environment var
const envVarPage = process.env.REACT_APP_BACKEND_BASE_URL;

// ACTIONS

// User

// export const signUp = creds => dispatch => {
// 	dispatch({ type: SIGNUP_START});
// 	return axios.post()
// }

export const fetchUser = userId => dispatch => {
	dispatch({ type: FETCH_USER_START });
	return axios
		.get(`${envVarPage}/api/user/${userId}`)
		.then(res => {
			dispatch({ type: FETCH_USER_SUCCESS });
		})
		.catch(err => {
			dispatch({ type: FETCH_USER_FAILURE });
		});
};

export const updateUser = user => dispatch => {
	dispatch({ type: UPDATE_USER_START });
	const { userId } = JSON.parse(localStorage.user);
	return axios({
		method: 'put',
		url: `${envVarPage}/api/user/${userId}`,
		data: user,
		headers: {
			Authorization: localStorage.token,
		},
	})
		.then(res => {
			localStorage.setItem('user', JSON.stringify(res.data));
			dispatch({ type: UPDATE_USER_SUCCESS });
		})
		.catch(err => dispatch({ type: UPDATE_USER_FAILURE }));
};

export const deleteUser = userId => dispatch => {
	dispatch({ type: DELETE_USER_START });
	return axios
		.delete(`${envVarPage}/api/user/${userId}`)
		.then(res => {
			dispatch({ type: DELETE_USER_SUCCESS });
		})
		.catch(err => {
			dispatch({ type: DELETE_USER_FAILURE });
		});
};

// Jobsite

export const postJobsite = jobsite => dispatch => {
	dispatch({ type: POST_JOBSITE_START });
	const { id } = JSON.parse(localStorage.user);
	return axios
		.post(`${envVarPage}/api/user/${id}`, jobsite)
		.then(res => {
			dispatch({ type: POST_JOBSITE_SUCCESS });
		})
		.catch(err => dispatch({ type: POST_JOBSITE_FAILURE }));
};

export const fetchJobsite = () => dispatch => {
	dispatch({ type: FETCH_JOBSITE_START });
	const jobsiteId = JSON.parse(localStorage.jobsite).id;
	return axios
		.get(`${envVarPage}/api/user/jobsites/${jobsiteId}`)
		.then(res => {
			dispatch({ type: FETCH_JOBSITE_SUCCESS });
		})
		.catch(err => {
			dispatch({ type: FETCH_JOBSITE_FAILURE });
		});
};

export const updateJobsite = jobsite => dispatch => {
	dispatch({ type: UPDATE_JOBSITE_START });
	const { jobsiteId } = JSON.parse(localStorage.jobsite);
	return axios({
		method: 'put',
		url: `${envVarPage}/api/user/jobsites/${jobsiteId}`,
		data: jobsite,
		headers: {
			Authorization: localStorage.token,
		},
	})
		.then(res => {
			localStorage.setItem('jobsite', JSON.stringify(res.data));
			dispatch({ type: UPDATE_JOBSITE_SUCCESS });
		})
		.catch(err => dispatch({ type: UPDATE_JOBSITE_FAILURE }));
};

export const deleteJobsite = jobsiteId => dispatch => {
	dispatch({ type: DELETE_JOBSITE_START });
	return axios
		.delete(`${envVarPage}/api/user/jobsites/${jobsiteId}`)
		.then(res => {
			dispatch({ type: DELETE_JOBSITE_SUCCESS });
		})
		.catch(err => {
			dispatch({ type: DELETE_JOBSITE_FAILURE });
		});
};

// Building

export const postBuilding = building => dispatch => {
	dispatch({ type: POST_BUILDING_START });
	const { id } = JSON.parse(localStorage.user);
	const jobId = JSON.parse(localStorage.jobsite).id;
	return axios
		.post(`${envVarPage}/api/user/${id}/jobsites/${jobId}/buildings`, building)
		.then(res => {
			dispatch({ type: POST_BUILDING_SUCCESS });
		})
		.catch(err => dispatch({ type: POST_BUILDING_FAILURE }));
};

export const fetchBuilding = () => dispatch => {
	dispatch({ type: FETCH_BUILDING_START });
	const jobsiteId = JSON.parse(localStorage.jobsite).id;
	return axios
		.get(`${envVarPage}/api/user/jobsites/${jobsiteId}/buildings`)
		.then(res => {
			dispatch({ type: FETCH_BUILDING_SUCCESS });
		})
		.catch(err => {
			dispatch({ type: FETCH_BUILDING_FAILURE });
		});
};

export const updateBuilding = building => dispatch => {
	dispatch({ type: UPDATE_JOBSITE_START });
	const { jobsiteId } = JSON.parse(localStorage.jobsite);
	const { buildingId } = JSON.parse(localStorage.building);
	return axios({
		method: 'put',
		url: `${envVarPage}/api/user/jobsites/${jobsiteId}/buildings/${buildingId}`,
		data: building,
		headers: {
			Authorization: localStorage.token,
		},
	})
		.then(res => {
			localStorage.setItem('building', JSON.stringify(res.data));
			dispatch({ type: UPDATE_BUILDING_SUCCESS });
		})
		.catch(err => dispatch({ type: UPDATE_BUILDING_FAILURE }));
};

export const deleteBuilding = buildingId => dispatch => {
	dispatch({ type: DELETE_BUILDING_START });
	const jobsiteId = JSON.parse(localStorage.jobsite).id;
	return axios
		.delete(
			`${envVarPage}/api/user/jobsites/${jobsiteId}/buildings/${buildingId}`
		)
		.then(res => {
			dispatch({ type: DELETE_BUILDING_SUCCESS });
		})
		.catch(err => {
			dispatch({ type: DELETE_BUILDING_FAILURE });
		});
};

// Floor

export const postFloor = floor => dispatch => {
	dispatch({ type: POST_FLOOR_START });
	const { id } = JSON.parse(localStorage.user);
	const jobId = JSON.parse(localStorage.jobsite).id;
	const buildingId = JSON.parse(localStorage.building);
	return axios
		.post(
			`${envVarPage}/api/user/${id}/jobsites/${jobId}/buildings/${buildingId}/floors`,
			floor
		)
		.then(res => {
			dispatch({ type: POST_FLOOR_SUCCESS });
		})
		.catch(err => dispatch({ type: POST_FLOOR_FAILURE }));
};

export const fetchFloor = () => dispatch => {
	dispatch({ type: FETCH_FLOOR_START });
	const jobsiteId = JSON.parse(localStorage.jobsite).id;
	const buildingId = JSON.parse(localStorage.building).id;
	return axios
		.get(
			`${envVarPage}/api/user/jobsites/${jobsiteId}/buildings/${buildingId}/floors`
		)
		.then(res => {
			dispatch({ type: FETCH_FLOOR_SUCCESS });
		})
		.catch(err => {
			dispatch({ type: FETCH_FLOOR_FAILURE });
		});
};

export const updateFloor = floor => dispatch => {
	dispatch({ type: UPDATE_FLOOR_START });
	const { jobsiteId } = JSON.parse(localStorage.jobsite);
	const { buildingId } = JSON.parse(localStorage.building);
	const { floorId } = JSON.parse(localStorage.floor);
	return axios({
		method: 'put',
		url: `${envVarPage}/api/user/jobsites/${jobsiteId}/buildings/${buildingId}/floors/${floorId}`,
		data: floor,
		headers: {
			Authorization: localStorage.token,
		},
	})
		.then(res => {
			localStorage.setItem('floor', JSON.stringify(res.data));
			dispatch({ type: UPDATE_FLOOR_SUCCESS });
		})
		.catch(err => dispatch({ type: UPDATE_FLOOR_FAILURE }));
};

export const deleteFloor = floorId => dispatch => {
	dispatch({ type: DELETE_FLOOR_START });
	const jobsiteId = JSON.parse(localStorage.jobsite).id;
	const buildingId = JSON.parse(localStorage.building).id;
	return axios
		.delete(
			`${envVarPage}/api/user/jobsites/${jobsiteId}/buildings/${buildingId}/floors/${floorId}`
		)
		.then(res => {
			dispatch({ type: DELETE_FLOOR_SUCCESS });
		})
		.catch(err => {
			dispatch({ type: DELETE_FLOOR_FAILURE });
		});
};

// Unit

export const fetchUnit = () => dispatch => {
	dispatch({ type: FETCH_UNIT_START });
	const jobsiteId = JSON.parse(localStorage.jobsite).id;
	const buildingId = JSON.parse(localStorage.building).id;
	const floorId = JSON.parse(localStorage.floor).id;
	return axios
		.get(
			`${envVarPage}/api/user/jobsites/${jobsiteId}/buildings/${buildingId}/floors/${floorId}/units`
		)
		.then(res => {
			dispatch({ type: FETCH_UNIT_SUCCESS });
		})
		.catch(err => {
			dispatch({ type: FETCH_UNIT_FAILURE });
		});
};

export const updateUnit = unit => dispatch => {
	dispatch({ type: UPDATE_UNIT_START });
	const { jobsiteId } = JSON.parse(localStorage.jobsite);
	const { buildingId } = JSON.parse(localStorage.building);
	const { floorId } = JSON.parse(localStorage.floor);
	const { unitId } = JSON.parse(localStorage.unit);
	return axios({
		method: 'put',
		url: `${envVarPage}/api/user/jobsites/${jobsiteId}/buildings/${buildingId}/floors/${floorId}/units/${unitId}`,
		data: unit,
		headers: {
			Authorization: localStorage.token,
		},
	})
		.then(res => {
			localStorage.setItem('floor', JSON.stringify(res.data));
			dispatch({ type: UPDATE_UNIT_SUCCESS });
		})
		.catch(err => dispatch({ type: UPDATE_UNIT_FAILURE }));
};

export const deleteUnit = unitId => dispatch => {
	dispatch({ type: DELETE_UNIT_START });
	const jobsiteId = JSON.parse(localStorage.jobsite).id;
	const buildingId = JSON.parse(localStorage.building).id;
	const floorId = JSON.parse(localStorage.floor).id;
	return axios
		.delete(
			`${envVarPage}/api/user/jobsites/${jobsiteId}/buildings/${buildingId}/floors/${floorId}/units/${unitId}`
		)
		.then(res => {
			dispatch({ type: DELETE_UNIT_SUCCESS });
		})
		.catch(err => {
			dispatch({ type: DELETE_UNIT_FAILURE });
		});
};
