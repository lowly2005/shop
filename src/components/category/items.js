import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const items = props => (
	<View style={{ flex: 1, padding: 5 }}>
		<TouchableOpacity activeOpacity={0.7} style={props.style.cardContainer}>
			{props.item.deal ? (
				<View style={props.style.dealContainer}>
					<Text style={props.style.cardDeal}>Deal</Text>
				</View>
			) : null}
			{props.item.favorite ? (
				<Ionicons
					style={props.style.favorite}
					name={"md-heart"}
					size={22}
					color={"#FF0101"}
					onPress={() => props.onRemoveFromFavorite(props.item.id)}
				/>
			) : (
				<Ionicons
					style={props.style.favorite}
					name={"md-heart-outline"}
					size={22}
					color={"#222"}
					onPress={() => props.onAddToFavorite(props.item.id)}
				/>
			)}
			<View style={props.style.cardImageContainer}>
				<Image
					resizeMode="center"
					style={props.style.cardImage}
					source={props.item.img}
				/>
			</View>
			<View style={{ flexDirection: "row", marginTop: 10 }}>
				<Text style={props.style.cardDiscountPrice}>
					{props.item.discountPrice}
				</Text>
				<Text
					style={[
						props.style.cardPrice,
						props.discount ? props.style.cardPriceWithLine : null
					]}
				>
					{props.item.price}
				</Text>
			</View>
			<Text style={props.style.cardTitle}>{props.item.title}</Text>
		</TouchableOpacity>
	</View>
);

export default items;
