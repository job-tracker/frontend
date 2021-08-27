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
