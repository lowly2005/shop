import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = props => (
	<TouchableOpacity
		style={[
			props.style.tagContainer,
			props.fullWidth ? { width: "100%" } : null
		]}
		activeOpacity={0.7}
	>
		<Text style={props.style.tag}>{props.name}</Text>
	</TouchableOpacity>
);
export default Button;
