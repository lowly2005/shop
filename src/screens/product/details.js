import React, { Component } from "react";
import { ScrollView, View } from "react-native";

import Carousel from "../../components/product/carousel";
import GeneralInfo from "../../components/product/generalInfo";
import ReviewsAndRate from "../../components/product/reviewsAndRate";
import Specifications from "../../components/product/specifications";
import ProductList from "../../components/general/proudctList";
import Submit from "../../components/product/button";

import {
	productDetailsStyle,
	exploreStyle,
	RED_COLOR
} from "../../styles/main";

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slider: [
				{
					id: 0,
					image: require("../../assets/images/product_detail1.jpeg")
				},
				{
					id: 1,
					image: require("../../assets/images/product_detail2.jpeg")
				},
				{
					id: 2,
					image: require("../../assets/images/product_detail3.jpeg")
				},
				{
					id: 3,
					image: require("../../assets/images/product_detail4.jpeg")
				}
			],
			title: "Lusie yellow\nHeadphone sport edition",
			discount: true,
			price: "$895",
			discountPrice: "$615",
			rate: 4.2,
			reviewsCount: 23,
			favorite: false,
			specifications: [
				{
					id: 0,
					name: "Model Name:",
					value: "S5LHZ-J570 Anti"
				},
				{
					id: 1,
					name: "Color:",
					value: "Grey"
				},
				{
					id: 2,
					name: "Headphone Type:",
					value: "On the Ear"
				},
				{
					id: 3,
					name: "Inline Remote:",
					value: "No"
				},
				{
					id: 4,
					name: "Sales Package:",
					value: "Headphone"
				}
			],
			list: [
				{
					id: 0,
					title: "Motorola Pulse Max Over Ear Wired Headset (Black)",
					img: require("../../assets/images/explore_item1.png")
				},
				{
					id: 1,
					title: "Skullcandy S5LHZ-J576 Anti Stereo Headphones Charcoal Black",
					img: require("../../assets/images/explore_item2.jpg")
				},
				{
					id: 2,
					title: "Auricolari Bang & Olufsen Beoplay h9i Natural",
					img: require("../../assets/images/explore_item3.png")
				},
				{
					id: 3,
					title: "Sony MDR ZX330BT On-Ear Bluetooth ",
					img: require("../../assets/images/explore_item4.jpg")
				}
			]
		};
	}

	changeFavoriteStatus = () =>
		this.setState({ favorite: !this.state.favorite });

	render() {
		const {
			slider,
			favorite,
			title,
			discountPrice,
			price,
			discount,
			rate,
			reviewsCount,
			specifications,
			list
		} = this.state;
		return (
			<React.Fragment>
				<View style={productDetailsStyle.statusBar} />
				<ScrollView contentContainerStyle={productDetailsStyle.container}>
					<Carousel
						style={productDetailsStyle}
						list={slider}
						favorite={favorite}
						navigation={this.props.navigation}
						onChangeFavoriteStatus={this.changeFavoriteStatus}
					/>
					<GeneralInfo
						style={productDetailsStyle}
						item={{ discount, discountPrice, price, title }}
					/>
					<ReviewsAndRate
						style={productDetailsStyle}
						color={RED_COLOR}
						item={{ rate, reviewsCount }}
					/>
					<Specifications style={productDetailsStyle} items={specifications} />
					<View style={productDetailsStyle.relatedProductContainer}>
						<ProductList
							style={exploreStyle}
							title={"Related products"}
							list={list}
						/>
					</View>
				</ScrollView>
				<Submit style={productDetailsStyle} text={"Add to cart"} />
			</React.Fragment>
		);
	}
}

export default Details;
