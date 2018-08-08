import React from "react";
import { View, TouchableOpacity } from "react-native";

const navbar = props => (
	<View style={props.style.navbar}>
		<TouchableOpacity
			activeOpacity={0.7}
			style={[{ justifyContent: "flex-start" }, props.style.navbarSection]}
		>
			{props.left}
		</TouchableOpacity>
		<View style={[{ justifyContent: "center" }, props.style.navbarSection]}>
			{props.title ? props.title : null}
		</View>
		<TouchableOpacity
			activeOpacity={0.7}
			style={[{ justifyContent: "flex-end" }, props.style.navbarSection]}
			onPress={() => props.navigation.goBack()}
		>
			{props.right}
		</TouchableOpacity>
	</View>
);

export default navbar;
