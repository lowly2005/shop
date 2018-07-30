import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	TextInput,
	TouchableOpacity
} from "react-native";
import {
	Octicons,
	Feather,
	MaterialIcons,
	MaterialCommunityIcons
} from "@expo/vector-icons";

export default class App extends React.Component {
	state = {
		inputOneFocus: false
	};

	handleFocus = input => this.setState({ [input]: true });

	handleBlur = input => this.setState({ [input]: false });

	submit = () => console.log("submit");

	facebookAuth = () => {};

	instagramAuth = () => {};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Image
						style={styles.logo}
						source={require("../../assets/images/logo.png")}
					/>
					<Text style={styles.navigation}>Sign in</Text>
				</View>
				<Text style={styles.title}>Welcome Back,</Text>
				<Text style={styles.description}>Sign up to continue</Text>
				<View style={styles.form}>
					<View style={styles.inputHolder}>
						<Octicons
							style={styles.icon}
							name="mention"
							size={20}
							color={this.state.inputOneFocus ? "#BDC3C7" : "#ddd"}
						/>
						<TextInput
							autoCorrect={false}
							autoCapitalize={"none"}
							onFocus={() => this.handleFocus("inputOneFocus")}
							onBlur={() => this.handleBlur("inputOneFocus")}
							maxLength={200}
							placeholder={"Username"}
							style={[
								styles.input,
								this.state.inputOneFocus ? styles.inputActive : null
							]}
							placeholderTextColor={PLACEHOLDER_COLOR}
						/>
					</View>
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
							keyboardType={"email-address"}
							maxLength={200}
							placeholder={"Email"}
							style={[
								styles.input,
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
							maxLength={200}
							placeholder={"Password"}
							style={[
								styles.input,
								this.state.inputThreeFocus ? styles.inputActive : null
							]}
							placeholderTextColor={PLACEHOLDER_COLOR}
							secureTextEntry
						/>
					</View>
				</View>
				<TouchableOpacity
					onPress={this.submit}
					activeOpacity={0.6}
					style={styles.submit}
				>
					<Text style={styles.submitBtn}>Sign up</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={this.facebookAuth}
					activeOpacity={0.9}
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
					activeOpacity={0.9}
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
			</View>
		);
	}
}

const NAVIGATION_BTN = "#43B55B",
	MAIN_COLOR = "#000",
	SECONDERY_COLOR = "#333",
	PLACEHOLDER_COLOR = "#888",
	INPUT_COLOR = "#222",
	INPUT_BORDER_COLOR_ACTIVE = "#999",
	INPUT_BORDER_COLOR = "#ddd";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 60,
		paddingHorizontal: 30,
		flexDirection: "column"
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	logo: {
		width: 50,
		height: 50
	},
	navigation: {
		fontSize: 15,
		fontWeight: "bold",
		color: NAVIGATION_BTN
	},
	title: {
		fontSize: 22,
		fontWeight: "bold",
		color: MAIN_COLOR,
		marginVertical: 15
	},
	description: {
		fontSize: 14,
		color: SECONDERY_COLOR
	},
	form: {
		marginTop: 40,
		marginBottom: 40
	},
	inputHolder: {
		position: "relative"
	},
	icon: {
		position: "absolute",
		left: 0,
		top: 22
	},
	input: {
		fontSize: 14,
		color: INPUT_COLOR,
		paddingVertical: 15,
		paddingLeft: 30,
		borderBottomWidth: 1,
		borderBottomColor: INPUT_BORDER_COLOR,
		marginVertical: 10
	},
	placeholder: {
		color: PLACEHOLDER_COLOR
	},
	inputActive: {
		borderBottomColor: INPUT_BORDER_COLOR_ACTIVE
	},
	submit: {
		backgroundColor: MAIN_COLOR,
		marginVertical: 5,
		marginHorizontal: 10,
		paddingVertical: 15,
		alignItems: "center",
		borderRadius: 4
	},
	submitBtn: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#fff"
	},
	social: {
		position: "relative",
		backgroundColor: "#fff",
		flexDirection: "row",
		marginVertical: 5,
		marginHorizontal: 10,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: INPUT_BORDER_COLOR
	},
	socialText: {
		fontSize: 14,
		fontWeight: "bold",
		color: MAIN_COLOR,
		flex: 4
	},
	socialIcon: {
		flex: 1,
		paddingLeft: 15
	}
});
