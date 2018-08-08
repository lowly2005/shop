import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
	styles,
	profileStyle,
	PLACEHOLDER_COLOR,
	INPUT_BORDER_COLOR
} from "../../styles/account";

export default class Account extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: false,
			isSubmited: false,
			firsName: "shayan",
			lastName: "araghi",
			email: "shayanaraghi@live.com",
			phone: "+989127113556"
		};
	}

	validateEmail = value => {
		let reg = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
		return reg.test(value);
	};

	handleFocus = input => this.setState({ [input]: true });

	handleBlur = input => this.setState({ [input]: false });

	changeFormMode = () => this.setState({ editMode: !this.state.editMode });

	render() {
		const {
			isSubmited,
			editMode,
			firsName,
			lastName,
			email,
			phone
		} = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center"
						}}
					>
						<Text style={styles.title}>Account</Text>
						<Text style={styles.divider}>/</Text>
						<Text style={styles.currentTitle}>Profile</Text>
					</View>
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={() => this.props.navigation.pop()}
					>
						<Ionicons name="md-close" size={28} color={"#999"} />
					</TouchableOpacity>
				</View>
				<View style={profileStyle.form}>
					<View style={profileStyle.inputHolder}>
						<Text style={profileStyle.label}>First name</Text>
						<TextInput
							autoCorrect={false}
							autoCapitalize={"none"}
							onFocus={() => this.handleFocus("inputOne")}
							onBlur={() => this.handleBlur("inputOne")}
							onChangeText={value => this.setState({ firsName: value })}
							editable={editMode}
							value={firsName}
							maxLength={100}
							placeholder={"First name"}
							style={[
								{ borderBottomColor: editMode ? INPUT_BORDER_COLOR : "#fff" },
								profileStyle.input,
								firsName === "" && isSubmited ? profileStyle.inputError : null,
								this.state.inputOne ? profileStyle.inputActive : null
							]}
							placeholderTextColor={PLACEHOLDER_COLOR}
						/>
					</View>
					<View style={profileStyle.inputHolder}>
						<Text style={profileStyle.label}>Last name</Text>
						<TextInput
							autoCorrect={false}
							autoCapitalize={"none"}
							onFocus={() => this.handleFocus("inputTwo")}
							onBlur={() => this.handleBlur("inputTwo")}
							onChangeText={value => this.setState({ lastName: value })}
							editable={editMode}
							value={lastName}
							maxLength={100}
							placeholder={"Last name"}
							style={[
								{ borderBottomColor: editMode ? INPUT_BORDER_COLOR : "#fff" },
								profileStyle.input,
								lastName === "" && isSubmited ? profileStyle.inputError : null,
								this.state.inputTwo ? profileStyle.inputActive : null
							]}
							placeholderTextColor={PLACEHOLDER_COLOR}
						/>
					</View>
					<View style={profileStyle.inputHolder}>
						<Text style={profileStyle.label}>Email</Text>
						<TextInput
							autoCorrect={false}
							autoCapitalize={"none"}
							onFocus={() => this.handleFocus("inputThree")}
							onBlur={() => this.handleBlur("inputThree")}
							onChangeText={value => this.setState({ email: value })}
							editable={editMode}
							value={email}
							maxLength={200}
							keyboardType={"email-address"}
							placeholder={"Email"}
							style={[
								{ borderBottomColor: editMode ? INPUT_BORDER_COLOR : "#fff" },
								profileStyle.input,
								!this.validateEmail(email) === "" && isSubmited
									? profileStyle.inputError
									: null,
								this.state.inputThree ? profileStyle.inputActive : null
							]}
							placeholderTextColor={PLACEHOLDER_COLOR}
						/>
					</View>
					<View style={profileStyle.inputHolder}>
						<Text style={profileStyle.label}>Phone</Text>
						<TextInput
							autoCorrect={false}
							autoCapitalize={"none"}
							onFocus={() => this.handleFocus("inputFour")}
							onBlur={() => this.handleBlur("inputFour")}
							onChangeText={value => this.setState({ phone: value })}
							editable={editMode}
							value={phone}
							maxLength={15}
							keyboardType={"phone-pad"}
							placeholder={"Phone"}
							style={[
								{ borderBottomColor: editMode ? INPUT_BORDER_COLOR : "#fff" },
								profileStyle.input,
								phone === "" && isSubmited ? profileStyle.inputError : null,
								this.state.inputFour ? profileStyle.inputActive : null
							]}
							placeholderTextColor={PLACEHOLDER_COLOR}
						/>
					</View>
				</View>
				<TouchableOpacity
					activeOpacity={0.8}
					style={profileStyle.submit}
					onPress={() => this.changeFormMode()}
				>
					<Text style={profileStyle.submitText}>
						{editMode ? "Save" : "Edit"}
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
