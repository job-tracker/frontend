import { LOGIN_START, LOGIN_FAILURE, LOGIN_SUCCESS } from '../actions';

const initialState = {
	user: [],
	loading: false,
	error: '',
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case LOGIN_START:
			return {
				...state,
				loading: true,
				error: '',
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload,
			};
		default:
			return state;
	}
};
