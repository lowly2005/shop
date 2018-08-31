import React, { Component } from "react";
import {
	View,
	ScrollView,
	Text,
	Modal,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
	Keyboard,
	Animated
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Submit from "../../components/product/button";
import {
	addressModalStyle,
	PLACEHOLDER_COLOR,
	submitStyle
} from "../../styles/main";

export default class componentName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSubmited: false,
			number: "",
			street: "",
			area: "",
			landMark: "",
			pinCode: "",
			phoneNumber: "",
			submitAnim: new Animated.Value(0)
		};
		this._keyboardDidShow = this._keyboardDidShow.bind(this);
		this._keyboardDidHide = this._keyboardDidHide.bind(this);
	}

	componentDidMount() {
		this.keyboardDidShowListener = Keyboard.addListener(
			"keyboardWillShow",
			this._keyboardDidShow
		);
		this.keyboardDidHideListener = Keyboard.addListener(
			"keyboardWillHide",
			this._keyboardDidHide
		);
	}

	componentWillUnmount() {
		this.keyboardDidShowListener.remove();
		this.keyboardDidHideListener.remove();
	}

	_keyboardDidShow(e) {
		Animated.timing(this.state.submitAnim, {
			toValue: e.endCoordinates.height - 5,
			duration: e.duration
		}).start();
	}

	_keyboardDidHide(e) {
		Animated.timing(this.state.submitAnim, {
			toValue: 0,
			duration: e.duration
		}).start();
	}

	handleFocus = input => this.setState({ [input]: true });

	handleBlur = input => this.setState({ [input]: false });

	validatePinCode = value => {
		let reg = new RegExp(/^([0-9]{6}|[0-9]{3}\s[0-9]{3})$/);
		return reg.test(value);
	};

	save = () => this.setState({ isSubmited: true });

	render() {
		const {
			isSubmited,
			number,
			street,
			area,
			landMark,
			pinCode,
			phoneNumber,
			submitAnim
		} = this.state;
		const { status, title } = this.props;
		return (
			<Modal animationType="slide" transparent={false} visible={status}>
				<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
					<View style={addressModalStyle.container}>
						<View style={addressModalStyle.navigation}>
							<TouchableOpacity
								activeOpacity={0.8}
								onPress={() => this.props.onClose()}
								style={{ flexDirection: "row-reverse" }}
							>
								<Text style={addressModalStyle.navigationTitle}>{title}</Text>
								<Ionicons
									name={"ios-arrow-back-outline"}
									size={22}
									color={"#999"}
								/>
							</TouchableOpacity>
						</View>
						<ScrollView style={{ marginTop: 30 }}>
							<TextInput
								autoCorrect={false}
								autoCapitalize={"none"}
								onFocus={() => this.handleFocus("inputOne")}
								onBlur={() => this.handleBlur("inputOne")}
								onChangeText={value => this.setState({ number: value })}
								value={number}
								maxLength={10}
								placeholder={"Flat Number/House Number *"}
								keyboardType={"number-pad"}
								style={[
									addressModalStyle.input,
									number === "" && isSubmited
										? addressModalStyle.inputError
										: null,
									this.state.inputOne ? addressModalStyle.inputActive : null
								]}
								placeholderTextColor={PLACEHOLDER_COLOR}
							/>
							<TextInput
								autoCorrect={false}
								autoCapitalize={"none"}
								onFocus={() => this.handleFocus("inputTwo")}
								onBlur={() => this.handleBlur("inputTwo")}
								onChangeText={value => this.setState({ street: value })}
								value={street}
								maxLength={50}
								placeholder={"Street *"}
								style={[
									addressModalStyle.input,
									street === "" && isSubmited
										? addressModalStyle.inputError
										: null,
									this.state.inputTwo ? addressModalStyle.inputActive : null
								]}
								placeholderTextColor={PLACEHOLDER_COLOR}
							/>
							<TextInput
								autoCorrect={false}
								autoCapitalize={"none"}
								onFocus={() => this.handleFocus("inputFour")}
								onBlur={() => this.handleBlur("inputFour")}
								onChangeText={value => this.setState({ area: value })}
								value={area}
								maxLength={50}
								placeholder={"Area"}
								style={[
									addressModalStyle.input,
									area === "" && isSubmited
										? addressModalStyle.inputError
										: null,
									this.state.inputFour ? addressModalStyle.inputActive : null
								]}
								placeholderTextColor={PLACEHOLDER_COLOR}
							/>
							<TextInput
								autoCorrect={false}
								autoCapitalize={"none"}
								onFocus={() => this.handleFocus("inputFive")}
								onBlur={() => this.handleBlur("inputFive")}
								onChangeText={value => this.setState({ landMark: value })}
								value={landMark}
								maxLength={50}
								placeholder={"Landmark"}
								style={[
									addressModalStyle.input,
									landMark === "" && isSubmited
										? addressModalStyle.inputError
										: null,
									this.state.inputFive ? addressModalStyle.inputActive : null
								]}
								placeholderTextColor={PLACEHOLDER_COLOR}
							/>
							<TextInput
								autoCorrect={false}
								autoCapitalize={"none"}
								onFocus={() => this.handleFocus("inputSix")}
								onBlur={() => this.handleBlur("inputSix")}
								onChangeText={value => this.setState({ pinCode: value })}
								value={pinCode}
								maxLength={50}
								keyboardType={"number-pad"}
								placeholder={"pin Code*"}
								style={[
									addressModalStyle.input,
									this.validatePinCode(pinCode) && isSubmited
										? addressModalStyle.inputError
										: null,
									this.state.inputSix ? addressModalStyle.inputActive : null
								]}
								placeholderTextColor={PLACEHOLDER_COLOR}
							/>
							<TextInput
								autoCorrect={false}
								autoCapitalize={"none"}
								onFocus={() => this.handleFocus("inputSeven")}
								onBlur={() => this.handleBlur("inputSeven")}
								onChangeText={value => this.setState({ phoneNumber: value })}
								value={phoneNumber}
								maxLength={50}
								placeholder={"Phone number *"}
								keyboardType={"number-pad"}
								style={[
									addressModalStyle.input,
									phoneNumber === "" && isSubmited
										? addressModalStyle.inputError
										: null,
									this.state.inputSeven ? addressModalStyle.inputActive : null
								]}
								placeholderTextColor={PLACEHOLDER_COLOR}
							/>
						</ScrollView>
					</View>
					<Animated.View
						style={[
							addressModalStyle.submitWhenKeyboardIsActive,
							{ bottom: submitAnim }
						]}
					>
						<Submit
							style={submitStyle}
							text={"Save"}
							onClick={() => this.save()}
						/>
					</Animated.View>
				</KeyboardAvoidingView>
			</Modal>
		);
	}
}
