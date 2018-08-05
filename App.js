import React from "react";
import Register from "./src/screens/account/register";
import Login from "./src/screens/account/login";
import ForgotPassword from "./src/screens/account/forgotPassword";
import {
	createStackNavigator,
	createBottomTabNavigator,
	createSwitchNavigator
} from "react-navigation";
import { Image } from "react-native";

import Explore from "./src/screens/explore";
import Category from "./src/screens/category";
import Cart from "./src/screens/cart";
import Offers from "./src/screens/offers";
import Account from "./src/screens/profile/account";
import Profile from "./src/screens/profile/profile";
import Orders from "./src/screens/profile/orders";

const AuthNavigation = createStackNavigator(
	{
		Login: {
			screen: Login
		},
		Register: {
			screen: Register
		},
		ForgotPassword: {
			screen: ForgotPassword
		}
	},
	{
		initialRouteName: "Login",
		headerMode: "none"
	}
);

const AccountStackNavigation = createStackNavigator(
	{
		Account: {
			screen: Account
		},
		Profile: {
			screen: Profile
		},
		Orders: {
			screen: Orders
		}
	},
	{
		initialRouteName: "Orders",
		headerMode: "none"
	}
);

const MainStackNavigation = createBottomTabNavigator(
	{
		Explore: {
			screen: Explore,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Image
						style={{ width: 22, height: 22, tintColor: tintColor }}
						source={require("./src/assets/images/tab_home.png")}
					/>
				)
			}
		},
		Profile: {
			screen: AccountStackNavigation,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Image
						style={{ width: 22, height: 22, tintColor: tintColor }}
						source={require("./src/assets/images/tab_profile.png")}
					/>
				)
			}
		},
		Category: {
			screen: Category,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Image
						style={{ width: 22, height: 22, tintColor: tintColor }}
						source={require("./src/assets/images/tab_category.png")}
					/>
				)
			}
		},
		Cart: {
			screen: Cart,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Image
						style={{ width: 22, height: 22, tintColor: tintColor }}
						source={require("./src/assets/images/tab_cart.png")}
					/>
				)
			}
		},
		Offers: {
			screen: Offers,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Image
						style={{ width: 22, height: 22, tintColor: tintColor }}
						source={require("./src/assets/images/tab_offers.png")}
					/>
				)
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: "#43B55B",
			inactiveTintColor: "#444",
			showLabel: false,
			style: {
				backgroundColor: "#fff",
				borderTopColor: "#eee",
				borderTopWidth: 1
			},
			labelStyle: {
				marginTop: -10
			}
		}
	}
);

const TopLevelNavigation = createSwitchNavigator(
	{
		Auth: AuthNavigation,
		App: MainStackNavigation,
		Account: AccountStackNavigation
	},
	{
		initialRouteName: "Account"
	}
);

export default TopLevelNavigation;

// export default class App extends Component {
// 	render() {
// 		return (
// 			<TopLevelNavigation
// 				ref={navigatorRef => {
// 					NavigationService.setTopLevelNavigator(navigatorRef);
// 				}}
// 			/>
// 		);
// 	}
// }
