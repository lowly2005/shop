import * as type from "../actions/type";
import axios from "../utils/request";

export const loginUser = data => dispatch => {
	dispatch({
		type: type.LOGIN,
		payload: {
			isLoading: true
		}
	});
	axios
		.post("login", {
			email: "shayan"
		})
		.then(res => {
			dispatch({
				type: type.LOGIN,
				payload: {
					isLoading: false
				}
			});
			res.status === 200 ? null : null;
		})
		.catch(err => {});
};
