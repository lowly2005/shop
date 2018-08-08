import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationActions } from "react-navigation";
import { styles } from "../../styles/account";

export default class Account extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text
					style={[
						{ fontWeight: "bold", fontSize: 34, paddingHorizontal: 15 },
						styles.title
					]}
				>
					Account
				</Text>
				<View style={styles.itemsContainer}>
					<TouchableOpacity
						activeOpacity={0.6}
						style={styles.item}
						onPress={() => this.props.navigation.navigate("Profile")}
					>
						<Text style={styles.itemText}>Profile</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.6}
						style={styles.item}
						onPress={() => this.props.navigation.navigate("Orders")}
					>
						<Text style={styles.itemText}>Orders</Text>
						<View style={styles.notification}>
							<Text style={styles.notificationText}>2</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.6}
						style={styles.item}
						onPress={() => this.props.navigation.navigate("Address")}
					>
						<Text style={styles.itemText}>Address</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.6}
						style={styles.item}
						onPress={() => this.props.navigation.navigate("Payment")}
					>
						<Text style={styles.itemText}>Payment</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					activeOpacity={0.6}
					style={styles.logOutContainer}
					onPress={() =>
						this.props.navigation.dispatch(
							NavigationActions.navigate({ routeName: "Auth" })
						)
					}
				>
					<Text style={styles.logOutText}>Logout</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
