import React, { Component } from "react";
import {
	Text,
	View,
	Modal,
	TextInput,
	TouchableOpacity,
	ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: ""
		};
	}

	render() {
		const { search } = this.state;
		const { style, status, onCloseSearchModal } = this.props;
		return (
			<Modal animationType="slide" transparent={false} visible={status}>
				<View style={style.container}>
					<View style={style.searchHeader}>
						<Text style={style.searchTitle}>Search</Text>
						<Ionicons
							name="md-close"
							size={28}
							color={"#999"}
							onPress={() => onCloseSearchModal()}
						/>
					</View>
					<View style={style.searchInputContainer}>
						<View style={{ flexDirection: "row", flex: 2 }}>
							<Ionicons name="ios-search" size={24} color={"#000"} />
							<TextInput
								autoCorrect={false}
								autoCapitalize={"none"}
								keyboardType={"web-search"}
								maxLength={200}
								placeholder={"type here..."}
								style={style.searchInput}
								placeholderTextColor={"#888"}
								onChangeText={text => this.setState({ search: text })}
								defaultValue={search}
							/>
						</View>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => this.setState({ search: "" })}
						>
							{search ? <Text style={style.searchClear}>Clear</Text> : null}
						</TouchableOpacity>
					</View>
					<ScrollView style={style.searchSuggestionContainer}>
						<TouchableOpacity
							activeOpacity={0.8}
							style={style.searchSuggestion}
						>
							<Text style={style.searchSuggestionText} />
						</TouchableOpacity>
					</ScrollView>
				</View>
			</Modal>
		);
	}
}

export default Search;
