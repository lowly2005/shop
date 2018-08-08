import React, { Component } from "react";
import { Text, TouchableOpacity, View, Modal, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const items = [
	{
		id: 0,
		name: "Laptops"
	},
	{
		id: 1,
		name: "Lifestyle"
	},
	{
		id: 2,
		name: "Footwear"
	},
	{
		id: 3,
		name: "Books"
	},
	{
		id: 4,
		name: "Mobiles & Accesories"
	},
	{
		id: 5,
		name: "Gaming"
	},
	{
		id: 6,
		name: "Fitness"
	},
	{
		id: 7,
		name: "Groceries"
	},
	{
		id: 8,
		name: "Furnitures"
	},
	{
		id: 9,
		name: "Appliances"
	},
	{
		id: 10,
		name: "Men"
	},
	{
		id: 11,
		name: "Women"
	}
];

const sub = [
	{
		id: 0,
		name: "Footwears"
	},
	{
		id: 1,
		name: "Watches"
	},
	{
		id: 2,
		name: "Perfumes"
	},
	{
		id: 3,
		name: "Mens grooming"
	},
	{
		id: 4,
		name: "Tshirts"
	},
	{
		id: 5,
		name: "Shirts"
	},
	{
		id: 6,
		name: "Pants"
	},
	{
		id: 7,
		name: "Trousers"
	},
	{
		id: 8,
		name: "Innerwears"
	},
	{
		id: 9,
		name: "Jackeys"
	},
	{
		id: 10,
		name: "Winterwear"
	},
	{
		id: 11,
		name: "Sunglasses"
	}
];

const child = [
	{
		id: 0,
		name: "Sport shoes"
	},
	{
		id: 1,
		name: "Casual shoes"
	},
	{
		id: 2,
		name: "Sandals"
	},
	{
		id: 3,
		name: "Formal shoes"
	},
	{
		id: 4,
		name: "Sneakers"
	},
	{
		id: 5,
		name: "Boots"
	},
	{
		id: 6,
		name: "Loaders"
	},
	{
		id: 7,
		name: "Flip - flops"
	},
	{
		id: 8,
		name: "Running shoes"
	}
];

class CategoryModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "Choose category",
			parendId: null,
			list: items
		};
	}

	selectCategory = item =>
		this.state.parendId === null
			? this.setState({ title: item.name, parendId: item.id, list: sub })
			: this.setState({
					parendId: item.id,
					list: child,
					title: item.name
			  });

	closeModal = () =>
		this.state.parendId === null
			? this.props.onCloseCategoryModal()
			: this.setState({
					parendId: null,
					title: "Choose category",
					list: items
			  });

	render() {
		const { title, list } = this.state;
		const { style, status, onCloseCategoryModal } = this.props;
		return (
			<Modal animationType="slide" transparent={false} visible={status}>
				<View style={style.modal}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 20
						}}
					>
						<Text style={style.modalTitle}>{title}</Text>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => this.closeModal()}
						>
							<Ionicons name="md-close" size={28} color={"#999"} />
						</TouchableOpacity>
					</View>
					<ScrollView>
						{list.map(item => (
							<TouchableOpacity
								style={style.modalItems}
								key={item.id}
								activeOpacity={0.7}
								onPress={() => this.selectCategory(item)}
							>
								<Text style={style.modalItemsText}>{item.name}</Text>
							</TouchableOpacity>
						))}
					</ScrollView>
					<TouchableOpacity
						activeOpacity={0.7}
						style={style.searchBtn}
						onPress={() => onCloseCategoryModal()}
					>
						<Text style={style.searchBtnText}>Search items</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		);
	}
}

export default CategoryModal;
