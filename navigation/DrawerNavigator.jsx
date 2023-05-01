import React from "react";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { AuthStackNavigator, MembersStackNavigator } from './StackNavigator';
import BottomTabNavigator from './TabNavigator';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Drawer = createDrawerNavigator();
const screenOptionStyle = {
	headerShown: false
};
const selectIcon = (icon) => {
	let option = ''
		. . .
		return < Icon name = { option } size = { 15} />
}
function CustomDrawerContent(props) {
	. . .
	return (
		<DrawerContentScrollView {...props}>
			<DrawerItemList state={newState} {...rest} navigation={navigation} />
			<DrawerItem label="Logout" onPress={. . .} />
		</DrawerContentScrollView>
	);
}
const DrawerNavigator = () => {
	return (
		<Drawer.Navigator useLegacyImplementation screenOptions={screenOptionStyle} backBehavior="history"
			drawerContent={(props) => <CustomDrawerContent {...props} />}>
			<Drawer.Screen name="Auth" component={AuthStackNavigator} />
			<Drawer.Screen name="Main" component={BottomTabNavigator} />
			<Drawer.Screen name="Members" component={MembersStackNavigator} options={{
				drawerIcon: () => selectIcon('members')
			}} />
		</Drawer.Navigator>
	);
};
export default DrawerNavigator;