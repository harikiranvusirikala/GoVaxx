import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from "react-native";
import { MainStackNavigator, BookStackNavigator } from './StackNavigator'
import DrawerNavigator from './DrawerNavigator';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();
function MyTabBar({ state, descriptors, navigation }) {
	return (
		<View style={{ flexDirection: 'row', backgroundColor: "#00BFA6", padding: 5 }}>
			{state.routes.map((route, index) => {
				. . .tabBarIcon
		}}
		</View>
	);
}
{/* changing name from TabNavigator to BottomTabNavigator */}
const BottomTabNavigator = () => {
	return (
		<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
			<Tab.Screen name="Home" component={MainStackNavigator} options={{
				headerShown: false, tabBarIcon: ({ color, size }) => (
					<Icon name={'home'} size={20} color="#fff" />
				),
			}} />
			<Tab.Screen name="Book Slot" component={BookStackNavigator} options={{
				tabBarIcon: ({ color, size }) => (
					<Icon name={'calendar-check'} size={20} color="#fff" />
				),
			}} />
			<Tab.Screen name="More" component={DrawerNavigator} options={{
				tabBarIcon: ({ color, size }) => (
					<Icon name="ellipsis-v" size={20} color="#fff" />
				),
			}} />
		</Tab.Navigator>
	);
}
export default BottomTabNavigator