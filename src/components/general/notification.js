import React, { Component } from "react";
import { View, Text } from "react-native";

class Notifiction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: false
		};
	}

	render() {
		return (
			<View>
				<Text> textInComponent </Text>
			</View>
		);
	}
}

export default Notifiction;
