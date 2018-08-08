import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

const items = props => (
	<TouchableOpacity activeOpacity={0.7} style={props.style.orderContainer}>
		<View style={props.style.orderImageContainer}>
			<Image
				resizeMode="cover"
				style={props.style.orderImage}
				source={props.img}
			/>
		</View>
		<View style={{ flexDirection: "column" }}>
			<Text style={props.style.orderTitle}>{props.title}</Text>
			<Text style={props.style.orderStatus}>Delivered</Text>
		</View>
		<Text style={props.style.orderDate}>{props.date}</Text>
	</TouchableOpacity>
);

export default items;
