import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const header = props => (
	<View style={props.style.exploreHeader}>
		<View>
			<Text style={props.style.exploreHeaderName}>Hi {props.name},</Text>
			<Text style={props.style.exploreHeaderTitle}>Welcome</Text>
		</View>
		<TouchableOpacity activeOpacity={0.8}>
			<Ionicons name="ios-search" size={25} color={"#000"} />
		</TouchableOpacity>
	</View>
);

export default header;
