import { StyleSheet } from "react-native";
import { Theme } from "../constants/style";
import { Constants } from "expo";
import { PRIMARY_COLOR, INPUT_BORDER_COLOR } from "./account";

const { MAIN_COLOR, BACKGROUND_COLOR, THIRD_COLOR, RED_COLOR } = Theme.General;
const {
	IMAGE_PLACEHOLDER_BG,
	TAGCOLOR,
	TAGBG,
	LISTBUTTON,
	BANNER_PRIMARY_COLOR
} = Theme.Explore;

const navbarStyle = StyleSheet.create({
	navbar: {
		backgroundColor: BACKGROUND_COLOR,
		paddingTop: Constants.statusBarHeight > 25 ? 50 : 40,
		paddingBottom: 15,
		paddingHorizontal: 15,
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row-reverse"
	},
	navbarSection: {
		flexDirection: "row-reverse",
		alignItems: "center",
		flex: 1
	}
});

const submitStyle = StyleSheet.create({
	buttonContainer: {
		backgroundColor: PRIMARY_COLOR,
		paddingTop: 10,
		paddingBottom: Constants.statusBarHeight > 25 ? 20 : 15,
		alignItems: "center",
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 10
	},
	button: {
		fontSize: 15,
		color: "#fff",
		fontWeight: "bold"
	}
});

const searchStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: BACKGROUND_COLOR,
		paddingTop: Constants.statusBarHeight > 25 ? 50 : 40
	},
	searchHeader: {
		paddingHorizontal: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 15
	},
	searchTitle: {
		fontSize: 30,
		fontWeight: "bold"
	},
	searchInputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderBottomColor: "#eee",
		borderBottomWidth: 1
	},
	searchInput: {
		fontSize: 15,
		marginLeft: 10,
		flex: 1
	},
	searchClear: {
		fontSize: 14,
		color: RED_COLOR,
		fontWeight: "bold"
	},
	searchSuggestionContainer: {
		paddingHorizontal: 30,
		paddingVertical: 15
	},
	searchSuggestion: {
		paddingVertical: 20
	},
	searchSuggestionText: {
		fontSize: 14
	}
});

const exploreStyle = StyleSheet.create({
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

const offersStyle = StyleSheet.create({
	navbarBackBtnText: {
		fontSize: 16,
		fontWeight: "600",
		marginLeft: 15
	},
	container: {
		flex: 1,
		backgroundColor: THIRD_COLOR,
		flexDirection: "column"
	},
	listContainer: {
		flex: 1,
		marginVertical: 15,
		marginHorizontal: 15
	},
	itemConatainer: {
		backgroundColor: BACKGROUND_COLOR,
		marginBottom: 15,
		paddingHorizontal: 25,
		paddingVertical: 20,
		borderRadius: 4,
		position: "relative",
		shadowOffset: { width: 1, height: 1 },
		shadowRadius: 2,
		shadowColor: "#999",
		shadowOpacity: 0.2,
		overflow: "hidden"
	},
	specialContainer: {
		backgroundColor: "#BCDB37"
	},
	specialGradient: {
		position: "absolute",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	specialIcon: {
		height: 40,
		marginLeft: -15
	},
	itemContent: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		zIndex: 10
	},
	itemTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 5
	},
	itemDescription: {
		fontSize: 14,
		color: "#555"
	},
	buttonContainer: {
		borderWidth: 1,
		borderColor: "#555",
		borderRadius: 4,
		paddingHorizontal: 15,
		paddingVertical: 8
	},
	button: {
		fontSize: 12,
		fontWeight: "600"
	},
	emptyContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	emptyIcon: {
		height: 130,
		marginBottom: 30
	},
	emptyTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 15
	},
	emptyDescription: {
		fontSize: 13,
		fontWeight: "600",
		color: "#555",
		textAlign: "center",
		marginBottom: 30,
		width: 220
	},
	emptyBtnContainer: {
		borderColor: PRIMARY_COLOR,
		borderWidth: 1,
		borderRadius: 4,
		paddingVertical: 15,
		alignItems: "center",
		width: 220
	},
	emptyBtn: {
		fontSize: 15,
		fontWeight: "bold",
		color: PRIMARY_COLOR
	}
});

