import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles, trackingStyle } from "../../styles/account";

export default class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
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
						<Text style={styles.currentTitle}>Tracking</Text>
					</View>
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={() => this.props.navigation.navigate("Account")}
					>
						<Ionicons name="md-close" size={28} color={"#999"} />
					</TouchableOpacity>
				</View>
				<View style={trackingStyle.container} />
			</View>
		);
	}
}
