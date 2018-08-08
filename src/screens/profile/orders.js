import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles, ordersStyle } from "../../styles/account";
import Items from "../../components/orders/items";

export default class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deliveredItems: [
				{
					id: 0,
					title: "Fastrack Retro Square Sunglasses",
					date: "22 March 2018",
					img: require("../../assets/images/orders_item2.png")
				},
				{
					id: 1,
					title: "Solid Men's Polo Neck Orange T-Shirt",
					date: "10 Jun 2018",
					img: require("../../assets/images/orders_item3.png")
				},
				{
					id: 2,
					title: "Philips Cordless Trimmer for Men",
					date: "07 Sep 2018",
					img: require("../../assets/images/orders_item4.png")
				},
				{
					id: 3,
					title: "Converse High Ankle Sneakers",
					date: "01 Aug 2018",
					img: require("../../assets/images/orders_item5.png")
				},
				{
					id: 4,
					title: "Silly Punter Graphic Grey T-Shirt",
					date: "27 May 2018",
					img: require("../../assets/images/orders_item6.png")
				}
			]
		};
	}

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
						onPress={() => this.props.navigation.navigate("Account")}
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
				<ScrollView>
					{deliveredItems.map(item => (
						<Items
							style={ordersStyle}
							key={item.id}
							title={item.title}
							date={item.date}
							img={item.img}
						/>
					))}
				</ScrollView>
			</View>
		);
	}
}
