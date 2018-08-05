import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles, ordersStyle } from "../../styles/account";

export default class Orders extends Component {
	state = {
		deliveredItems: [
			{
				id: 0,
				title: "Fastrack Retro Square Sunglasses",
				date: "22 March 2018",
				img: "orders_item2.png"
			},
			{
				id: 1,
				title: "Solid Men's Polo Neck Orange T-Shirt",
				date: "10 Jun 2018",
				img: "orders_item3.png"
			},
			{
				id: 2,
				title: "Philips Cordless Trimmer for Men",
				date: "07 Sep 2018",
				img: "orders_item4.png"
			},
			{
				id: 3,
				title: "Converse High Ankle Sneakers",
				date: "01 Aug 2018",
				img: "orders_item5.png"
			},
			{
				id: 4,
				title: "Silly Punter Graphic Grey T-Shirt",
				date: "27 May 2018",
				img: "orders_item6.png"
			}
		]
	};

	render() {
		const { deliveredItems } = this.state;
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
						onPress={() => this.props.navigation.replace("Account")}
					>
						<Ionicons name="md-close" size={28} color={"#999"} />
					</TouchableOpacity>
				</View>
				<Text style={ordersStyle.label}>CURRENT ORDERS</Text>
				<View style={ordersStyle.currentOrderContainer}>
					<View style={ordersStyle.currentOrderImageContainer}>
						<Image
							resizeMode="cover"
							style={ordersStyle.currentOrderImage}
							source={require("../../assets/images/orders_item1.png")}
						/>
					</View>
					<View style={{ flexDirection: "column" }}>
						<Text style={ordersStyle.currentOrderTitle}>
							Rawpockets Neck Dark Blue
						</Text>
						<Text style={ordersStyle.currentOrderStatus}>Item shipped</Text>
					</View>
					<Text style={ordersStyle.currentOrderDate}>ETA : 13 july</Text>
				</View>
				<Text style={ordersStyle.label}>PAST ORDERS</Text>
				{deliveredItems.map(item => {
					return (
						<View key={item.id} style={ordersStyle.orderContainer}>
							<View style={ordersStyle.orderImageContainer}>
								<Image
									resizeMode="cover"
									style={ordersStyle.orderImage}
									source={require("../../assets/images/orders_item3.png")}
								/>
							</View>
							<View style={{ flexDirection: "column" }}>
								<Text style={ordersStyle.orderTitle}>{item.title}</Text>
								<Text style={ordersStyle.orderStatus}>Delivered</Text>
							</View>
							<Text style={ordersStyle.orderDate}>{item.date}</Text>
						</View>
					);
				})}
			</View>
		);
	}
}