const categoryStyle = StyleSheet.create({
	navbarTitle: {
		textAlign: "center",
		fontSize: 16,
		fontWeight: "600"
	},
	container: {
		flex: 1,
		backgroundColor: THIRD_COLOR
	},
	itemInvisible: {
		backgroundColor: "transparent"
	},
	cardContainer: {
		position: "relative",
		borderColor: "#eee",
		borderWidth: 1,
		borderRadius: 4,
		backgroundColor: BACKGROUND_COLOR,
		paddingHorizontal: 15,
		height: 200,
		overflow: "hidden",
		justifyContent: "space-between"
	},
	favorite: {
		position: "absolute",
		right: 10,
		top: 10,
		zIndex: 5
	},
	dealContainer: {
		backgroundColor: "#43B55B",
		position: "absolute",
		left: 0,
		top: 10,
		borderTopRightRadius: 3,
		borderBottomRightRadius: 3,
		paddingHorizontal: 8,
		paddingVertical: 3,
		zIndex: 5
	},
	cardDeal: {
		fontSize: 10,
		color: "#fff"
	},
	cardImageContainer: {
		alignItems: "center",
		flex: 1
	},
	cardImage: {
		flex: 1,
		marginTop: 30
	},
	cardTitle: {
		fontSize: 13,
		color: "#222",
		marginVertical: 10
	},
	cardPrice: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#222"
	},
	cardPriceWithLine: {
		fontSize: 13,
		fontWeight: "100",
		marginLeft: 15,
		textDecorationLine: "line-through"
	},
	cardDiscountPrice: {
		fontSize: 14,
		fontWeight: "bold",
		color: "#222"
	},
	modal: {
		flex: 1,
		backgroundColor: BACKGROUND_COLOR,
		paddingTop: Constants.statusBarHeight > 25 ? 50 : 40,
		paddingBottom: 15,
		paddingHorizontal: 15,
		position: "absolute",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		zIndex: 20
	},
	modalTitle: {
		fontSize: 28,
		fontWeight: "bold"
	},
	modalItems: {
		paddingVertical: 15
	},
	modalItemsText: {
		fontSize: 16,
		color: "#333",
		fontWeight: "bold"
	},
	searchBtn: {
		backgroundColor: PRIMARY_COLOR,
		paddingTop: 10,
		paddingBottom: Constants.statusBarHeight > 25 ? 20 : 10,
		alignItems: "center",
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 10
	},
	searchBtnText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold"
	},
	filterSection: {
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderTopColor: "#ddd",
		borderTopWidth: 1
	},
	filterSectionTitle: {
		color: RED_COLOR,
		fontSize: 16,
		fontWeight: "bold",
		marginVertical: 5
	},
	sliderContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 10
	},
	sliderLabel: {
		fontSize: 14,
		fontWeight: "600"
	}
});

const productDetailsStyle = StyleSheet.create({
	container: {
		backgroundColor: BACKGROUND_COLOR,
		position: "relative",
		marginTop: Constants.statusBarHeight,
		paddingBottom: Constants.statusBarHeight > 25 ? 50 : 35
	},
	carouselContainer: {
		position: "relative",
		marginTop: Constants.statusBarHeight > 25 ? 50 : 35
	},
	navbar: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		paddingTop: Constants.statusBarHeight > 25 ? 50 : 35,
		paddingBottom: 15,
		paddingHorizontal: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		zIndex: 20,
		backgroundColor: "rgba(255, 255, 255, 0.7)"
	},
	slider: {
		position: "relative"
	},
	sliderItems: {
		flex: 1,
		height: Constants.statusBarHeight > 25 ? 300 : 250,
		alignItems: "center",
		alignContent: "center",
		justifyContent: "center"
	},
	sliderImage: {
		height: Constants.statusBarHeight > 25 ? 300 : 250
	},
	sliderIndicatorContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	},
	sliderIndicator: {
		width: 8,
		height: 8,
		backgroundColor: "#ddd",
		borderRadius: 8 / 2,
		marginHorizontal: 5
	},
	title: {
		fontSize: 26,
		fontWeight: "bold",
		marginVertical: 15,
		paddingHorizontal: 15
	},
	generalInfo: {
		flexDirection: "row",
		alignItems: "center",
		borderBottomColor: "#eee",
		borderBottomWidth: 1,
		paddingVertical: 10,
		paddingHorizontal: 15
	},
	discountPrice: {
		fontSize: 22,
		fontWeight: "bold",
		marginRight: 15
	},
	price: {
		fontSize: 22,
		fontWeight: "bold"
	},
	priceLineThrough: {
		color: RED_COLOR,
		fontSize: 16,
		fontWeight: "400",
		textDecorationLine: "line-through"
	},
	dealContainer: {
		paddingHorizontal: 8,
		paddingVertical: 5,
		borderRadius: 2,
		marginLeft: 15
	},
	deal: {
		fontSize: 10,
		color: "#fff"
	},
	rateAndReviewContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 15,
		paddingVertical: 20,
		borderBottomColor: "#eee",
		borderBottomWidth: 1
	},
	rateConatiner: {
		paddingHorizontal: 8,
		paddingVertical: 3,
		borderRadius: 4,
		backgroundColor: PRIMARY_COLOR,
		marginRight: 5
	},
	rate: {
		color: "#fff",
		fontSize: 12
	},
	rateText: {
		fontSize: 12,
		fontWeight: "500"
	},
	reviewsContainer: {
		flexDirection: "row",
		alignItems: "center"
	},
	reviewsText: {
		color: RED_COLOR,
		fontWeight: "bold",
		fontSize: 12
	},
	specifications: {
		paddingHorizontal: 15,
		paddingVertical: 20,
		borderBottomColor: "#eee",
		borderBottomWidth: 1
	},
	specificationsTitle: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20
	},
	specificationsTable: {
		flexDirection: "row",
		alignItems: "center",
		alignContent: "flex-start",
		justifyContent: "space-between",
		marginBottom: 5
	},
	specificationsHeader: {
		fontSize: 15,
		fontWeight: "500"
	},
	specificationsBody: {
		fontSize: 15,
		fontWeight: "bold"
	},
	relatedProductContainer: {
		paddingHorizontal: 15,
		paddingBottom: Constants.statusBarHeight > 25 ? 35 : 25
	}
});

