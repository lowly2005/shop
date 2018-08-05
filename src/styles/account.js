import { StyleSheet } from "react-native";
import { Theme } from "../constants/style";
import { Constants } from "expo";

const { MAIN_COLOR, BACKGROUND_COLOR, PRIMARY_COLOR } = Theme.General;
const {
	PLACEHOLDER_COLOR,
	INPUT_BORDER_COLOR,
	INPUT_BORDER_COLOR_ACTIVE,
	INPUT_BORDER_COLOR_ERROR
} = Theme.Auth;
const { NOTIFICATIONBG, NOTIFICATIONCOLOR, LABELCOLOR } = Theme.Account;

const styles = StyleSheet.create({
	container: {
		position: "relative",
		flex: 1,
		paddingTop: Constants.statusBarHeight > 25 ? 60 : 30,
		flexDirection: "column",
		backgroundColor: BACKGROUND_COLOR
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 15
	},
	title: {
		fontSize: 30,
		color: MAIN_COLOR
	},
	divider: {
		fontSize: 20,
		marginHorizontal: 10
	},
	currentTitle: {
		color: PRIMARY_COLOR,
		fontSize: 30,
		fontWeight: "bold"
	},
	itemsContainer: {
		marginVertical: 50,
		paddingHorizontal: 15
	},
	item: {
		paddingVertical: 20,
		flexDirection: "row",
		alignItems: "center"
	},
	itemText: {
		fontSize: 20,
		fontWeight: "500",
		color: MAIN_COLOR
	},
	notification: {
		marginLeft: 15,
		borderRadius: 4,
		paddingHorizontal: 8,
		paddingVertical: 3,
		backgroundColor: NOTIFICATIONBG
	},
	notificationText: {
		fontSize: 15,
		color: NOTIFICATIONCOLOR
	},
	logOutContainer: {
		position: "absolute",
		bottom: 50,
		left: 20
	},
	logOutText: {
		fontSize: 22,
		fontWeight: "500",
		color: MAIN_COLOR
	}
});

const profileStyle = StyleSheet.create({
	form: {
		marginLeft: 20,
		marginTop: 40
	},
	label: {
		fontSize: 14,
		fontWeight: "bold",
		color: LABELCOLOR,
		marginBottom: 10
	},
	inputHolder: {
		marginBottom: 30
	},
	input: {
		fontSize: 16,
		// borderBottomColor: INPUT_BORDER_COLOR,
		fontWeight: "bold",
		borderBottomWidth: 2,
		paddingVertical: 8,
		color: MAIN_COLOR
	},
	inputActive: {
		borderBottomColor: INPUT_BORDER_COLOR_ACTIVE
	},
	inputError: {
		borderBottomColor: INPUT_BORDER_COLOR_ERROR
	},
	submit: {
		position: "absolute",
		left: 15,
		bottom: 40,
		borderColor: PRIMARY_COLOR,
		borderWidth: 1,
		borderRadius: 6,
		width: 80,
		height: 40,
		alignItems: "center",
		justifyContent: "center"
	},
	submitText: {
		fontSize: 14,
		fontWeight: "bold",
		color: PRIMARY_COLOR
	}
});

const ordersStyle = StyleSheet.create({
	label: {
		marginTop: 20,
		marginBottom: 10,
		fontSize: 12,
		color: LABELCOLOR,
		fontWeight: "bold",
		paddingHorizontal: 15
	},
	currentOrderContainer: {
		position: "relative",
		padding: 15,
		backgroundColor: PRIMARY_COLOR,
		flexDirection: "row",
		shadowOffset: { width: 5, height: 5 },
		shadowRadius: 10,
		shadowColor: "black",
		shadowOpacity: 0.3,
		marginBottom: 20
	},
	currentOrderImageContainer: {
		width: 40,
		height: 40,
		borderRadius: 40 / 2,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
		marginRight: 15
	},
	currentOrderImage: {
		height: 40,
		width: 40
	},
	currentOrderTitle: {
		color: "#fff",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 5
	},
	currentOrderStatus: {
		fontSize: 12,
		color: "#fff"
	},
	currentOrderDate: {
		color: "#fff",
		position: "absolute",
		right: 15,
		bottom: 20,
		fontSize: 10
	},
	orderContainer: {
		padding: 15,
		position: "relative",
		flexDirection: "row",
		marginBottom: 10
	},
	orderImageContainer: {
		width: 40,
		height: 40,
		borderRadius: 40 / 2,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
		marginRight: 15
	},
	orderImage: {
		height: 40,
		width: 40
	},
	orderTitle: {
		color: "#222",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 5
	},
	orderStatus: {
		fontSize: 12,
		color: "#222"
	},
	orderDate: {
		position: "absolute",
		right: 15,
		bottom: 20,
		fontSize: 10,
		color: "#222"
	}
});

export {
	styles,
	profileStyle,
	ordersStyle,
	PLACEHOLDER_COLOR,
	INPUT_BORDER_COLOR
};
