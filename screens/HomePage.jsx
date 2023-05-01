import { useEffect, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddMember from '../components/AddMember';

const HomePage = ({ navigation, route }) => {
  const [location, setLocation] = useState('');
  const [dcLocations, setDcLocations] = useState();
  const [showAddMember, setShowAddMember] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('dcLocations').then(values => {
      const details = JSON.parse(values);
      const locData = details.map((v, k) => (
        <Picker.Item key={k} label={v} value={v} />
      ));
      setDcLocations(locData);
    });
  }, []);
  const addMember = () => {
    setShowAddMember(true);
  };
  const onDismiss = () => {
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.layout}>
        <Image source={require('../assets/home_screen_img.png')} style={styles.image} />
        <Text>Are You Vaccinated for COVID-19?</Text>
        <Text>Check vaccination Slots Availability based on Location</Text>
        <Picker
          style={styles.picker}
          selectedValue={location}
          dropdownIconColor="red"
          onValueChange={(lc) => setLocation(lc)}>
          <Picker.Item
            enabled={true}
            label={'Select Location'}
            value={null}
          />
          <Picker.Item label="Jaipur" value="Jaipur" />
          {dcLocations}
        </Picker>
        {location && (
          <View style={{ flex: 'column' }}>
            <View style={{ flex: 'row', alignItems: 'space-around' }}>
              <View style={{ flex: 'column' }}>
                <Text>Location</Text>
                <Text>{location}</Text>
              </View>
              <View style={{ flex: 'column' }}>
                <Text>Slots</Text>
                <Text>234</Text>
              </View>
              <Button
                title="BOOK SLOT"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          </View>
        )}
        <AddMember show={showAddMember} onDismiss={onDismiss}/>
        {route.params && route.params.isLoggedIn && (
          <Button title="+" onPress={addMember} />
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  layout: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 128,
    width: 128,
  },
  picker: {
    width: 200,
    borderColor: 'black',
    borderWidth: 3,
  },
})

export default HomePage