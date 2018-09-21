import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/loginAction";
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	Keyboard,
	Animated
} from "react-native";
import {
	Feather,
	MaterialIcons,
	MaterialCommunityIcons
} from "@expo/vector-icons";
import { NavigationActions } from "react-navigation";

import { styles, Theme } from "../../styles/auth";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			isSubmited: false,
			inputOneFocus: false,
			fadeAnim: new Animated.Value(1),
			submitAnim: new Animated.Value(0),
			submitFadeAnim: new Animated.Value(0)
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
		Animated.sequence([
			Animated.parallel([
				Animated.timing(this.state.fadeAnim, {
					toValue: 0,
					duration: e.duration
				}),
				Animated.timing(this.state.submitAnim, {
					toValue: e.endCoordinates.height - 5,
					duration: e.duration
				}),
				Animated.timing(this.state.submitFadeAnim, {
					toValue: 1,
					duration: e.duration
				})
			])
		]).start();
	}

	_keyboardDidHide(e) {
		Animated.sequence([
			Animated.parallel([
				Animated.timing(this.state.fadeAnim, {
					toValue: 1,
					duration: e.duration
				}),
				Animated.timing(this.state.submitAnim, {
					toValue: 0,
					duration: e.duration
				}),
				Animated.timing(this.state.submitFadeAnim, {
					toValue: 0,
					duration: e.duration
				})
			])
		]).start();
	}

	handleFocus = input => this.setState({ [input]: true });

	handleBlur = input => this.setState({ [input]: false });

	validateEmail = value => {
		let reg = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
		return reg.test(value);
	};

	submit = () => {
		this.setState({ isSubmited: true });
		// this.props.navigation.dispatch(
		// 	NavigationActions.navigate({ routeName: "App" })
		// );
		this.props.loginUser({});
	};

	facebookAuth = () => {};

	instagramAuth = () => {};

	forgotPassword = () => {};

	render() {
		const {
			email,
			password,
			isSubmited,
			fadeAnim,
			submitAnim,
			submitFadeAnim
		} = this.state;
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
						onPress={() => this.props.navigation.replace("Register")}
					>
						<Text style={styles.navigation}>Sign up</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.title}>Welcome Back,</Text>
				<Text style={styles.description}>Sign in to continue</Text>
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
					<View style={styles.inputHolder}>
						<MaterialIcons
							style={styles.icon}
							name="lock-outline"
							size={20}
							color={this.state.inputThreeFocus ? "#BDC3C7" : "#ddd"}
						/>
						<TextInput
							autoCorrect={false}
							autoCapitalize={"none"}
							onFocus={() => this.handleFocus("inputThreeFocus")}
							onBlur={() => this.handleBlur("inputThreeFocus")}
							onChangeText={value => this.setState({ password: value })}
							maxLength={200}
							placeholder={"Password"}
							style={[
								styles.input,
								password === "" && isSubmited ? styles.inputError : null,
								this.state.inputThreeFocus ? styles.inputActive : null
							]}
							placeholderTextColor={PLACEHOLDER_COLOR}
							secureTextEntry
						/>
					</View>
				</View>
				<Animated.View style={[styles.keyboardShown, { opacity: fadeAnim }]}>
					<TouchableOpacity
						onPress={this.submit}
						activeOpacity={0.6}
						style={styles.submit}
					>
						<Text style={styles.submitBtn}>Sign in</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this.facebookAuth}
						activeOpacity={0.8}
						style={styles.social}
					>
						<MaterialCommunityIcons
							style={styles.socialIcon}
							name="facebook"
							size={20}
							color={"#999"}
						/>
						<Text style={styles.socialText}>Login with facebook</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this.instagramAuth}
						activeOpacity={0.8}
						style={styles.social}
					>
						<MaterialCommunityIcons
							style={styles.socialIcon}
							name="instagram"
							size={20}
							color={"#999"}
						/>
						<Text style={styles.socialText}>Login with instagram</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate("ForgotPassword")}
						activeOpacity={0.8}
						style={styles.forgotPassword}
					>
						<Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
					</TouchableOpacity>
					<View style={styles.termsHolder}>
						<Text style={styles.terms}>
							By creating account, you agree to our
						</Text>
						<TouchableOpacity style={styles.termsLink}>
							<Text style={{ color: "#222", fontWeight: "bold" }}>
								Terms & Conditions
							</Text>
						</TouchableOpacity>
					</View>
				</Animated.View>
				<Animated.View
					onPress={this.submit}
					style={[
						styles.submitWhenKeyboardIsActive,
						{ bottom: submitAnim, opacity: submitFadeAnim }
					]}
				>
					<Text style={styles.submitBtn}>Sign in</Text>
				</Animated.View>
			</View>
		);
	}
}

Login.propTypes = {
	Auth: PropTypes.shape({
		isLoading: PropTypes.bool.isRequired
	})
};

const mapStateToProps = state => ({
	Auth: state.Auth
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(Login);
