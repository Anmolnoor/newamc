import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// --- Assets ---

import LOGO from '../Assets/Images/logo.png';

const SplashScreen = ({navigation}) => {
  const login = () => {
    console.log('login');
    navigation.navigate('SignIn');
  };
  const register = () => {
    console.log('register');
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Image source={LOGO} style={styles.image} />
      <TouchableOpacity onPress={login} style={styles.btn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={register} style={styles.btn}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 240,
  },
  btn: {
    width: 200,
    padding: 8,
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: '#c60E16',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
});
