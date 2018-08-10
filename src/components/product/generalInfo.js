import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo";

const generalInfo = props => (
	<React.Fragment>
		<Text style={props.style.title}>{props.item.title}</Text>
		<View style={props.style.generalInfo}>
			{props.item.discount ? (
				<Text style={props.style.discountPrice}>
					{props.item.discountPrice}
				</Text>
			) : null}
			<Text
				style={[
					props.style.price,
					props.item.discount ? props.style.priceLineThrough : null
				]}
			>
				{props.item.price}
			</Text>
			{props.item.discount ? (
				<LinearGradient
					style={props.style.dealContainer}
					start={[0, 1]}
					end={[1, 1]}
					colors={["#FF3434", "#FF8B00"]}
				>
					<Text style={props.style.deal}>Assured Deal</Text>
				</LinearGradient>
			) : null}
		</View>
	</React.Fragment>
);

export default generalInfo;
