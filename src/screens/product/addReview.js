import React, { Component } from "react";
import {
	View,
	Text,
	ScrollView,
	TextInput,
	KeyboardAvoidingView,
	Keyboard
} from "react-native";

import Header from "../../components/review/header";
import Tag from "../../components/review/button";
import Star from "../../components/review/rate";
import Submit from "../../components/product/button";
import { reviewStyle, submitStyle, PLACEHOLDER_COLOR } from "../../styles/main";

const TextArea = props => (
	<React.Fragment>
		<TextInput
			ref={ref => (this.input = ref)}
			autoCorrect={false}
			autoCapitalize={"none"}
			maxLength={props.max}
			multiline={true}
			onChangeText={text => props.onCountRemain(text)}
			placeholder={"Type a paragraph"}
			style={props.style.input}
			placeholderTextColor={PLACEHOLDER_COLOR}
		/>
		<Text style={props.style.remainText}>
			{props.remain} characters remaining
		</Text>
	</React.Fragment>
);

export default class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			max: 1500,
			remain: 1500,
			rate: null,
			options: {
				1: [
					{ id: 0, name: "In person", fullWidth: false, active: false },
					{ id: 1, name: "Telephone", fullWidth: false, active: false },
					{ id: 2, name: "Email", fullWidth: false, active: false },
					{
						id: 3,
						name: "Company website ordering service",
						fullWidth: true,
						active: false
					}
				],
				2: [
					{ id: 0, name: "Letter", fullWidth: false, active: false },
					{ id: 1, name: "Parcel", fullWidth: false, active: false },
					{
						id: 2,
						name: "Excesssive or oversized shipment",
						fullWidth: true,
						active: false
					}
				]
			}
		};
	}

	componentDidMount() {
		this.keyboardWillShowListener = Keyboard.addListener(
			"keyboardWillShow",
			this.keyboardDidShow
		);
	}

	componentWillUnmount() {
		this.keyboardWillShowListener.remove();
	}

	keyboardDidShow = () => this.scrollView.scrollToEnd({ animated: true });

	selectOptions = (index, id) => {
		this.state.options[index].map(
			item =>
				item.id === id ? (item.active = !item.active) : (item.active = false)
		);
		this.setState({ options: this.state.options });
	};

	updateRate = index => this.setState({ rate: index + 1 });

	countRemainCharacter = text =>
		this.setState({ remain: this.state.max - text.length });

	render() {
		const { remain, max, options, rate } = this.state;
		return (
			<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
				<View style={reviewStyle.formContainer}>
					<Header
						title={"Reviews"}
						style={reviewStyle}
						navigation={this.props.navigation}
					/>
					<ScrollView
						contentContainerStyle={reviewStyle.form}
						ref={ref => (this.scrollView = ref)}
					>
						>
						<Text style={reviewStyle.label}>
							What is your preferred method of ordering ?
						</Text>
						<View style={reviewStyle.tagHolder}>
							{options["1"].map(item => (
								<Tag
									key={item.id}
									style={reviewStyle}
									item={item}
									index={1}
									onClick={this.selectOptions}
								/>
							))}
						</View>
						<Text style={reviewStyle.label}>
							What type of shipping do you use most often ?
						</Text>
						<View style={reviewStyle.tagHolder}>
							{options["2"].map(item => (
								<Tag
									key={item.id}
									style={reviewStyle}
									item={item}
									index={2}
									onClick={this.selectOptions}
								/>
							))}
						</View>
						<Text style={reviewStyle.label}>
							Please rate your overall level of satisfaction with our shipping
							delivery service
						</Text>
						<Star style={reviewStyle} onSelect={this.updateRate} rate={rate} />
						<Text style={reviewStyle.label}>
							Would you like to write anything about services you receive?
						</Text>
						<TextArea
							max={max}
							remain={remain}
							style={reviewStyle}
							onCountRemain={this.countRemainCharacter}
						/>
					</ScrollView>
					<Submit
						style={submitStyle}
						text={"Submit"}
						onClick={() => this.props.navigation.navigate("Explore")}
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}
