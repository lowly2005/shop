import React from "react";
import { View, Text } from "react-native";

const generalInfo = props => (
	<View style={props.style.specifications}>
		<Text style={props.style.specificationsTitle}>Specifications</Text>
		{props.items.map(item => (
			<View style={props.style.specificationsTable} key={item.id}>
				<Text style={props.style.specificationsHeader}>{item.name}</Text>
				<Text style={props.style.specificationsBody}>{item.value}</Text>
			</View>
		))}
	</View>
);

export default generalInfo;
