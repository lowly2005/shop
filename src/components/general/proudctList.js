import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { NavigationActions } from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";

const list = props => (
	<View style={props.style.listContainer}>
		<View style={props.style.listHeaderContainer}>
			<Text style={props.style.listTitle}>{props.title}</Text>
			<TouchableOpacity
				activeOpacity={0.5}
				style={props.style.listButtonContainer}
			>
				{props.button ? (
					<React.Fragment>
						<Text style={props.style.listButton}>{props.button}</Text>
						<MaterialIcons
							style={props.style.listButtonIcon}
							name="keyboard-arrow-right"
							size={22}
							color="#FF0101"
						/>
					</React.Fragment>
				) : null}
			</TouchableOpacity>
		</View>
		<ScrollView
			style={{ marginBottom: 20 }}
			horizontal={true}
			showsHorizontalScrollIndicator={false}
		>
			{props.list.map(item => (
				<TouchableOpacity
					activeOpacity={0.8}
					style={props.style.itemContainer}
					key={item.id}
					onPress={() =>
						props.navigation.dispatch(
							NavigationActions.navigate({
								routeName: "ProductStackNavigation"
							})
						)
					}
				>
					<View style={props.style.itemImageContainer}>
						<Image
							style={props.style.itemImage}
							resizeMode={"contain"}
							source={item.img}
						/>
					</View>
					<Text style={props.style.itemTitle}>{item.title}</Text>
				</TouchableOpacity>
			))}
		</ScrollView>
	</View>
);

export default list;
