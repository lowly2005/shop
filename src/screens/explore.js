import React, { Component } from "react";
import { View, ScrollView } from "react-native";

import Header from "../components/explore/header";
import Offer from "../components/explore/offer";
import List from "../components/explore/list";
import Banner from "../components/explore/banner";
import { exploreStyle } from "../styles/main";

export default class Explore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "Shayan"
		};
	}

	render() {
		const { firstName } = this.state;
		return (
			<View style={exploreStyle.container}>
				<Header style={exploreStyle} name={firstName} />
				<ScrollView>
					<Offer
						style={exploreStyle}
						title={"50% off on sunglasses"}
						button={"Discover sunglasses"}
					/>
					<List style={exploreStyle} title={"HeadPhones"} button={"Explore"} />
					<Banner
						style={exploreStyle}
						tagTitle={"sumwat"}
						title={"Summer sale"}
						description={"24 items included"}
						button={"Explore"}
						type={"Limited offer"}
					/>
				</ScrollView>
			</View>
		);
	}
}
