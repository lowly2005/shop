import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles, Theme } from "../../styles/auth";

export default class ForgotPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			isSubmited: false,
			inputOneFocus: false
		};
	}

	handleFocus = input => this.setState({ [input]: true });

	handleBlur = input => this.setState({ [input]: false });

	validateEmail = value => {
		let reg = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
		return reg.test(value);
	};

	submit = () => this.setState({ isSubmited: true });

	render() {
		const { email, isSubmited } = this.state;
		const { PLACEHOLDER_COLOR } = Theme.Auth;
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Image
						style={styles.logo}
						source={require("../../assets/images/logo.png")}
					/>
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={() => this.props.navigation.pop()}
					>
						<Text style={styles.navigation}>Sign in</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.title}>Forgot Password,</Text>
				<Text style={styles.description}>Enter your email</Text>
				<View style={styles.form}>
					<View style={styles.inputHolder}>
						<Feather
							style={styles.icon}
							name="mail"
							size={20}
							color={this.state.inputTwoFocus ? "#BDC3C7" : "#ddd"}
						/>
						<TextInput
							autoCorrect={false}
							autoCapitalize={"none"}
							onFocus={() => this.handleFocus("inputTwoFocus")}
							onBlur={() => this.handleBlur("inputTwoFocus")}
							onChangeText={value => this.setState({ email: value })}
							keyboardType={"email-address"}
							maxLength={200}
							placeholder={"Email"}
							style={[
								styles.input,
								!this.validateEmail(email) && isSubmited
									? styles.inputError
									: null,
								this.state.inputTwoFocus ? styles.inputActive : null
							]}
							placeholderTextColor={PLACEHOLDER_COLOR}
						/>
					</View>
				</View>
				<TouchableOpacity
					onPress={this.submit}
					activeOpacity={0.6}
					style={styles.submit}
				>
					<Text style={styles.submitBtn}>Send</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
