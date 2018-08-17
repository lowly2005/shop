import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";

import { searchStyle, navbarStyle, offersStyle } from "../styles/main";
import Navbar from "../components/general/navbar";
import Search from "../components/general/search";
import Items from "../components/offers/items";
import Empty from "../components/empty";
import { Ionicons } from "@expo/vector-icons";

export default class Offers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{
					id: 0,
					special: true,
					title: "Go Summer",
					description: "100% cashback",
					button: "Explore"
				},
				{
					id: 1,
					special: false,
					title: "#FoodPorn",
					description: "Win exclusive gifts",
					button: "Explore"
				}
			],
			searchModal: false
		};
	}

	closeSearchModal = () => this.setState({ searchModal: false });

	render() {
		const { list, searchModal } = this.state;
		return (
			<View style={offersStyle.container}>
				<Search
					style={searchStyle}
					status={searchModal}
					onCloseSearchModal={this.closeSearchModal}
				/>
				<Navbar
					style={navbarStyle}
					left={
						<Ionicons
							name={"ios-search"}
							size={26}
							color={"#222"}
							onPress={() => this.setState({ searchModal: true })}
						/>
					}
					right={
						<React.Fragment>
							<Text style={offersStyle.navbarBackBtnText}>Offers</Text>
							<Ionicons
								name={"ios-arrow-back-outline"}
								size={22}
								color={"#999"}
							/>
						</React.Fragment>
					}
					navigation={this.props.navigation}
				/>
				{list.length !== 0 ? (
					<ScrollView style={offersStyle.listContainer}>
						{list.map(item => (
							<Items
								key={item.id}
								title={item.title}
								description={item.description}
								special={item.special}
								button={item.button}
								style={offersStyle}
								navigation={this.props.navigation}
							/>
						))}
					</ScrollView>
				) : (
					<Empty
						title={"No Offers !"}
						description={
							"Shayan, currently we don't have any\n offers running. please visit later\n for more updates."
						}
						style={offersStyle}
					/>
				)}
			</View>
		);
	}
}
