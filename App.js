import React from "react";
import {
	createStackNavigator,
	createBottomTabNavigator,
	createSwitchNavigator
} from "react-navigation";
import { Image } from "react-native";
// Auth pages
import Register from "./src/screens/account/register";
import Login from "./src/screens/account/login";
import ForgotPassword from "./src/screens/account/forgotPassword";
// Main Pages
import Explore from "./src/screens/explore";
import Category from "./src/screens/category";
import Cart from "./src/screens/cart";
import Offers from "./src/screens/offers";
// Account pages
import Account from "./src/screens/profile/account";
import Profile from "./src/screens/profile/profile";
import Orders from "./src/screens/profile/orders";
import Address from "./src/screens/profile/address";
import Payment from "./src/screens/profile/payment";
import Tracking from "./src/screens/profile/tracking";

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
		},
		Address: {
			screen: Address
		},
		Payment: {
			screen: Payment
		},
		Tracking: {
			screen: Tracking
		}
	},
	{
		initialRouteName: "Account",
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
		}
	},
	{
		initialRouteName: "Category",
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
		initialRouteName: "App"
	}
);

export default TopLevelNavigation;
