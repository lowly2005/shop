import React from "react";
import {
	ScrollView,
	View,
	Image,
	Text,
	TouchableOpacity,
	TextInput
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { PLACEHOLDER_COLOR } from "../../styles/main";

const convertPrice = x => {
	return `$${Number.parseFloat(x).toFixed(2)}`;
};

const calculateTotalPrice = items => {
	let total = 0;
	items.map(item => (total += item.totalPrice));
	return `$${Number.parseFloat(total).toFixed(2)}`;
};

const validateVoucher = value => {
	alert("Your voucher code is expired or not validate, Please try agian.");
};

const checkout = props => (
	<ScrollView contentContainerStyle={{ flex: 1 }}>
		<View style={props.style.checkoutTitleContainer}>
			<Text style={props.style.checkoutTitle}>Sum up of your order</Text>
		</View>
		<Image source={require("../../assets/images/dotted.png")} />
		{props.items.map((item, index) => (
			<View
				style={[
					props.style.cartItemContainer,
					{ borderBottomWidth: index + 1 !== props.items.length ? 1 : 0 }
				]}
				key={item.id}
			>
				<Image
					style={props.style.cartItemImage}
					resizeMode="contain"
					source={item.img}
				/>
				<View style={props.style.cardInfoContainer}>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<Text style={props.style.cardItemTitle}>{item.title}</Text>
						<FontAwesome
							style={props.style.cardItemIcon}
							name="trash-o"
							size={20}
							color={"#bbb"}
							onPress={() => props.onRemoveItem(item.id)}
						/>
					</View>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<View style={props.style.cardCountContainer}>
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => props.onIncreaseCount(item.id)}
								style={[
									props.style.cardCountBtn,
									{
										borderLeftColor: "#BABABA",
										borderLeftWidth: 1,
										borderTopLeftRadius: 4,
										borderBottomLeftRadius: 4
									}
								]}
							>
								<Feather name="plus" size={14} color={"#555"} />
							</TouchableOpacity>
							<View style={props.style.cardCountText}>
								<Text style={{ fontSize: 12 }}>{item.count}</Text>
							</View>
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => props.onDecreaseItem(item.id)}
								style={[
									props.style.cardCountBtn,
									{
										borderRightColor: "#BABABA",
										borderRightWidth: 1,
										borderTopRightRadius: 4,
										borderBottomRightRadius: 4
									}
								]}
							>
								<Feather name="minus" size={14} color={"#555"} />
							</TouchableOpacity>
						</View>
						<Text style={props.style.cardItemPrice}>
							{convertPrice(item.totalPrice)}
						</Text>
					</View>
				</View>
			</View>
		))}
		<Image source={require("../../assets/images/dotted.png")} />
		<View style={[props.style.checkoutInforamtion, { marginTop: 15 }]}>
			<Text style={props.style.cardInfoTitle}>
				Total Price(
				{props.items.length} Items)
			</Text>
			<Text style={props.style.cardItemPrice}>
				{calculateTotalPrice(props.items)}
			</Text>
		</View>
		<View style={props.style.checkoutInforamtion}>
			<Text style={props.style.cardInfoTitle}>Delivery</Text>
			<Text style={props.style.cardDelivery}>
				{props.delivery === 0 ? "Free" : convertPrice(props.delivery)}
			</Text>
		</View>
		<View style={[props.style.checkoutInforamtion, { marginTop: 15 }]}>
			<TextInput
				ref={ref => (this.input = ref)}
				autoCorrect={false}
				autoCapitalize={"none"}
				maxLength={100}
				placeholder={"Enter voucher code"}
				onChangeText={value => props.onUpdateVoucher(value)}
				style={props.style.couponInput}
				defaultValue={props.voucher}
				placeholderTextColor={PLACEHOLDER_COLOR}
			/>
			<TouchableOpacity
				activeOpacity={0.8}
				style={props.style.coupunBtnContainer}
				onPress={() => validateVoucher(props.voucher)}
			>
				<Text style={props.style.coupunBtn}>Apply coupon</Text>
			</TouchableOpacity>
		</View>
	</ScrollView>
);

export default checkout;
