import * as type from "../actions/type";

const initalState = {
	isLoading: false
};

export default function(state = initalState, action) {
	switch (action.type) {
		case type.LOGIN:
			return {
				...state,
				isLoading: action.payload.isLoading
			};
		default:
			return state;
	}
}
