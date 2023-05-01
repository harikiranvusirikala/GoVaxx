import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
const Login = ({ navigation, route }) => {
	const [phNo, setPhNo] = useState("");
	const handleLogin = async () => {
		// Authentication logic goes here
		navigation.navigate('Drawer', { screen: 'Main' });
	}
	return (
		<KeyboardAvoidingView
			behavior="height"
			style={styles.container} enabled
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.inner}>
					<Text style={styles.header}>Login</Text>
					<Image style={styles.img} source={require('../assets/medical_care.png')} />
					<TextInput
						style={styles.input}
						onChangeText={setPhNo}
						value={phNo}
						placeholder="Phone Number"
						keyboardType="numeric"
					/>
					<Text style={{ padding: 11 }}>
						By continuing I agree to the Terms of Use & Privacy Policy
					</Text>
					<View style={styles.btnContainer}>
						<Button
							title="Continue"
							onPress={handleLogin}
							color="#00bfa6"
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	// ...
});
export default Login;
