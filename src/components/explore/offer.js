import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import { MaterialIcons } from "@expo/vector-icons";

const offer = props => (
	<TouchableOpacity activeOpacity={0.8} style={props.style.offerContainer}>
		<Image
			style={props.style.offerContainerImage}
			resizeMode={Image.resizeMode.cover}
			source={require("../../assets/images/explore_offer.png")}
		/>
		<View style={props.style.offerTagContainer}>
			<Text style={props.style.offerTag}>Offer</Text>
		</View>
		<LinearGradient
			style={props.style.offerGradient}
			locations={[0, 1.0]}
			colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]}
		>
			<Text style={props.style.offerTitle}>{props.title}</Text>
			<TouchableOpacity style={props.style.offerButtonContainer}>
				<Text style={props.style.offerButton}>{props.button}</Text>
				<MaterialIcons
					style={props.style.offerButtonIcon}
					name="keyboard-arrow-right"
					size={20}
					color={"#fff"}
				/>
			</TouchableOpacity>
		</LinearGradient>
	</TouchableOpacity>
);

export default offer;
