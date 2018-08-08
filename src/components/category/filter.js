import React, { Component } from "react";
import {
	Text,
	TouchableOpacity,
	View,
	Modal,
	ScrollView,
	Slider
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "./checkbox";

class FilterModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			soringObjects: [
				{
					id: 0,
					name: "Popularity",
					value: false
				},
				{
					id: 1,
					name: "Rating",
					value: false
				},
				{
					id: 2,
					name: "Price",
					value: true
				}
			],
			barndObjects: [
				{
					id: 0,
					name: "Apple",
					value: false
				},
				{
					id: 1,
					name: "Airbeats",
					value: false
				},
				{
					id: 2,
					name: "Bule birds",
					value: true
				},
				{
					id: 3,
					name: "Digital mart",
					value: false
				},
				{
					id: 4,
					name: "KBOOM",
					value: false
				},
				{
					id: 5,
					name: "Philips",
					value: false
				}
			],
			priceObjects: {
				min: 10,
				max: 999
			},
			colorObjects: [
				{
					id: 0,
					name: "Black",
					value: false
				},
				{
					id: 1,
					name: "Red",
					value: false
				},
				{
					id: 2,
					name: "Yellow",
					value: true
				},
				{
					id: 3,
					name: "Blue",
					value: false
				},
				{
					id: 4,
					name: "Grey",
					value: false
				},
				{
					id: 5,
					name: "White",
					value: false
				}
			]
		};
	}

	changeSortingStatus = (id, value) => {
		let item = this.state.soringObjects.find(el => el.id === id);
		item.value = !value;
		this.setState({
			soringObjects: [...this.state.soringObjects]
		});
	};

	changeBrandStatus = (id, value) => {
		let item = this.state.barndObjects.find(el => el.id === id);
		item.value = !value;
		this.setState({
			barndObjects: [...this.state.barndObjects]
		});
	};

	changeColorStatus = (id, value) => {
		let item = this.state.colorObjects.find(el => el.id === id);
		item.value = !value;
		this.setState({
			colorObjects: [...this.state.colorObjects]
		});
	};

	render() {
		const {
			soringObjects,
			barndObjects,
			colorObjects,
			priceObjects
		} = this.state;
		const { style, status, onCloseFilterModal } = this.props;
		return (
			<Modal animationType="slide" transparent={false} visible={status}>
				<View style={[style.modal, { paddingHorizontal: 0 }]}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 20,
							paddingHorizontal: 15
						}}
					>
						<Text style={style.modalTitle}>Filters</Text>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => onCloseFilterModal()}
						>
							<Ionicons name="md-close" size={28} color={"#999"} />
						</TouchableOpacity>
					</View>
					<ScrollView>
						<View style={style.filterSection}>
							<Text style={style.filterSectionTitle}>SORTING BY</Text>
							{soringObjects.map(item => (
								<Checkbox
									key={item.id}
									item={item}
									onCheck={this.changeSortingStatus}
								/>
							))}
						</View>
						<View style={style.filterSection}>
							<Text style={style.filterSectionTitle}>BRAND</Text>
							{barndObjects.map(item => (
								<Checkbox
									key={item.id}
									item={item}
									onCheck={this.changeBrandStatus}
									square
								/>
							))}
						</View>
						<View style={style.filterSection}>
							<Text style={style.filterSectionTitle}>PRICE</Text>
							<View style={style.sliderContainer}>
								<Text style={style.sliderLabel}>${priceObjects.min}</Text>
								<Text style={style.sliderLabel}>${priceObjects.max}</Text>
							</View>
							<Slider
								minimumTrackTintColor={this.props.color}
								minimumValue={priceObjects.min}
								maximumValue={priceObjects.max}
								step={10}
							/>
						</View>
						<View style={style.filterSection}>
							<Text style={style.filterSectionTitle}>COLOR</Text>
							{colorObjects.map(item => (
								<Checkbox
									key={item.id}
									item={item}
									onCheck={this.changeColorStatus}
								/>
							))}
						</View>
					</ScrollView>
					<TouchableOpacity
						activeOpacity={0.7}
						style={style.searchBtn}
						onPress={() => onCloseFilterModal()}
					>
						<Text style={style.searchBtnText}>Done</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		);
	}
}

export default FilterModal;
