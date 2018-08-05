import { StyleSheet } from "react-native";
import { Theme } from "../constants/style";
import { Constants } from "expo";

const { MAIN_COLOR, BACKGROUND_COLOR } = Theme.General;
const {
	IMAGE_PLACEHOLDER_BG,
	TAGCOLOR,
	TAGBG,
	LISTBUTTON,
	BANNER_PRIMARY_COLOR
} = Theme.Explore;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight > 25 ? 60 : 30,
		flexDirection: "column",
		backgroundColor: BACKGROUND_COLOR,
		paddingHorizontal: 15
	},
	exploreHeader: {
		marginBottom: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	exploreHeaderName: {
		fontSize: 14,
		color: "#666"
	},
	exploreHeaderTitle: {
		fontSize: 25,
		fontWeight: "bold",
		color: MAIN_COLOR
	},
	offerContainer: {
		position: "relative",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "space-between",
		borderRadius: 6,
		padding: 15,
		backgroundColor: IMAGE_PLACEHOLDER_BG,
		height: 350,
		overflow: "hidden"
	},
	offerContainerImage: {
		position: "absolute",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		zIndex: 5
	},
	offerTagContainer: {
		borderRadius: 4,
		backgroundColor: TAGBG,
		alignSelf: "flex-start",
		paddingHorizontal: 15,
		paddingVertical: 5,
		zIndex: 10
	},
	offerTag: {
		fontSize: 12,
		color: TAGCOLOR
	},
	offerGradient: {
		zIndex: 10,
		position: "absolute",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		alignItems: "flex-start",
		justifyContent: "flex-end",
		padding: 20
	},
	offerTitle: {
		color: TAGCOLOR,
		fontSize: 44,
		fontWeight: "bold",
		marginBottom: 15,
		lineHeight: 43
	},
	offerButtonContainer: {
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row"
	},
	offerButton: {
		color: TAGCOLOR,
		fontSize: 14,
		fontWeight: "bold"
	},
	offerButtonIcon: {
		marginLeft: 10
	},
	listContainer: {
		marginHorizontal: 5,
		position: "relative"
	},
	listHeaderContainer: {
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		marginVertical: 20
	},
	listTitle: {
		color: MAIN_COLOR,
		fontSize: 16,
		fontWeight: "bold"
	},
	listButtonContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	listButton: {
		color: LISTBUTTON,
		fontWeight: "bold"
	},
	listButtonIcon: {
		marginLeft: 10
	},
	itemContainer: {
		marginRight: 15,
		width: 135,
		overflow: "hidden"
	},
	itemImageContainer: {
		padding: 10,
		borderWidth: 1,
		alignItems: "center",
		justifyContent: "center",
		borderColor: "#eee",
		marginBottom: 10
	},
	itemImage: {
		height: 130,
		width: 130
	},
	itemTitle: {
		color: MAIN_COLOR,
		fontSize: 12,
		fontWeight: "500"
	},
	bannerContainer: {
		position: "relative",
		flexDirection: "column",
		justifyContent: "space-between",
		borderRadius: 4,
		paddingHorizontal: 15,
		paddingTop: 40,
		paddingBottom: 10,
		backgroundColor: IMAGE_PLACEHOLDER_BG,
		overflow: "hidden"
	},
	bannerContainerImage: {
		position: "absolute",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		zIndex: 5
	},
	bannerTagContainer: {
		borderRadius: 2,
		backgroundColor: BANNER_PRIMARY_COLOR,
		alignSelf: "flex-start",
		padding: 8,
		marginBottom: 10,
		zIndex: 15
	},
	bannerTag: {
		fontSize: 16,
		color: MAIN_COLOR,
		fontWeight: "bold"
	},
	bannerGradient: {
		zIndex: 10,
		position: "absolute",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		justifyContent: "center",
		padding: 20
	},
	bannerTitle: {
		color: "#fff",
		fontSize: 28,
		fontWeight: "bold",
		marginBottom: 10,
		zIndex: 15
	},
	bannerDescription: {
		color: "#fff",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 15,
		zIndex: 15
	},
	bannerBottomContainer: {
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		zIndex: 15
	},
	bannerButtonContainer: {
		alignItems: "center",
		flexDirection: "row"
	},
	bannerButton: {
		color: TAGCOLOR,
		fontSize: 14,
		fontWeight: "bold"
	},
	bannerButtonIcon: {
		marginLeft: 10
	},
	bannerType: {
		color: BANNER_PRIMARY_COLOR,
		fontSize: 12
	}
});

export { styles };
