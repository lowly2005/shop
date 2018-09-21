import React, { Component } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window");

export default class CrediCards extends Component {
	constructor(props) {
		super();
		this.state = {
			items: []
		};
	}

	componentDidMount() {
		this.setState({ items: this.props.items });
	}

	componentDidUpdate(prevProps) {
		if (this.props.items !== prevProps.items)
			this.setState({ items: this.props.items });
	}

	activeCard = item => {
		let result = this.state.items;
		result.forEach(el => {
			el.active = true;
		});
		this.setState({ items: result });
	};

	validateCreditCardType = number => {
		if (number.charAt(0) == 3) return "American Express";

		if (number.charAt(0) == 4) return "Visa";

		if (number.charAt(0) == 5 && number.charAt(1) == 1) return "Master Card";
	};

	formatCreditNumber = number => {
		let v = number.replace(/\s+/g, "").replace(/[^0-9]/gi, ""),
			matches = v.match(/\d{4,16}/g),
			match = (matches && matches[0]) || "",
			parts = [];
		for (let i = 0, len = match.length; i < len; i += 4) {
			parts.push(match.substring(i, i + 4));
		}
		if (parts.length) {
			return parts.join("  -  ");
		} else {
			return number;
		}
	};

	_renderItem = ({ item, index }) => {
		return (
			<View style={this.props.style.slider}>
				<TouchableOpacity
					activeOpacity={0.8}
					style={this.props.style.creditCardHolder}
					onPress={() => this.activeCard(item)}
				>
					<View style={this.props.style.creditCardHeader}>
						<Text style={this.props.style.creditCardInput}>
							{this.validateCreditCardType(item.number)}
						</Text>
						<View style={{ alignItems: "center" }}>
							<Text style={this.props.style.creditCardLabel}>EXPIRY DATE</Text>
							<Text style={this.props.style.creditCardInput}>
								{item.expireDate}
							</Text>
						</View>
					</View>
					<View style={this.props.style.creditCardNumberContainer}>
						<Text style={this.props.style.creditCardLabel}>CARD NUMBER</Text>
						<Text
							style={[
								this.props.style.creditCardInput,
								{ fontSize: 18, fontWeight: "bold" }
							]}
						>
							{this.formatCreditNumber(item.number)}
						</Text>
					</View>
					<View style={this.props.style.creditCardFooter}>
						<View>
							<Text style={this.props.style.creditCardLabel}>CARD HOLDER</Text>
							<Text style={this.props.style.creditCardInput}>
								{item.holder}
							</Text>
						</View>
						<View>
							{item.active ? (
								<View style={this.props.style.creditCardActiveContainer}>
									<Text style={this.props.style.creditCardActive}>Active</Text>
								</View>
							) : null}
						</View>
					</View>
				</TouchableOpacity>
			</View>
		);
	};

	render() {
		const { items } = this.state;
		return (
			<Carousel
				ref={c => {
					this._carousel = c;
				}}
				data={items}
				renderItem={this._renderItem}
				sliderWidth={width}
				itemWidth={width - 40}
				inactiveSlideScale={1}
				activeSlideAlignment={"center"}
				contentContainerCustomStyle={this.props.style.sliderContainer}
			/>
		);
	}
}
