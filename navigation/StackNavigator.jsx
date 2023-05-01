import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import HomePage from "../screens/HomePage";
const Stack = createNativeStackNavigator();
const screenOptionStyle = {
	headerStyle: {
		backgroundColor: "#9AC4F8",
	},
	headerTintColor: "white",
	headerShown: false
};
const AuthStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Landing" component={HomePage} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen
				name="Drawer"
				component={DrawerNavigator}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	)
}
const MainStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Landing" component={HomePage} />
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	)
}
const BookStackNavigator = () => {

}
const MembersStackNavigator = () => {

}

export { AuthStackNavigator, MainStackNavigator, MembersStackNavigator, BookStackNavigator };