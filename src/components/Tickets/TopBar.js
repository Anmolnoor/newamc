import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TopBar = ({navigation, data}) => {
  const onPressLogout = () => {
    navigation.navigate('Splash');
  };

  const onPressNew = () => {
    navigation.navigate('CreateNew', data);
  };
  return (
    <View style={styles.topBar}>
      <View style={styles.moveLeft}>
        <Text style={styles.title}>Tickets</Text>
      </View>
      <View style={styles.moveRight}>
        <TouchableOpacity onPress={onPressNew} style={styles.new}>
          <Icon size={30} color="#c60e16" name="library-add" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLogout} style={styles.logout}>
          <Icon size={30} color="black" name="power-settings-new" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    height: 54,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  moveRight: {
    flexDirection: 'row',
  },
  moveLeft: {
    flexDirection: 'row',
  },
  backBtn: {
    marginRight: 10,
  },
  title: {
    fontSize: 28,
    marginTop: -4,
    fontWeight: 'bold',
  },
  new: {
    marginRight: 10,
  },
  logout: {},
});
