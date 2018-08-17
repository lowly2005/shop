import React from "react";
import { View } from "react-native";

const header = props => {
	const calculateWidth = stage => {
		switch (stage) {
			case 0:
				return "22%";
			case 1:
				return "50%";
			case 2:
				return "85%";
			default:
				return "0%";
		}
	};

	return (
		<View
			style={[
				props.style.progressContainer,
				{ width: calculateWidth(props.stage) }
			]}
		>
			<View style={props.style.progressFirstCircle}>
				<View style={props.style.progressSecondCircle}>
					<View style={props.style.progressThirdCircle} />
				</View>
			</View>
		</View>
	);
};

export default header;
