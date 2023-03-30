import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export function List({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});
