import React from "react";
import { View, Image } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "react-navigation";
import Explore from "./explore";
import Category from "./category";
import Cart from "./cart";
import Offers from "./offers";
import Profile from "./profile";

class Home extends React.Component {
	render() {
		return <View />;
	}
}

export default createBottomTabNavigator(
	{
		Explore: {
			screen: Explore,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Image
						style={{ width: 22, height: 22, tintColor: tintColor }}
						source={require("../assets/images/tab_home.png")}
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
						source={require("../assets/images/tab_category.png")}
					/>
				)
			}
		},
		Cart: {
			screen: Cart,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Ionicons name="ios-cart-outline" size={25} color={tintColor} />
				)
			}
		},
		Offers: {
			screen: Offers,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Octicons name="gift" size={25} color={tintColor} />
				)
			}
		},
		Profile: {
			screen: Profile,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Image
						style={{ width: 22, height: 22, tintColor: tintColor }}
						source={require("../assets/images/tab_home.png")}
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
