import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomButton = ({ navigation }) => {
	return <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate("Login")}>
		<View style={styles.btnView}
			<Icon name={"sign-in-alt"} size={25} color="#fff" />
		</View>
	</TouchableOpacity>
}
export default CustomButton;