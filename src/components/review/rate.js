import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Star = props => {
	return (
		<View style={props.style.starContainer}>
			{Array.from(Array(5)).map((x, i) => (
				<TouchableOpacity
					key={i}
					style={props.style.star}
					activeOpacity={0.7}
					onPress={() => props.onSelect(i)}
				>
					{props.rate > i ? (
						<FontAwesome name="star" color={"#FF0101"} size={24} />
					) : (
						<FontAwesome name="star-o" color={"#bbb"} size={24} />
					)}
				</TouchableOpacity>
			))}
		</View>
	);
};

export default Star;
