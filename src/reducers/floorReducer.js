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
	isDeletingFloors: false,
	isFetchingFloors: false,
	isCreatingFloors: false,
	isUpdatingFloors: false,
	error: '',
};

export const floorReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_FLOOR_FAILURE:
			return {
				...state,
				isCreatingFloors: false,
				error: action.payload,
			};
		case POST_FLOOR_START:
			return {
				...state,
				isCreatingFloors: true,
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
				isDeletingFloors: false,
				error: action.payload,
			};
		case DELETE_FLOOR_START:
			return {
				...state,
				isDeletingFloors: true,
				error: '',
			};
		case DELETE_FLOOR_SUCCESS:
			return {
				...state,
				isDeletingFloors: false,
			};
		case FETCH_FLOOR_FAILURE:
			return {
				...state,
				isFetchingFloors: false,
				error: action.payload,
			};
		case FETCH_FLOOR_START:
			return {
				...state,
				isFetchingFloors: true,
				error: '',
			};
		case FETCH_FLOOR_SUCCESS:
			return {
				...state,
				isFetchingFloors: false,
				floors: action.payload,
			};
		case UPDATE_FLOOR_FAILURE:
			return {
				...state,
				isUpdatingFloors: false,
				error: action.payload,
			};
		case UPDATE_FLOOR_START:
			return {
				...state,
				isUpdatingFloors: true,
				error: '',
			};
		case UPDATE_FLOOR_SUCCESS:
			return {
				...state,
				isUpdatingFloors: false,
			};
		default:
			return state;
	}
};
