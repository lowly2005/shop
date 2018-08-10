import React, { Component } from "react";
import { View, ScrollView } from "react-native";

import Header from "../components/explore/header";
import Offer from "../components/explore/offer";
import List from "../components/general/proudctList";
import Banner from "../components/explore/banner";
import Search from "../components/general/search";
import { exploreStyle, searchStyle } from "../styles/main";

export default class Explore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "Shayan",
			searchModal: false,
			list: [
				{
					id: 0,
					title: "Motorola Pulse Max Over Ear Wired Headset (Black)",
					img: require("../assets/images/explore_item1.png")
				},
				{
					id: 1,
					title: "Skullcandy S5LHZ-J576 Anti Stereo Headphones Charcoal Black",
					img: require("../assets/images/explore_item2.jpg")
				},
				{
					id: 2,
					title: "Auricolari Bang & Olufsen Beoplay h9i Natural",
					img: require("../assets/images/explore_item3.png")
				},
				{
					id: 3,
					title: "Sony MDR ZX330BT On-Ear Bluetooth ",
					img: require("../assets/images/explore_item4.jpg")
				}
			]
		};
	}

	closeSearchModal = () => this.setState({ searchModal: false });

	showSearchModal = () => this.setState({ searchModal: true });

	render() {
		const { firstName, searchModal, list } = this.state;
		return (
			<View style={exploreStyle.container}>
				<Search
					style={searchStyle}
					status={searchModal}
					onCloseSearchModal={this.closeSearchModal}
				/>
				<Header
					style={exploreStyle}
					name={firstName}
					onShowSearchModal={this.showSearchModal}
				/>
				<ScrollView>
					<Offer
						style={exploreStyle}
						title={"50% off on sunglasses"}
						button={"Discover sunglasses"}
					/>
					<List
						navigation={this.props.navigation}
						style={exploreStyle}
						list={list}
						title={"HeadPhones"}
						button={"Explore"}
					/>
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
