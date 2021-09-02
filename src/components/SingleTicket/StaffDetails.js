import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StaffDetails = ({LocalStorage}) => {
  console.log({staffID: LocalStorage});
  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>Staff Name</Text>

      <Text style={[styles.text]}>
        {LocalStorage === null ? 'Not assigned' : LocalStorage.name}
      </Text>
    </View>
  );
};

export default StaffDetails;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#d1d1d1',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
});
