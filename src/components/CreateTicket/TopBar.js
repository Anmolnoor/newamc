import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopBar = ({navigation}) => {
  const onBackHandler = () => {
    navigation.goBack();
  };

  const onPressLogout = () => {
    navigation.navigate('Splash');
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={onBackHandler}>
          <Icon
            style={styles.icon}
            name="arrow-left"
            size={30}
            color="#272934"
          />
        </TouchableOpacity>
        <View style={styles.spacer}>
          <Text style={styles.title}>Tickets</Text>

          <TouchableOpacity onPress={onPressLogout} style={styles.logout}>
            <Icon size={30} color="black" name="power" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
  spacer: {
    width: '84%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    marginTop: -4,
    fontWeight: 'bold',
  },
  logout: {
    justifyContent: 'space-between',
  },
});
