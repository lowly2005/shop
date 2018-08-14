import React from "react";
import { Text, TouchableOpacity } from "react-native";

const generalInfo = props => (
	<TouchableOpacity
		activeOpacity={0.8}
		style={props.style.buttonContainer}
		onPress={() => props.onClick()}
	>
		<Text style={props.style.button}>{props.text}</Text>
	</TouchableOpacity>
);

export default generalInfo;
