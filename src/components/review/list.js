import React from "react";
import { View, Text, Image } from "react-native";

const rateStatus = rate => {
	let value = Math.floor(rate);
	switch (true) {
		case 5:
			return "Excellent";
		case value >= 4:
			return "Very good";
		case value >= 3:
			return "Good";
		case value >= 2:
			return "Bad";
		case value >= 1:
			return "Awful";
		default:
			return null;
	}
};

const rateStyleStatus = rate => {
	let value = Math.floor(rate);
	switch (true) {
		case 5:
			return "#43B55B";
		case value >= 4:
			return "#43B55B";
		case value >= 3:
			return "#FF9731";
		case value >= 2:
			return "#FF0101";
		case value >= 1:
			return "#FF0101";
		default:
			return null;
	}
};

const generalInfo = props => (
	<View style={props.style.reviewContainer}>
		<View>
			<Image
				resizeMode={"cover"}
				source={props.items.img}
				style={props.style.reviewCover}
			/>
		</View>
		<View style={{ flexWrap: "wrap", flex: 1 }}>
			<View style={props.style.titleContainer}>
				<Text style={props.style.title}>{props.items.title}</Text>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center"
					}}
				>
					<View
						style={[
							props.style.rateConatiner,
							{ backgroundColor: rateStyleStatus(props.items.rate) }
						]}
					>
						<Text style={props.style.rate}>{props.items.rate}</Text>
					</View>
					<Text style={props.style.rateText}>
						{rateStatus(props.items.rate)}
					</Text>
				</View>
			</View>
			<Text style={props.style.description}>{props.items.description}</Text>
			<Text style={props.style.date}>{props.items.date}</Text>
		</View>
	</View>
);
export default generalInfo;
