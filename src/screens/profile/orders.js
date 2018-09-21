import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles, ordersStyle, PRIMARY_COLOR } from "../../styles/account";
import Items from "../../components/orders/items";

export default class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: [
				{
					id: 0,
					title: "Rawpockets Neck Dark Blue",
					date: "13 July 2018",
					img: require("../../assets/images/orders_item1.png"),
					status: 2
				}
			],
			deliveredItems: [
				{
					id: 0,
					title: "Fastrack Retro Square Sunglasses",
					date: "22 March 2018",
					img: require("../../assets/images/orders_item2.png"),
					status: 3
				},
				{
					id: 1,
					title: "Solid Men's Polo Neck Orange T-Shirt",
					date: "10 Jun 2018",
					img: require("../../assets/images/orders_item3.png"),
					status: 3
				},
				{
					id: 2,
					title: "Philips Cordless Trimmer for Men",
					date: "07 Sep 2018",
					img: require("../../assets/images/orders_item4.png"),
					status: 3
				},
				{
					id: 3,
					title: "Converse High Ankle Sneakers",
					date: "01 Aug 2018",
					img: require("../../assets/images/orders_item5.png"),
					status: 3
				},
				{
					id: 4,
					title: "Silly Punter Graphic Grey T-Shirt",
					date: "27 May 2018",
					img: require("../../assets/images/orders_item6.png"),
					status: 3
				}
			]
		};
	}

	render() {
		const { activeItem, deliveredItems } = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center"
						}}
					>
						<Text style={styles.title}>Account</Text>
						<Text style={styles.divider}>/</Text>
						<Text style={styles.currentTitle}>Orders</Text>
					</View>
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={() => this.props.navigation.navigate("Account")}
					>
						<Ionicons name="md-close" size={28} color={"#999"} />
					</TouchableOpacity>
				</View>
				<Text style={ordersStyle.label}>CURRENT ORDERS</Text>
				{activeItem.map(item => (
					<Items style={ordersStyle} key={item.id} item={item} />
				))}
				<Text style={ordersStyle.label}>PAST ORDERS</Text>
				<ScrollView>
					{deliveredItems.map(item => (
						<Items style={ordersStyle} key={item.id} item={item} />
					))}
				</ScrollView>
			</View>
		);
	}
}
