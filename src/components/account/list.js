import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { addressStyle, PRIMARY_COLOR } from "../../styles/account";

const Items = props => (
	<React.Fragment>
		<TouchableOpacity
			activeOpacity={0.8}
			style={addressStyle.btnContainer}
			onPress={() => props.onShowAddressModal()}
		>
			<Entypo name="plus" size={22} color={"#fff"} />
			<Text style={addressStyle.btnText}>Add New Address</Text>
		</TouchableOpacity>
		<ScrollView>
			{props.items.map(item => {
				return (
					<TouchableOpacity
						activeOpacity={0.8}
						key={item.id}
						style={addressStyle.cardContainer}
						onPress={() => props.onSetDefault(item.id)}
					>
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
									onPress={() => props.onEditAddress()}
								>
									<Text style={addressStyle.commandBtn}>Edit</Text>
								</TouchableOpacity>
								<View style={addressStyle.divider} />
								<TouchableOpacity
									activeOpacity={0.6}
									onPress={() => props.onRemoveAddress(item.id)}
								>
									<Text style={addressStyle.commandBtn}>Delete</Text>
								</TouchableOpacity>
							</View>
						</View>
					</TouchableOpacity>
				);
			})}
		</ScrollView>
	</React.Fragment>
);

export default Items;
