import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { LinearGradient } from "expo";

const items = props => (
	<TouchableOpacity
		activeOpacity={0.7}
		onPress={() => props.navigation.navigate("Explore")}
		style={[
			props.special ? props.style.specialContainer : null,
			props.style.itemConatainer
		]}
	>
		<View style={props.style.itemContent}>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-start"
				}}
			>
				{props.special ? (
					<Image
						style={props.style.specialIcon}
						resizeMode={Image.resizeMode.contain}
						source={require("../../assets/images/special_offers.png")}
					/>
				) : null}
				<View
					style={{
						flexDirection: "column"
					}}
				>
					<Text
						style={[
							props.special ? { color: "#fff" } : null,
							props.style.itemTitle
						]}
					>
						{props.title}
					</Text>
					<Text
						style={[
							props.style.itemDescription,
							props.special ? { color: "#fff" } : null
						]}
					>
						{props.description}
					</Text>
				</View>
			</View>
			<View>
				<View
					style={[
						props.style.buttonContainer,
						props.special ? { borderColor: "#fff" } : null
					]}
				>
					<Text
						style={[
							props.style.button,
							props.special ? { color: "#fff" } : null
						]}
					>
						{props.button}
					</Text>
				</View>
			</View>
		</View>
		{props.special ? (
			<LinearGradient
				style={props.style.specialGradient}
				start={[0, 1]}
				end={[1, 1]}
				colors={["#BCDB37", "#3DB657"]}
			/>
		) : null}
	</TouchableOpacity>
);

export default items;
