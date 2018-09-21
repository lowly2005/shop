import React, { Component } from "react";
import { View, Image, ScrollView, Dimensions } from "react-native";

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
		const { style, list } = this.props;
		return (
			<View style={style.carouselContainer}>
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
