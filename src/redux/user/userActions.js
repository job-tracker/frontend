import axios from 'axios';
import {
	FETCH_USERS_FAILURE,
	FETCH_USERS_REQUEST,
	FETCH_USERS_SUCCESS,
} from './userTypes';

// Environment var
const envVarPage = process.env.REACT_APP_BACKEND_BASE_URL;

// These action creators return an action

export const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUEST,
	};
};

export const fetchUsersSuccess = users => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users,
	};
};

export const fetchUsersFailure = error => {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error,
	};
};

/* fetchUsers, using the thunk middleware
will return another function. Using axios we
make an asynchronous call to our database */

export const fetchUsers = () => {
	return dispatch => {
		console.log(envVarPage);
		dispatch(fetchUsersRequest);
		axios
			.get(`${envVarPage}/api/users`)
			.then(res => {
				const users = res.data;
				dispatch(fetchUsersSuccess(users));
			})
			.catch(err => {
				const errorMsg = err.massage;
				dispatch(fetchUsersFailure(errorMsg));
			});
	};
};

/* Here we are grabbing a specific user */

export const fetchAuthUser = () => {
	return dispatch => {
		dispatch(fetchUsersRequest);
		axios
			.get(`${envVarPage}/api/users/1001`)
			.then(res => {
				const user = res.data;
				dispatch(fetchUsersSuccess(user));
			})
			.catch(err => {
				const errorMsg = err.massage;
				dispatch(fetchUsersFailure(errorMsg));
			});
	};
};
