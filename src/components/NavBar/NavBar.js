import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NavBar = ({navigation}) => {
  const onPressHome = () => {
    navigation.navigate('Home');
  };
  const onPressStore = () => {
    navigation.navigate('AMC');
  };
  const onPressCreate = () => {
    navigation.navigate('CreateNew');
  };
  const onPressTicket = () => {
    navigation.navigate('Ticket');
  };
  const onPressProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.Container}>
      <View style={styles.bar}>
        <TouchableOpacity style={styles.box} onPress={onPressHome}>
          <Icon color="white" size={35} name="home" />
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={onPressStore}>
          <Icon color="white" size={35} name="storefront" />
          <Text style={styles.text}>AMC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={onPressCreate}>
          <Icon color="white" size={35} name="add-circle-outline" />
          <Text style={styles.text}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={onPressTicket}>
          <Icon color="white" size={35} name="local-activity" />
          <Text style={styles.text}>Tickets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={onPressProfile}>
          <Icon color="white" size={35} name="account-circle" />
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  Container: {
    // flex: 1,
    height: 70,
    width: '100%',
    backgroundColor: '#2C3A47',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bar: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 12,
  },
});
