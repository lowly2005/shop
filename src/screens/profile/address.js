import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { styles, addressStyle, PRIMARY_COLOR } from "../../styles/account";

export default class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addressItems: [
				{
					id: 0,
					fullname: "Marion	Becker",
					address: `203, Lumbini apartment,\nVenkatapura main road,\n9th cross street,\nKoramangala, Karnataka - 623505`,
					phone: "(986) 827-4830",
					default: true
				},
				{
					id: 2,
					fullname: "Carrie	Lynch",
					address: "9 Leeton Ridge Street \nCottage Grove, MN 55016",
					phone: "(438) 285-0796",
					default: false
				},
				{
					id: 3,
					fullname: "Cesar	Hunter",
					address: "775 Branch St. \nLinden, NJ 07036",
					phone: "(435) 920-0546",
					default: false
				},
				{
					id: 4,
					fullname: "Antonia	Cox",
					address: "969 Acacia Ave. \nGlastonbury, CT 06033",
					phone: "(530) 216-0270",
					default: false
				},
				{
					id: 5,
					fullname: "Emilio	Caldwell",
					address: "26 Lawrence Dr. Ronkonkoma,\n NY 11779",
					phone: "(316) 330-9169",
					default: false
				}
			]
		};
	}

	removeAddress = id => {
		let list = this.state.addressItems.filter(item => item.id !== id);
		this.setState({ addressItems: list });
	};

	editAddress = id => {};

	render() {
		const { addressItems } = this.state;
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
						<Text style={styles.currentTitle}>Address</Text>
					</View>
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={() => this.props.navigation.navigate("Account")}
					>
						<Ionicons name="md-close" size={28} color={"#999"} />
					</TouchableOpacity>
				</View>
				<View style={addressStyle.container}>
					<TouchableOpacity
						activeOpacity={0.8}
						style={addressStyle.btnContainer}
					>
						<Entypo name="plus" size={22} color={"#fff"} />
						<Text style={addressStyle.btnText}>Add New Address</Text>
					</TouchableOpacity>
					<ScrollView>
						{addressItems.map(item => {
							return (
								<View key={item.id} style={addressStyle.cardContainer}>
									{item.default ? (
										<Ionicons
											name="ios-checkmark-circle"
											size={28}
											color={PRIMARY_COLOR}
											style={addressStyle.default}
										/>
									) : null}
									<Text style={addressStyle.fullName}>{item.fullname}</Text>
									<Text style={addressStyle.address}>{item.address}</Text>
									<View style={addressStyle.bottomSection}>
										<Text style={addressStyle.phone}>{item.phone}</Text>
										<View style={{ flexDirection: "row" }}>
											<TouchableOpacity
												activeOpacity={0.6}
												onPress={() => this.editAddress()}
											>
												<Text style={addressStyle.commandBtn}>Edit</Text>
											</TouchableOpacity>
											<View style={addressStyle.divider} />
											<TouchableOpacity
												activeOpacity={0.6}
												onPress={() => this.removeAddress(item.id)}
											>
												<Text style={addressStyle.commandBtn}>Delete</Text>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							);
						})}
					</ScrollView>
				</View>
			</View>
		);
	}
}
