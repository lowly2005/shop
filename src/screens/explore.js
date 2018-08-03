import React from "react";
import { View, ScrollView } from "react-native";

import Header from "../components/explore/header";
import Offer from "../components/explore/offer";
import List from "../components/explore/list";
import Banner from "../components/explore/banner";
import { styles } from "../styles/explore";

export default class Explore extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "Shayan"
		};
	}

	render() {
		const { firstName } = this.state;
		return (
			<View style={styles.container}>
				<Header style={styles} name={firstName} />
				<ScrollView>
					<Offer
						style={styles}
						title={"50% off on sunglasses"}
						button={"Discover sunglasses"}
					/>
					<List style={styles} title={"HeadPhones"} button={"Explore"} />
					<Banner
						style={styles}
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
