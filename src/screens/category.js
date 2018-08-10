import React, { Component } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	FlatList
} from "react-native";

import {
	searchStyle,
	navbarStyle,
	categoryStyle,
	PRIMARY_COLOR
} from "../styles/main";
import Navbar from "../components/general/navbar";
import Items from "../components/category/items";
import CategoryList from "../components/category/list";
import FilterList from "../components/category/filter";
import Search from "../components/general/search";
import { Entypo, Ionicons } from "@expo/vector-icons";

export default class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryItems: [
				{
					id: 0,
					title: "Converse Chuck Taylor All Star Low Top",
					price: "$50.00",
					discountPrice: null,
					img: require("../assets/images/category_item1.png"),
					deal: true,
					discount: false,
					discountValue: null,
					favorite: false
				},
				{
					id: 1,
					title: "Converse Chuck 70 Summer League High Top",
					price: "$59.00",
					discountPrice: null,
					img: require("../assets/images/category_item2.png"),
					deal: false,
					discount: false,
					discountValue: null,
					favorite: false
				},
				{
					id: 2,
					title: "Converse Chuck Taylor All Star Leather Low Top",
					price: "$65.00",
					discountPrice: null,
					img: require("../assets/images/category_item3.png"),
					deal: false,
					discount: false,
					discountValue: null,
					favorite: false
				},
				{
					id: 3,
					title: "Converse Chuck Taylor All Star Seasonal",
					price: "$60.00",
					discountPrice: "$47.97",
					img: require("../assets/images/category_item4.png"),
					deal: false,
					discount: true,
					discountValue: "30% off",
					favorite: false
				},
				{
					id: 4,
					title: "Converse Chuck Taylor All Star Low Top",
					price: "$50.00",
					discountPrice: null,
					img: require("../assets/images/category_item1.png"),
					deal: true,
					discount: false,
					discountValue: null,
					favorite: false
				},
				{
					id: 5,
					title: "Converse Chuck 70 Summer League High Top",
					price: "$59.00",
					discountPrice: null,
					img: require("../assets/images/category_item2.png"),
					deal: false,
					discount: false,
					discountValue: null,
					favorite: false
				},
				{
					id: 6,
					title: "Converse Chuck Taylor All Star Leather Low Top",
					price: "$65.00",
					discountPrice: null,
					img: require("../assets/images/category_item3.png"),
					deal: false,
					discount: false,
					discountValue: null,
					favorite: false
				},
				{
					id: 7,
					title: "Converse Chuck Taylor All Star Seasonal",
					price: "$60.00",
					discountPrice: "$47.97",
					img: require("../assets/images/category_item4.png"),
					deal: false,
					discount: true,
					discountValue: "30% off",
					favorite: false
				}
			],
			categoryModalStatus: false,
			filterModalStatus: false,
			searchModalStatus: false
		};
	}

	keyExtractor = item => item.id;

	formatData = (data, numColumns) => {
		const numberOfFullRows = Math.floor(data.length / numColumns);

		let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
		while (
			numberOfElementsLastRow !== numColumns &&
			numberOfElementsLastRow !== 0
		) {
			data.push({
				title: null,
				price: null,
				discountPrice: null,
				favorite: false,
				img: null,
				deal: false,
				discount: false,
				discountValue: null,
				empty: true
			});
			numberOfElementsLastRow++;
		}

		return data;
	};

	addToFavorite = id => {
		let item = this.state.categoryItems.find(el => el.id === id);
		item.favorite = true;
		this.setState({
			categoryItems: [...this.state.categoryItems]
		});
	};

	removeFromFavorite = id => {
		let item = this.state.categoryItems.find(el => el.id === id);
		item.favorite = false;
		this.setState({
			categoryItems: [...this.state.categoryItems]
		});
	};

	renderItem = ({ item }) => {
		if (item.empty === true) {
			return (
				<View
					style={[categoryStyle.cardContainer, categoryStyle.itemInvisible]}
				/>
			);
		}
		return (
			<Items
				key={item.id}
				style={categoryStyle}
				item={item}
				onRemoveFromFavorite={this.removeFromFavorite}
				onAddToFavorite={this.addToFavorite}
			/>
		);
	};

	closeCategoryModal = () => this.setState({ categoryModalStatus: false });

	closeFilterModal = () => this.setState({ filterModalStatus: false });

	closeSearchModal = () => this.setState({ searchModalStatus: false });

	render() {
		const {
			categoryItems,
			categoryModalStatus,
			filterModalStatus,
			searchModalStatus
		} = this.state;
		return (
			<React.Fragment>
				<CategoryList
					style={categoryStyle}
					status={categoryModalStatus}
					onCloseCategoryModal={this.closeCategoryModal}
				/>
				<FilterList
					style={categoryStyle}
					color={PRIMARY_COLOR}
					status={filterModalStatus}
					onCloseFilterModal={this.closeFilterModal}
				/>
				<Search
					style={searchStyle}
					status={searchModalStatus}
					onCloseSearchModal={this.closeSearchModal}
				/>
				<View style={categoryStyle.container}>
					<Navbar
						style={navbarStyle}
						left={
							<View style={{ alignItems: "center", flexDirection: "row" }}>
								<Ionicons
									style={{ marginRight: 26, paddingHorizontal: 10 }}
									name={"ios-options"}
									size={20}
									color={PRIMARY_COLOR}
									onPress={() => this.setState({ filterModalStatus: true })}
								/>
								<Ionicons
									name={"ios-search"}
									size={26}
									color={"#222"}
									onPress={() => this.setState({ searchModalStatus: true })}
								/>
							</View>
						}
						title={
							<TouchableOpacity
								activeOpacity={0.7}
								style={{
									alignItems: "center",
									flexDirection: "row"
								}}
								onPress={() => this.setState({ categoryModalStatus: true })}
							>
								<Text style={categoryStyle.navbarTitle}>Category</Text>
								<Entypo name={"chevron-small-down"} size={26} color={"#222"} />
							</TouchableOpacity>
						}
						right={
							<React.Fragment>
								<Ionicons
									onPress={() => this.props.navigation.goBack()}
									name={"ios-arrow-back-outline"}
									size={22}
									color={"#999"}
								/>
							</React.Fragment>
						}
						navigation={this.props.navigation}
					/>
					<ScrollView style={{ padding: 5 }}>
						<FlatList
							data={this.formatData(categoryItems, 2)}
							renderItem={this.renderItem}
							keyExtractor={this.keyExtractor}
							numColumns={2}
						/>
					</ScrollView>
				</View>
			</React.Fragment>
		);
	}
}
