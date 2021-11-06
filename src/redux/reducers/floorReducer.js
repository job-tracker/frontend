import {
	POST_FLOOR_START,
	POST_FLOOR_SUCCESS,
	POST_FLOOR_FAILURE,
	FETCH_FLOOR_START,
	FETCH_FLOOR_SUCCESS,
	FETCH_FLOOR_FAILURE,
	DELETE_FLOOR_START,
	DELETE_FLOOR_SUCCESS,
	DELETE_FLOOR_FAILURE,
	UPDATE_FLOOR_START,
	UPDATE_FLOOR_SUCCESS,
	UPDATE_FLOOR_FAILURE,
} from '../actions';

const initialState = {
	floors: [],
	loading: false,
	error: '',
};

export const floorReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_FLOOR_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case POST_FLOOR_START:
			return {
				...state,
				loading: true,
				error: '',
			};
		case POST_FLOOR_SUCCESS:
			return {
				...state,
				isCreatingFloors: false,
			};
		case DELETE_FLOOR_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case DELETE_FLOOR_START:
			return {
				...state,
				loading: true,
				error: '',
			};
		case DELETE_FLOOR_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case FETCH_FLOOR_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case FETCH_FLOOR_START:
			return {
				...state,
				loading: true,
				error: '',
			};
		case FETCH_FLOOR_SUCCESS:
			return {
				...state,
				loading: false,
				floors: action.payload,
			};
		case UPDATE_FLOOR_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case UPDATE_FLOOR_START:
			return {
				...state,
				loading: true,
				error: '',
			};
		case UPDATE_FLOOR_SUCCESS:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};
