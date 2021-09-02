import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserQuery = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>{data.comment}</Text>
    </View>
  );
};

export default UserQuery;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#d1d1d1',
    borderRadius: 10,
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
});
