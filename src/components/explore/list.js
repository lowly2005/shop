import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const list = props => (
	<View style={props.style.listContainer}>
		<View style={props.style.listHeaderContainer}>
			<Text style={props.style.listTitle}>{props.title}</Text>
			<TouchableOpacity
				activeOpacity={0.5}
				style={props.style.listButtonContainer}
			>
				<Text style={props.style.listButton}>{props.button}</Text>
				<MaterialIcons
					style={props.style.listButtonIcon}
					name="keyboard-arrow-right"
					size={22}
					color="#FF0101"
				/>
			</TouchableOpacity>
		</View>
		<ScrollView
			style={{ marginBottom: 20 }}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
		>
			<View style={props.style.itemContainer}>
				<View style={props.style.itemImageContainer}>
					<Image
						style={props.style.itemImage}
						resizeMode={"contain"}
						source={require("../../assets/images/explore_item1.png")}
					/>
				</View>
				<Text style={props.style.itemTitle}>Motorola Pulse Max W</Text>
			</View>
			<View style={props.style.itemContainer}>
				<View style={props.style.itemImageContainer}>
					<Image
						style={props.style.itemImage}
						resizeMode={"contain"}
						source={require("../../assets/images/explore_item2.jpg")}
					/>
				</View>
				<Text style={props.style.itemTitle}>Skullcandy S5LHZ-J57</Text>
			</View>
			<View style={props.style.itemContainer}>
				<View style={props.style.itemImageContainer}>
					<Image
						style={props.style.itemImage}
						resizeMode={"contain"}
						source={require("../../assets/images/explore_item3.png")}
					/>
				</View>
				<Text style={props.style.itemTitle}>Beoplay H9i</Text>
			</View>
			<View style={props.style.itemContainer}>
				<View style={props.style.itemImageContainer}>
					<Image
						style={props.style.itemImage}
						resizeMode={"contain"}
						source={require("../../assets/images/explore_item4.jpg")}
					/>
				</View>
				<Text style={props.style.itemTitle}>Sony MDR-ZX330BT</Text>
			</View>
		</ScrollView>
	</View>
);

export default list;
