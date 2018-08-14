import React, { Component } from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
	Dimensions,
	TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

class Carousel extends Component {
	constructor() {
		super();
		this.state = { page: 1 };
	}

	handlePageChange = e => {
		let offset = e.nativeEvent.contentOffset;
		if (offset) {
			let page = Math.round(offset.x / screenWidth) + 1;
			if (this.state.page != page) {
				console.log(page);
				this.setState({ page: page });
			}
		}
	};

	render() {
		const { page } = this.state;
		const {
			style,
			list,
			favorite,
			onChangeFavoriteStatus,
			navigation
		} = this.props;
		return (
			<View style={{ position: "relative" }}>
				<View style={style.navbar}>
					<TouchableOpacity
						style={{ flexDirection: "row", alignItems: "center" }}
						activeOpacity={0.7}
						onPress={() => navigation.goBack()}
					>
						<Ionicons
							name={"ios-arrow-back-outline"}
							size={22}
							color={"#999"}
						/>
						<Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 10 }}>
							Product details
						</Text>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.7}>
						{favorite ? (
							<Ionicons
								style={style.favorite}
								name={"md-heart"}
								size={22}
								color={"#FF0101"}
								onPress={() => onChangeFavoriteStatus()}
							/>
						) : (
							<Ionicons
								style={style.favorite}
								name={"md-heart-outline"}
								size={22}
								color={"#222"}
								onPress={() => onChangeFavoriteStatus()}
							/>
						)}
					</TouchableOpacity>
				</View>
				<ScrollView
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={style.slider}
					onMomentumScrollEnd={this.handlePageChange}
				>
					{list.map(item => (
						<View
							style={[{ width: screenWidth }, style.sliderItems]}
							key={item.id}
						>
							<Image
								resizeMode={"contain"}
								style={style.sliderImage}
								source={item.image}
							/>
						</View>
					))}
				</ScrollView>
				<View style={style.sliderIndicatorContainer}>
					{list.map(item => (
						<View
							key={item.id}
							style={[
								style.sliderIndicator,
								{ backgroundColor: item.id + 1 === page ? "#555" : "#ddd" }
							]}
						/>
					))}
				</View>
			</View>
		);
	}
}

export default Carousel;
