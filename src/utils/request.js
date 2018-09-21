import axios from "axios";
import store from "../store";
import { LOGIN } from "../actions/type";

const axiosInstance = axios.create({
	baseURL: "https://reqres.in/api/",
	headers: {}
});

axiosInstance.interceptors.request.use(config => {
	// const token = localStorage.getItem("token");
	// config.headers.Authorization = token ? `bearer ${token}` : "";
	return config;
});

axiosInstance.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		// if (error.response.status === 401) {
		// 	store.dispatch({
		// 		type: LOGIN,
		// 		payload: {
		// 			token: null,
		// 			isLoaded: false,
		// 			error: "",
		// 			isAuthenticated: false
		// 		}
		// 	});
		// 	history.push(`/login`);
		// }
		return Promise.reject(error.response);
	}
);

export default axiosInstance;
