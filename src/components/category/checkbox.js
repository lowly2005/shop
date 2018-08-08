import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Circle = props => {
	return props.value ? (
		<MaterialCommunityIcons name="check-circle" size={28} color={"#43B55B"} />
	) : (
		<MaterialCommunityIcons name="circle-outline" size={28} color={"#999"} />
	);
};

const Square = props => {
	return props.value ? (
		<MaterialCommunityIcons
			name="checkbox-marked"
			size={28}
			color={"#43B55B"}
		/>
	) : (
		<MaterialCommunityIcons
			name="checkbox-blank-outline"
			size={28}
			color={"#999"}
		/>
	);
};

const Checkbox = props => (
	<TouchableOpacity
		activeOpacity={1}
		style={{
			alignItems: "center",
			justifyContent: "space-between",
			flexDirection: "row",
			marginVertical: 10
		}}
		onPress={() => props.onCheck(props.item.id, props.item.value)}
	>
		<Text style={{ fontSize: 16, fontWeight: "600" }}>{props.item.name}</Text>
		<View>
			{props.square ? (
				<Square value={props.item.value} />
			) : (
				<Circle value={props.item.value} />
			)}
		</View>
	</TouchableOpacity>
);

export default Checkbox;
