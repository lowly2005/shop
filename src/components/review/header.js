import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const Header = props => (
	<View style={props.style.reviewHeaderContainer}>
		<Text style={props.style.reviewHeader}>{props.title}</Text>
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={() => props.navigation.goBack()}
		>
			<Ionicons name="md-close" size={28} color={"#999"} />
		</TouchableOpacity>
	</View>
);
export default Header;
