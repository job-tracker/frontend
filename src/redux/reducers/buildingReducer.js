import {
	POST_BUILDING_START,
	POST_BUILDING_SUCCESS,
	POST_BUILDING_FAILURE,
	FETCH_BUILDING_START,
	FETCH_BUILDING_SUCCESS,
	FETCH_BUILDING_FAILURE,
	DELETE_BUILDING_START,
	DELETE_BUILDING_SUCCESS,
	DELETE_BUILDING_FAILURE,
	UPDATE_BUILDING_START,
	UPDATE_BUILDING_SUCCESS,
	UPDATE_BUILDING_FAILURE,
} from '../actions';

const initialState = {
	buildings: [],
	loading: false,
	error: '',
};

export const buildingReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_BUILDING_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case POST_BUILDING_START:
			return {
				...state,
				loading: true,
				error: '',
			};
		case POST_BUILDING_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case DELETE_BUILDING_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case DELETE_BUILDING_START:
			return {
				...state,
				loading: true,
				error: '',
			};
		case DELETE_BUILDING_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case FETCH_BUILDING_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case FETCH_BUILDING_START:
			return {
				...state,
				loading: true,
				error: '',
			};
		case FETCH_BUILDING_SUCCESS:
			return {
				...state,
				loading: false,
				buildings: action.payload,
			};
		case UPDATE_BUILDING_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case UPDATE_BUILDING_START:
			return {
				...state,
				loading: true,
				error: '',
			};
		case UPDATE_BUILDING_SUCCESS:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};
