import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import List from "../../components/account/list";
import AddressModal from "../../components/address/modal";
import { Ionicons } from "@expo/vector-icons";
import { styles, addressStyle } from "../../styles/account";

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
			],
			modalStatus: false,
			modalTitle: "Add address"
		};
	}

	setDefault = id => {
		let items = this.state.addressItems;
		items.map(
			item =>
				item.id === id ? (item.default = !item.default) : (item.default = false)
		);
		this.setState({ addressItems: this.state.addressItems });
	};

	removeAddress = id => {
		let list = this.state.addressItems.filter(item => item.id !== id);
		this.setState({ addressItems: list });
	};

	editAddress = id => {};

	closeAddressModal = () => this.setState({ modalStatus: false });

	showAddressModal = () => this.setState({ modalStatus: true });

	render() {
		const { addressItems, modalStatus, modalTitle } = this.state;
		return (
			<View style={styles.container}>
				<AddressModal
					status={modalStatus}
					title={modalTitle}
					onClose={this.closeAddressModal}
					onSaveAddress={this.closeAddressModal}
				/>
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
					<List
						items={addressItems}
						onEditAddress={this.editAddress}
						onRemoveAddress={this.removeAddress}
						onSetDefault={this.setDefault}
						onShowAddressModal={this.showAddressModal}
					/>
				</View>
			</View>
		);
	}
}
