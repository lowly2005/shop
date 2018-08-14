import React, { Component } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";

import Header from "../../components/review/header";
import Tag from "../../components/review/button";
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
			remain: 1500
		};
	}

	countRemainCharacter = text =>
		this.setState({ remain: this.state.max - text.length });

	render() {
		const { remain, max } = this.state;
		return (
			<View style={reviewStyle.formContainer}>
				<Header
					title={"Reviews"}
					style={reviewStyle}
					navigation={this.props.navigation}
				/>
				<ScrollView contentContainerStyle={reviewStyle.form}>
					<Text style={reviewStyle.label}>
						What is your preferred method of ordering ?
					</Text>
					<View style={reviewStyle.tagHolder}>
						<Tag style={reviewStyle} name={"In person"} />
						<Tag style={reviewStyle} name={"Telephone"} />
						<Tag style={reviewStyle} name={"Email"} />
						<Tag
							style={reviewStyle}
							name={"Company website ordering service"}
							fullWidth
						/>
					</View>
					<Text style={reviewStyle.label}>
						What type of shipping do you use most often ?
					</Text>
					<View style={reviewStyle.tagHolder}>
						<Tag style={reviewStyle} name={"Letter"} />
						<Tag style={reviewStyle} name={"Parcel"} />
						<Tag
							style={reviewStyle}
							name={"Excesssive or oversized shipment"}
							fullWidth
						/>
					</View>
					<Text style={reviewStyle.label}>
						Please rate your overall level of satisfaction with our shipping
						delivery service
					</Text>
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
				<Submit style={submitStyle} text={"Submit"} />
			</View>
		);
	}
}