const reviewStyle = StyleSheet.create({
	container: {
		backgroundColor: BACKGROUND_COLOR,
		position: "relative",
		paddingBottom: Constants.statusBarHeight > 25 ? 50 : 40
	},
	reviewContainer: {
		padding: 15,
		borderTopColor: "#eee",
		borderTopWidth: 1,
		alignItems: "flex-start",
		flexDirection: "row"
	},
	reviewHeaderContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: BACKGROUND_COLOR,
		paddingTop: Constants.statusBarHeight > 25 ? 50 : 40,
		paddingBottom: 15,
		paddingHorizontal: 15
	},
	reviewHeader: {
		fontSize: 30,
		fontWeight: "bold"
	},
	reviewCover: {
		width: 30,
		height: 30,
		borderRadius: 30 / 2,
		marginRight: 10
	},
	rateConatiner: {
		paddingHorizontal: 8,
		paddingVertical: 3,
		borderRadius: 4,
		backgroundColor: PRIMARY_COLOR,
		marginRight: 5,
		alignItems: "center"
	},
	rate: {
		color: "#fff",
		fontSize: 12
	},
	rateText: {
		fontSize: 12,
		fontWeight: "500"
	},
	titleContainer: {
		justifyContent: "flex-start",
		flexWrap: "wrap",
		flexDirection: "row",
		marginBottom: 10,
		paddingRight: 15
	},
	title: {
		fontSize: 15,
		fontWeight: "bold",
		marginRight: 10
	},
	description: {
		fontSize: 15,
		marginBottom: 10
	},
	date: {
		color: "#999",
		fontSize: 13,
		fontWeight: "600"
	},
	formContainer: {
		backgroundColor: BACKGROUND_COLOR,
		flex: 1
	},
	form: {
		paddingHorizontal: 30,
		paddingBottom: Constants.statusBarHeight > 25 ? 60 : 40
	},
	label: {
		fontSize: 18,
		fontWeight: "bold",
		marginVertical: 25
	},
	tagHolder: {
		flexDirection: "row",
		flexWrap: "wrap"
	},
	tagContainer: {
		paddingVertical: 10,
		paddingHorizontal: 30,
		marginBottom: 10,
		marginRight: 10,
		borderRadius: 3,
		borderColor: "#ddd",
		borderWidth: 1,
		alignSelf: "flex-start",
		flexDirection: "column"
	},
	input: {
		height: 100,
		fontSize: 14,
		borderBottomColor: PRIMARY_COLOR,
		borderBottomWidth: 2,
		marginBottom: 10
	},
	remainText: {
		fontSize: 13,
		fontWeight: "600",
		color: "#555"
	},
	starContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start"
	},
	star: {
		marginRight: 10
	}
});

const cartStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: BACKGROUND_COLOR,
		position: "relative",
		paddingTop: Constants.statusBarHeight > 25 ? 50 : 40
	},
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		paddingBottom: 15
	},
	headerTab: {
		alignItems: "center",
		flexDirection: "row"
	},
	headerSeperatorText: {
		color: "#ddd",
		fontSize: 20
	},
	headerBackIcon: {
		marginRight: 20
	},
	headerTitle: {
		fontSize: 15,
		fontWeight: "bold"
	},
	progressContainer: {
		position: "absolute",
		left: 0,
		bottom: 0,
		height: 2,
		alignItems: "flex-end",
		justifyContent: "center",
		backgroundColor: PRIMARY_COLOR,
		zIndex: 5
	},
	progressFirstCircle: {
		backgroundColor: "#CCE5D2",
		zIndex: 5,
		width: 24,
		height: 24,
		borderRadius: 24 / 2,
		alignItems: "center",
		justifyContent: "center"
	},
	progressSecondCircle: {
		backgroundColor: "#3DB657",
		zIndex: 10,
		width: 14,
		height: 14,
		borderRadius: 14 / 2,
		alignItems: "center",
		justifyContent: "center"
	},
	progressThirdCircle: {
		backgroundColor: "#fff",
		zIndex: 12,
		width: 2,
		height: 2,
		borderRadius: 2 / 2
	},
	checkoutTitleContainer: {
		padding: 18,
		alignItems: "center"
	},
	checkoutTitle: {
		fontSize: 14,
		fontWeight: "600"
	},
	cartItemContainer: {
		flexDirection: "row",
		paddingHorizontal: 20,
		paddingVertical: 30,
		borderBottomColor: "#eee"
	},
	cartItemImage: {
		height: 75,
		width: 75,
		marginRight: 20
	},
	cardInfoContainer: {
		position: "relative",
		flex: 1,
		justifyContent: "space-between"
	},
	cardItemTitle: {
		fontSize: 14,
		fontWeight: "bold"
	},
	cardItemPrice: {
		fontSize: 18,
		fontWeight: "bold"
	},
	cardCountContainer: {
		flexDirection: "row",
		alignItems: "center"
	},
	cardCountBtn: {
		width: 35,
		height: 22,
		alignItems: "center",
		justifyContent: "center",
		borderTopColor: "#BABABA",
		borderTopWidth: 1,
		borderBottomColor: "#BABABA",
		borderBottomWidth: 1
	},
	cardCountText: {
		backgroundColor: "#D8D8D8",
		width: 35,
		height: 22,
		alignItems: "center",
		justifyContent: "center",
		borderTopColor: "#BABABA",
		borderTopWidth: 1,
		borderBottomColor: "#BABABA",
		borderBottomWidth: 1
	},
	checkoutInforamtion: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: 5
	},
	cardInfoTitle: {
		fontSize: 13
	},
	cardDelivery: {
		fontSize: 14,
		fontWeight: "bold",
		color: RED_COLOR
	},
	couponInput: {
		backgroundColor: "#eee",
		borderColor: "#ddd",
		borderWidth: 1,
		padding: 15,
		flex: 4,
		fontSize: 13
	},
	coupunBtnContainer: {
		flex: 2,
		alignItems: "center",
		marginLeft: 15,
		paddingVertical: 15,
		paddingHorizontal: 10,
		backgroundColor: PRIMARY_COLOR
	},
	coupunBtn: {
		fontSize: 13,
		color: "#fff"
	}
});

const addressModalStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: BACKGROUND_COLOR,
		paddingTop: Constants.statusBarHeight > 25 ? 50 : 40,
		paddingBottom: 15,
		position: "relative"
	},
	navigation: {
		alignItems: "flex-start",
		paddingHorizontal: 30
	},
	navigationTitle: {
		fontSize: 15,
		fontWeight: "bold",
		marginLeft: 15
	},
	input: {
		marginLeft: 30,
		marginBottom: 30,
		fontSize: 14,
		borderBottomColor: INPUT_BORDER_COLOR,
		borderBottomWidth: 2,
		paddingVertical: 15
	},
	inputActive: {
		borderBottomColor: PRIMARY_COLOR
	},
	inputError: {
		borderBottomColor: RED_COLOR
	},
	submitWhenKeyboardIsActive: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0
	}
});

export {
	searchStyle,
	navbarStyle,
	exploreStyle,
	offersStyle,
	categoryStyle,
	productDetailsStyle,
	submitStyle,
	reviewStyle,
	cartStyle,
	addressModalStyle,
	PRIMARY_COLOR,
	RED_COLOR,
	Theme
};
