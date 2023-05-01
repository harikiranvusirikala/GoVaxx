import React from 'react'
import { Button } from 'react-native/types';

const AddMember = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  return (
    <View style={styles.container}>
      <Text>{props.show}</Text>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.show}
        onRequestClose={props.onDismiss}>
        <View style={styles.modal}>
          <View
            style={{ backgroundColor: 'white', padding: 25, borderRadius: 6 }}>
            <Text style={{ fontSize: 18 }}>Name</Text>
            <TextInput value={name} onChangeText={setName} />
            <Text style={{ fontSize: 18 }}>Age</Text>
            <TextInput
              value={age}
              onChangeText={setAge}
              keyboardType="numeric"
            />
            <Text>Gender Radio Button</Text>
            <View style={{ flex: 'row' }}>
              <Button title="CANCEL" onPress={() => {
                // hide modal
              }} />
              <Button title="ADD MEMBER" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default AddMember

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#d3d3d3',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});