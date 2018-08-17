import React, { Component } from "react";
import { ScrollView } from "react-native";

import Header from "../../components/review/header";
import List from "../../components/review/list";
import Submit from "../../components/product/button";
import { reviewStyle, submitStyle } from "../../styles/main";

export default class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{
					id: 0,
					img: require("../../assets/images/review_user1.png"),
					title: "Nothing but looks.",
					rate: 2,
					description:
						"And it's lighter than any m4/3 camera! If these trends continue, I'll have to swap systems, despite my feelings for oly and appreciaction of pana lenses.",
					date: "Today at 2:13 pm"
				},
				{
					id: 1,
					img: require("../../assets/images/review_user1.png"),
					title: "beats by dre studio",
					rate: 3,
					description:
						"I'm hoping the viewfinder won't let dust in like most other SQ-series.",
					date: "Today at 2:13 pm"
				},
				{
					id: 2,
					img: require("../../assets/images/review_user1.png"),
					title: "Please think thousand times before buying this product",
					rate: 4,
					description:
						"Professional SLR camera the Canon EF\nmount no lens included view your orde",
					date: "Today at 2:13 pm"
				},
				{
					id: 3,
					img: require("../../assets/images/review_user1.png"),
					title: "False and wrong description",
					rate: 2,
					description:
						"And it's lighter than any m4/3 camera! If these trends continue, I'll have to swap systems, despite my feelings for oly and appreciaction of pana lenses.",
					date: "Today at 2:13 pm"
				},
				{
					id: 4,
					img: require("../../assets/images/review_user1.png"),
					title: "Highly reccommended",
					rate: 4,
					description:
						"On time and great product, it is as described .\n Converse changed their logo to the other side of the shoe as visible \n on the picture \nin the inside of the shoe , which has its purpose for many artist to \nbe able to drawn or sketch or paint on it",
					date: "Today at 2:13 pm"
				},
				{
					id: 5,
					img: require("../../assets/images/review_user1.png"),
					title: "Lorem ipsum",
					rate: 1,
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
					date: "Today at 2:13 pm"
				}
			]
		};
	}

	changeFavoriteStatus = () =>
		this.setState({ favorite: !this.state.favorite });

	render() {
		const { list } = this.state;
		return (
			<React.Fragment>
				<Header
					title={"5 Reviews"}
					style={reviewStyle}
					navigation={this.props.navigation}
				/>
				<ScrollView
					style={{ backgroundColor: "#fff" }}
					contentContainerStyle={reviewStyle.container}
				>
					{list.map(item => (
						<List style={reviewStyle} items={item} key={item.id} />
					))}
				</ScrollView>
				<Submit
					onClick={() => this.props.navigation.navigate("AddReview")}
					style={submitStyle}
					text={"Write a review"}
				/>
			</React.Fragment>
		);
	}
}
