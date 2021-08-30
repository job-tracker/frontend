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
	isDeletingBuildings: false,
	isFetchingBuildings: false,
	isCreatingBuildings: false,
	isUpdatingBuildings: false,
	error: '',
};

export const buildingReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_BUILDING_FAILURE:
			return {
				...state,
				isCreatingBuildings: false,
				error: action.payload,
			};
		case POST_BUILDING_START:
			return {
				...state,
				isCreatingBuildings: true,
				error: '',
			};
		case POST_BUILDING_SUCCESS:
			return {
				...state,
				isCreatingBuildings: false,
			};
		case DELETE_BUILDING_FAILURE:
			return {
				...state,
				isDeletingBuildings: false,
				error: action.payload,
			};
		case DELETE_BUILDING_START:
			return {
				...state,
				isDeletingBuildings: true,
				error: '',
			};
		case DELETE_BUILDING_SUCCESS:
			return {
				...state,
				isDeletingBuildings: false,
			};
		case FETCH_BUILDING_FAILURE:
			return {
				...state,
				isFetchingBuildings: false,
				error: action.payload,
			};
		case FETCH_BUILDING_START:
			return {
				...state,
				isFetchingBuildings: true,
				error: '',
			};
		case FETCH_BUILDING_SUCCESS:
			return {
				...state,
				isFetchingBuildings: false,
				buildings: action.payload,
			};
		case UPDATE_BUILDING_FAILURE:
			return {
				...state,
				isUpdatingBuildings: false,
				error: action.payload,
			};
		case UPDATE_BUILDING_START:
			return {
				...state,
				isUpdatingBuildings: true,
				error: '',
			};
		case UPDATE_BUILDING_SUCCESS:
			return {
				...state,
				isUpdatingBuildings: false,
			};
		default:
			return state;
	}
};
