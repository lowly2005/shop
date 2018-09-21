import { StyleSheet } from "react-native";
import { Theme } from "../constants/style";
import { Constants } from "expo";

const {
	INPUT_COLOR,
	INPUT_BORDER_COLOR,
	INPUT_BORDER_COLOR_ACTIVE,
	INPUT_BORDER_COLOR_ERROR,
	PLACEHOLDER_COLOR
} = Theme.Auth;

const {
	BACKGROUND_COLOR,
	PRIMARY_COLOR,
	MAIN_COLOR,
	SECONDERY_COLOR
} = Theme.General;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: Constants.statusBarHeight > 25 ? 60 : 30,
		paddingHorizontal: 30,
		flexDirection: "column",
		backgroundColor: BACKGROUND_COLOR
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
		color: PRIMARY_COLOR
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
		marginTop: Constants.statusBarHeight > 25 ? 30 : 15,
		marginBottom: Constants.statusBarHeight > 25 ? 30 : 15
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
		borderBottomWidth: 2,
		borderBottomColor: INPUT_BORDER_COLOR,
		marginVertical: 10
	},
	placeholder: {
		color: PLACEHOLDER_COLOR
	},
	inputActive: {
		borderBottomColor: INPUT_BORDER_COLOR_ACTIVE
	},
	inputError: {
		borderBottomColor: INPUT_BORDER_COLOR_ERROR
	},
	submit: {
		position: "relative",
		backgroundColor: MAIN_COLOR,
		marginVertical: 5,
		marginHorizontal: 10,
		paddingVertical: 15,
		alignItems: "center",
		borderRadius: 4
	},
	submitWhenKeyboardIsActive: {
		position: "absolute",
		left: -10,
		right: -10,
		bottom: 200,
		backgroundColor: PRIMARY_COLOR,
		borderRadius: 0,
		alignItems: "center",
		paddingVertical: 15
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
		borderWidth: 2,
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
	},
	forgotPassword: {
		position: "relative",
		backgroundColor: "#fff",
		flexDirection: "row",
		marginVertical: 5,
		marginHorizontal: 10,
		height: 50,
		alignItems: "center",
		justifyContent: "center"
	},
	forgotPasswordText: {
		fontSize: 14,
		color: MAIN_COLOR,
		fontWeight: "bold"
	},
	termsHolder: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		flexWrap: "wrap"
	},
	terms: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#999",
		marginTop: 15
	},
	termsLink: {
		borderBottomWidth: 2,
		borderBottomColor: PRIMARY_COLOR,
		marginTop: 5
	}
});

export { styles, Theme };
