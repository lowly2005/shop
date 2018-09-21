import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Navbar = props => {
	const { style, favorite, onChangeFavoriteStatus, navigation } = props;
	return (
		<View style={style.navbar}>
			<TouchableOpacity
				style={{ flexDirection: "row", alignItems: "center" }}
				activeOpacity={0.7}
				onPress={() => navigation.goBack()}
			>
				<Ionicons name={"ios-arrow-back-outline"} size={22} color={"#999"} />
				<Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 10 }}>
					Product details
				</Text>
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.7}>
				{favorite ? (
					<Ionicons
						style={style.favorite}
						name={"md-heart"}
						size={22}
						color={"#FF0101"}
						onPress={() => onChangeFavoriteStatus()}
					/>
				) : (
					<Ionicons
						style={style.favorite}
						name={"md-heart-outline"}
						size={22}
						color={"#222"}
						onPress={() => onChangeFavoriteStatus()}
					/>
				)}
			</TouchableOpacity>
		</View>
	);
};

export default Navbar;
