import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default class componentName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			card: {
				name: "",
				number: "",
				expireDate: ""
			},
			isSubmited: false,
			inputOneFocus: false
		};
	}

	handleFocus = input => this.setState({ [input]: true });

	handleBlur = input => this.setState({ [input]: false });

	submit = () => {
		if (
			this.state.card.name !== "" &&
			this.state.card.number !== "" &&
			this.state.expireDate !== ""
		) {
			this.setState({
				isSubmited: false,
				card: { name: "", number: "", expireDate: "" }
			});
			this.props.onSubmit({
				id: this.props.index + 1,
				expireDate: this.state.card.expireDate,
				number: this.state.card.number,
				holder: this.state.card.name,
				active: false
			});
		} else {
			this.setState({ isSubmited: true });
		}
	};

	render() {
		const { isSubmited, card } = this.state;
		const { PLACEHOLDER_COLOR, paymentStyle } = this.props.style;
		return (
			<View style={{ paddingHorizontal: 20 }}>
				<Text style={paymentStyle.formTitle}>Add new card</Text>
				<TextInput
					autoCorrect={false}
					autoCapitalize={"none"}
					onFocus={() => this.handleFocus("inputOneFocus")}
					onBlur={() => this.handleBlur("inputOneFocus")}
					onChangeText={value =>
						this.setState({ card: { ...this.state.card, name: value } })
					}
					maxLength={50}
					value={card.name}
					placeholder={"Cardholder Name"}
					style={[
						paymentStyle.input,
						card.name === "" && isSubmited ? paymentStyle.inputError : null,
						this.state.inputOneFocus ? paymentStyle.inputActive : null
					]}
					placeholderTextColor={PLACEHOLDER_COLOR}
				/>
				<TextInput
					autoCorrect={false}
					autoCapitalize={"none"}
					onFocus={() => this.handleFocus("inputTwoFocus")}
					onBlur={() => this.handleBlur("inputTwoFocus")}
					onChangeText={value =>
						this.setState({ card: { ...this.state.card, number: value } })
					}
					maxLength={16}
					value={card.number}
					placeholder={"Card Number"}
					style={[
						paymentStyle.input,
						card.number === "" && isSubmited ? paymentStyle.inputError : null,
						this.state.inputTwoFocus ? paymentStyle.inputActive : null
					]}
					placeholderTextColor={PLACEHOLDER_COLOR}
				/>
				<TextInput
					autoCorrect={false}
					autoCapitalize={"none"}
					onFocus={() => this.handleFocus("inputThreeFocus")}
					onBlur={() => this.handleBlur("inputThreeFocus")}
					onChangeText={value =>
						this.setState({
							card: { ...this.state.card, expireDate: value }
						})
					}
					maxLength={16}
					value={card.expireDate}
					placeholder={"Expire Date"}
					style={[
						paymentStyle.input,
						card.name === "" && isSubmited ? paymentStyle.inputError : null,
						this.state.inputThreeFocus ? paymentStyle.inputActive : null
					]}
					placeholderTextColor={PLACEHOLDER_COLOR}
				/>
				<TouchableOpacity
					activeOpacity={0.8}
					style={paymentStyle.submitContainer}
					onPress={() => this.submit()}
				>
					<Text style={paymentStyle.submit}>Add now</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
