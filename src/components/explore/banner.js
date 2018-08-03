import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import { MaterialIcons } from "@expo/vector-icons";

const banner = props => (
	<View style={props.style.bannerContainer}>
		<Image
			style={props.style.bannerContainerImage}
			resizeMode={Image.resizeMode.cover}
			source={require("../../assets/images/explore_banner.png")}
		/>
		<View style={props.style.bannerTagContainer}>
			<Text style={props.style.bannerTag}>{props.tagTitle}</Text>
		</View>
		<Text style={props.style.bannerTitle}>{props.title}</Text>
		<Text style={props.style.bannerDescription}>{props.description}</Text>
		<TouchableOpacity style={props.style.bannerBottomContainer}>
			<View style={props.style.bannerButtonContainer}>
				<Text style={props.style.bannerButton}>{props.button}</Text>
				<MaterialIcons
					style={props.style.bannerButtonIcon}
					name="keyboard-arrow-right"
					size={20}
					color={"#fff"}
				/>
			</View>
			<Text style={props.style.bannerType}>{props.type}</Text>
		</TouchableOpacity>
		<LinearGradient
			style={props.style.bannerGradient}
			locations={[0, 1.0]}
			colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]}
		/>
	</View>
);

export default banner;
