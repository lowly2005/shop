import React, { Component } from "react";
import { View, ScrollView } from "react-native";

import Header from "../components/cart/header";
import List from "../components/account/list";
import Checkout from "../components/cart/checkout";
import Empty from "../components/empty";
import Submit from "../components/product/button";
import { cartStyle, offersStyle, submitStyle } from "../styles/main";

export default class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stage: 0,
			addressItems: [
				{
					id: 0,
					fullname: "Marion	Becker",
					address: `203, Lumbini apartment,\nVenkatapura main road,\n9th cross street,\nKoramangala, Karnataka - 623505`,
					phone: "(986) 827-4830",
					default: true
				},
				{
					id: 2,
					fullname: "Carrie	Lynch",
					address: "9 Leeton Ridge Street \nCottage Grove, MN 55016",
					phone: "(438) 285-0796",
					default: false
				},
				{
					id: 3,
					fullname: "Cesar	Hunter",
					address: "775 Branch St. \nLinden, NJ 07036",
					phone: "(435) 920-0546",
					default: false
				},
				{
					id: 4,
					fullname: "Antonia	Cox",
					address: "969 Acacia Ave. \nGlastonbury, CT 06033",
					phone: "(530) 216-0270",
					default: false
				},
				{
					id: 5,
					fullname: "Emilio	Caldwell",
					address: "26 Lawrence Dr. Ronkonkoma,\n NY 11779",
					phone: "(316) 330-9169",
					default: false
				}
			],
			cartItems: [
				{
					id: 0,
					title: "Rawpockets Neck Dark Blue \nround neck tshirt",
					img: require("../assets/images/cart_item1.png"),
					count: 1,
					available: 10,
					price: 15,
					totalPrice: 15
				},
				{
					id: 1,
					title: "Converse High Ankle white \nSneakers",
					img: require("../assets/images/cart_item2.png"),
					count: 1,
					available: 3,
					price: 54,
					totalPrice: 54
				}
			],
			delivery: 0,
			voucher: null
		};
	}

	removeItem = id => {
		let list = this.state.cartItems.filter(item => item.id !== id);
		this.setState({ cartItems: list });
	};

	increaseCount = id => {
		let item = this.state.cartItems.find(el => el.id === id);
		item.available > item.count
			? (item.count++, (item.totalPrice = item.count * item.price))
			: alert("this product is out of stock");
		this.setState({ cartItems: [...this.state.cartItems] });
	};

	decreaseCount = id => {
		let item = this.state.cartItems.find(el => el.id === id);
		item.count > 1
			? (item.count--, (item.totalPrice = item.count * item.price))
			: null;
		this.setState({ cartItems: [...this.state.cartItems] });
	};

	removeAddress = id => {
		let list = this.state.addressItems.filter(item => item.id !== id);
		this.setState({ addressItems: list });
	};

	editAddress = id => {};

	updateVoucher = value => this.setState({ voucher: value });

	goToNextStep = () =>
		this.state.stage !== 2
			? this.setState({ stage: this.state.stage + 1 })
			: null;

	goToPreviousStep = () =>
		this.state.stage !== 0
			? this.setState({ stage: this.state.stage - 1 })
			: null;

	conditionalRendering = stage => {
		switch (stage) {
			case 0:
				return (
					<Checkout
						style={cartStyle}
						items={this.state.cartItems}
						delivery={this.state.delivery}
						voucher={this.state.voucher}
						onRemoveItem={this.removeItem}
						onIncreaseCount={this.increaseCount}
						onDecreaseItem={this.decreaseCount}
						onUpdateVoucher={this.updateVoucher}
					/>
				);
			case 1:
				return (
					<List
						items={this.state.addressItems}
						onEditAddress={this.editAddress}
						onRemoveAddress={this.removeAddress}
					/>
				);
			case 2:
				return <ScrollView />;
			default:
				return <ScrollView />;
		}
	};

	render() {
		const { cartItems, stage } = this.state;
		return (
			<View style={cartStyle.container}>
				{cartItems.length > 0 ? (
					<React.Fragment>
						<Header
							style={cartStyle}
							stage={stage}
							onGoToPreviousStep={this.goToPreviousStep}
						/>
						{this.conditionalRendering(stage)}
						<Submit
							onClick={() => this.goToNextStep()}
							style={submitStyle}
							text={"Submit"}
							custom={{ paddingBottom: 15, paddingTop: 15 }}
						/>
					</React.Fragment>
				) : (
					<Empty
						title={"Your cart is empty!"}
						description={
							"Shayan, seems like you didn't have add any items to your cart."
						}
						style={offersStyle}
					/>
				)}
			</View>
		);
	}
}
