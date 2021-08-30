import {
	POST_JOBSITE_START,
	POST_JOBSITE_SUCCESS,
	POST_JOBSITE_FAILURE,
	FETCH_JOBSITE_START,
	FETCH_JOBSITE_SUCCESS,
	FETCH_JOBSITE_FAILURE,
	DELETE_JOBSITE_START,
	DELETE_JOBSITE_SUCCESS,
	DELETE_JOBSITE_FAILURE,
	UPDATE_JOBSITE_START,
	UPDATE_JOBSITE_SUCCESS,
	UPDATE_JOBSITE_FAILURE,
} from '../actions';

const initialState = {
	jobsites: [],
	isDeletingJobsites: false,
	isFetchingJobsites: false,
	isCreatingJobsites: false,
	isUpdatingJobsites: false,
	error: '',
};

export const jobsiteReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_JOBSITE_FAILURE:
			return {
				...state,
				isCreatingJobsites: false,
				error: action.payload,
			};
		case POST_JOBSITE_START:
			return {
				...state,
				isCreatingJobsites: true,
				error: '',
			};
		case POST_JOBSITE_SUCCESS:
			return {
				...state,
				isCreatingJobsites: false,
			};
		case DELETE_JOBSITE_FAILURE:
			return {
				...state,
				isDeletingJobsites: false,
				error: action.payload,
			};
		case DELETE_JOBSITE_START:
			return {
				...state,
				isDeletingJobsites: true,
				error: '',
			};
		case DELETE_JOBSITE_SUCCESS:
			return {
				...state,
				isDeletingJobsites: false,
			};
		case FETCH_JOBSITE_FAILURE:
			return {
				...state,
				isFetchingJobsites: false,
				error: action.payload,
			};
		case FETCH_JOBSITE_START:
			return {
				...state,
				isFetchingJobsites: true,
				error: '',
			};
		case FETCH_JOBSITE_SUCCESS:
			return {
				...state,
				isFetchingJobsites: false,
				jobsites: action.payload,
			};
		case UPDATE_JOBSITE_FAILURE:
			return {
				...state,
				isUpdatingJobsites: false,
				error: action.payload,
			};
		case UPDATE_JOBSITE_START:
			return {
				...state,
				isUpdatingJobsites: true,
				error: '',
			};
		case UPDATE_JOBSITE_SUCCESS:
			return {
				...state,
				isUpdatingJobsites: false,
			};
		default:
			return state;
	}
};
