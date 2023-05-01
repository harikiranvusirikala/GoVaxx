import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { FlatList, RefreshControl, View } from 'react-native'

const Members = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'John',
      age: 35,
      gender: 'Male'
    },
    {
      id: 2,
      name: 'Alice',
      age: 32,
      gender: 'Female'
    }
  ]);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    AsyncStorage.getItem('members')
      .then(res => {
        console.log(res);
        setMembers(JSON.parse(res));
        setRefreshing(false);
      })
  }
  return (
    <FlatList
      data={members}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <View style={styles.container} key={index}>
          ...
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />
  )
}

export default Members;