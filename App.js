import Register from "./src/screens/account/register";
import Login from "./src/screens/account/login";
import ForgotPassword from "./src/screens/account/forgotPassword";
import Home from "./src/screens/home";
import { createStackNavigator } from "react-navigation";

export default createStackNavigator(
	{
		Login: {
			screen: Login
		},
		Register: {
			screen: Register
		},
		ForgotPassword: {
			screen: ForgotPassword
		},
		Home: {
			screen: Home
		}
	},
	{
		initialRouteName: "Login",
		headerMode: "none"
	}
);
