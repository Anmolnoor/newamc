import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Alert = ({msg}) => {
  return (
    <View style={styles.alertBox}>
      <Icon size={40} color="#E44C2C" name="warning" />
      <Text style={styles.alert}>{msg}</Text>
    </View>
  );
};

export default Alert;

const styles = StyleSheet.create({
  alertBox: {
    position: 'absolute',
    padding: 10,
    width: '80%',
    height: 60,
    backgroundColor: '#FBEDEA',
    borderColor: '#F3C5BB',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  alert: {
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
  },
});
