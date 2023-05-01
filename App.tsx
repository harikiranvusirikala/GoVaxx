import { NavigationContainer } from "@react-navigation/native";
import { AuthStackNavigator } from "./navigation/StackNavigator";
import TabNavigator from "./navigation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};