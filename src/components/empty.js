import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const navbar = props => (
	<View style={props.style.emptyContainer}>
		<Image
			style={props.style.emptyIcon}
			resizeMode={Image.resizeMode.contain}
			source={require("../assets/images/empty_offers.png")}
		/>
		<Text style={props.style.emptyTitle}>{props.title}</Text>
		<Text style={props.style.emptyDescription}>{props.description}</Text>
		<TouchableOpacity activeOpacity={0.7} style={props.style.emptyBtnContainer}>
			<Text style={props.style.emptyBtn}>Continue shopping</Text>
		</TouchableOpacity>
	</View>
);

export default navbar;
