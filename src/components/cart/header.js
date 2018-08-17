import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Progress from "./progress";
import { Ionicons } from "@expo/vector-icons";

const header = props => {
	return (
		<View style={{ position: "relative" }}>
			<View style={props.style.headerContainer}>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => props.onGoToPreviousStep()}
					style={props.style.headerTab}
				>
					<Ionicons
						style={props.style.headerBackIcon}
						name={"ios-arrow-back-outline"}
						size={20}
						color={"#999"}
					/>
					<Text style={props.style.headerTitle}>Cart</Text>
				</TouchableOpacity>
				<Text style={props.headerSeperatorText}>-</Text>
				<TouchableOpacity activeOpacity={1} style={props.style.headerTab}>
					<Text style={props.style.headerTitle}>Address</Text>
				</TouchableOpacity>
				<Text style={props.headerSeperatorText}>-</Text>
				<TouchableOpacity activeOpacity={1} style={props.style.headerTab}>
					<Text style={props.style.headerTitle}>Payment</Text>
				</TouchableOpacity>
			</View>
			<Progress style={props.style} stage={props.stage} />
			<Image source={require("../../assets/images/dotted.png")} />
		</View>
	);
};

export default header;
