import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const rateStatus = rate => {
	let value = Math.floor(rate);
	switch (true) {
		case 5:
			return "Excellent";
		case value >= 4:
			return "Very good";
		case value >= 3:
			return "Good";
		case value >= 2:
			return "Bad";
		case value >= 1:
			return "Awful";
		default:
			return null;
	}
};

const rateStyleStatus = rate => {
	let value = Math.floor(rate);
	switch (true) {
		case 5:
			return "#43B55B";
		case value >= 4:
			return "#43B55B";
		case value >= 3:
			return "#FF9731";
		case value >= 2:
			return "#FF0101";
		case value >= 1:
			return "#FF0101";
		default:
			return null;
	}
};

const generalInfo = props => (
	<View style={props.style.rateAndReviewContainer}>
		<View style={{ flexDirection: "row", alignItems: "center" }}>
			<View
				style={[
					props.style.rateConatiner,
					{ backgroundColor: rateStyleStatus(props.item.rate) }
				]}
			>
				<Text style={props.style.rate}>{props.item.rate}</Text>
			</View>
			<Text style={props.style.rateText}>{rateStatus(props.item.rate)}</Text>
		</View>
		<TouchableOpacity
			activeOpacity={0.7}
			style={props.style.reviewsContainer}
			onPress={() => props.navigation.navigate("Review")}
		>
			<Text style={props.style.reviewsText}>
				{props.item.reviewsCount} reviews
			</Text>
			<Feather name={"chevron-right"} size={16} color={props.color} />
		</TouchableOpacity>
	</View>
);

export default generalInfo;
