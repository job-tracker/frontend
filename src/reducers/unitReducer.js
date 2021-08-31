import {
	POST_UNIT_START,
	POST_UNIT_SUCCESS,
	POST_UNIT_FAILURE,
	FETCH_UNIT_START,
	FETCH_UNIT_SUCCESS,
	FETCH_UNIT_FAILURE,
	DELETE_UNIT_START,
	DELETE_UNIT_SUCCESS,
	DELETE_UNIT_FAILURE,
	UPDATE_UNIT_START,
	UPDATE_UNIT_SUCCESS,
	UPDATE_UNIT_FAILURE,
} from '../actions';

const initialState = {
	units: [],
	isDeletingUnits: false,
	isFetchingUnits: false,
	isCreatingUnits: false,
	isUpdatingUnits: false,
	error: '',
};

export const unitReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_UNIT_FAILURE:
			return {
				...state,
				isCreatingUnits: false,
				error: action.payload,
			};
		case POST_UNIT_START:
			return {
				...state,
				isCreatingUnits: true,
				error: '',
			};
		case POST_UNIT_SUCCESS:
			return {
				...state,
				isCreatingUnits: false,
			};
		case DELETE_UNIT_FAILURE:
			return {
				...state,
				isDeletingUnits: false,
				error: action.payload,
			};
		case DELETE_UNIT_START:
			return {
				...state,
				isDeletingUnits: true,
				error: '',
			};
		case DELETE_UNIT_SUCCESS:
			return {
				...state,
				isDeletingUnits: false,
			};
		case FETCH_UNIT_FAILURE:
			return {
				...state,
				isFetchingUnits: false,
				error: action.payload,
			};
		case FETCH_UNIT_START:
			return {
				...state,
				isFetchingUnits: true,
				error: '',
			};
		case FETCH_UNIT_SUCCESS:
			return {
				...state,
				isFetchingUnits: false,
				units: action.payload,
			};
		case UPDATE_UNIT_FAILURE:
			return {
				...state,
				isUpdatingUnits: false,
				error: action.payload,
			};
		case UPDATE_UNIT_START:
			return {
				...state,
				isUpdatingUnits: true,
				error: '',
			};
		case UPDATE_UNIT_SUCCESS:
			return {
				...state,
				isUpdatingUnits: false,
			};
		default:
			return state;
	}
};
