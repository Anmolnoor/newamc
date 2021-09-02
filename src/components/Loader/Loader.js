import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
// import load from '../../../assets/images/load.gif';
// import {BlockReserveLoading} from 'react-loadingg';
// import Spinner from 'react-native-loading-spinner-overlay';

const Loader = () => {
  return (
    <View style={styles.container}>
      {/* <BlockReserveLoading />; */}
      {/* <Image source={load} style={styles.Loading} height={500} width={500} /> */}
      {/* <Spinner textContent={'Loading...'} textStyle={styles.spinnerTextStyle} /> */}
      <Text style={styles.spinnerTextStyle}>Loading...</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  spinnerTextStyle: {
    color: 'red',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
