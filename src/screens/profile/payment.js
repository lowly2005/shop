import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles, paymentStyle, PLACEHOLDER_COLOR } from "../../styles/account";
import CreditCards from "../../components/payment/creditCards";
import AddFrom from "../../components/payment/form";

export default class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [
				{
					id: 0,
					expireDate: "12/2024",
					number: "4319021553121289",
					holder: "Shayan Araghi",
					active: true
				},
				{
					id: 1,
					expireDate: "12/2022",
					number: "372590709512081",
					holder: "Shayan Araghi",
					active: false
				},
				{
					id: 2,
					expireDate: "12/2020",
					number: "5153849425742099",
					holder: "Shayan Araghi",
					active: false
				}
			]
		};
	}

	submit = data => {
		let arr = this.state.cards;
		arr.unshift(data);
		this.setState({ cards: arr });
	};

	render() {
		const { cards } = this.state;
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
						<Text style={styles.currentTitle}>Payment</Text>
					</View>
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={() => this.props.navigation.navigate("Account")}
					>
						<Ionicons name="md-close" size={28} color={"#999"} />
					</TouchableOpacity>
				</View>
				<View style={paymentStyle.container}>
					<CreditCards style={paymentStyle} items={cards} />
					<AddFrom
						style={{ paymentStyle, PLACEHOLDER_COLOR }}
						index={cards.length}
						onSubmit={this.submit}
					/>
				</View>
			</View>
		);
	}
}
