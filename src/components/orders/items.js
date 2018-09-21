import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";

const checkStatus = status => {
	console.log(status);
	switch (status) {
		case 0:
			return "Item dispathced";
		case 1:
			return "Item in transit";
		case 2:
			return "Item shipped";
		case 3:
			return "Item delivered";
	}
};

const items = props => {
	const { title, date, status, img } = props.item;
	const { style } = props;
	return status !== 3 ? (
		<TouchableOpacity activeOpacity={0.7} style={style.currentOrderContainer}>
			<View style={style.currentOrderImageContainer}>
				<Image
					resizeMode="cover"
					style={style.currentOrderImage}
					source={img}
				/>
			</View>
			<View style={{ flexDirection: "column" }}>
				<Text style={style.currentOrderTitle}>{title}</Text>
				<Text style={style.currentOrderStatus}>{checkStatus(status)}</Text>
			</View>
			<Text style={style.currentOrderDate}>{date}</Text>
		</TouchableOpacity>
	) : (
		<TouchableOpacity activeOpacity={0.7} style={style.orderContainer}>
			<View style={style.orderImageContainer}>
				<Image resizeMode="cover" style={style.orderImage} source={img} />
			</View>
			<View style={{ flexDirection: "column" }}>
				<Text style={style.orderTitle}>{title}</Text>
				<Text style={style.orderStatus}>{checkStatus(status)}</Text>
			</View>
			<Text style={style.orderDate}>{date}</Text>
		</TouchableOpacity>
	);
};

export default items;
