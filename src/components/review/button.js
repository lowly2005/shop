import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = props => {
	return (
		<TouchableOpacity
			style={[
				props.style.tagContainer,
				props.fullWidth ? { width: "100%" } : null,
				{
					borderColor: props.item.active ? "#43B55B" : "#ddd"
				}
			]}
			activeOpacity={0.7}
			onPress={() => props.onClick(props.index, props.item.id)}
		>
			<Text style={props.style.tag}>{props.item.name}</Text>
		</TouchableOpacity>
	);
};

export default Button;
