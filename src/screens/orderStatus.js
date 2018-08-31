import React from "react";
import { View } from "react-native";

const header = props => {
	return (
		<View style={props.style.successContainer}>
			<View style={props.style.progressFirstCircle}>
				<View style={props.style.progressSecondCircle}>
					<View style={props.style.progressThirdCircle} />
				</View>
			</View>
		</View>
	);
};

export default header;
