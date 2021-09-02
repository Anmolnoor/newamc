import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import bg from '../Assets/Images/bgbg.png';
import profilePic from '../Assets/Images/pp.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
const ProfileScreen = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.container1}>
        <ImageBackground style={styles.image1} source={bg}>
          <Image style={styles.image2} source={profilePic} />
          <Text style={styles.title}>Hi, Anmol Noor</Text>
          <Text style={styles.text}>Glad to see you again!</Text>
        </ImageBackground>
      </View>
      <View style={styles.container2}>
        {/* <Icon name="person" size="24" /> */}
        <Text style={styles.info}>Anmol Noor</Text>
        <Text style={styles.info}>anmolnoor59@gmail.com</Text>
        <Text style={styles.info}>MalerKotla</Text>
        <Text style={styles.info}>8872161460</Text>
        <Text style={styles.info}>1999-99-99</Text>
        <Text style={styles.info} />
      </View>
      <View style={styles.container3}>
        <View style={styles.contRow}>
          <Text style={styles.infoIcon}>t</Text>
          <Text style={styles.infoIcon}>t</Text>
          <Text style={styles.infoIcon}>t</Text>
        </View>
        <View style={styles.contRow}>
          <Text style={styles.infoIcon}>t</Text>
          <Text style={styles.infoIcon}>t</Text>
          <Text style={styles.infoIcon}>t</Text>
        </View>
        <View style={styles.spacer} />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profile: {
    flex: 1,
  },
  container1: {
    flex: 1,
    height: 300,
    backgroundColor: '#555',
  },
  image1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image2: {borderRadius: 60, width: 120, height: 120},
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '500',
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  container2: {
    flex: 1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    marginTop: -15,
    backgroundColor: '#f1f1f1',
  },
  info: {
    margin: 10,
    paddingHorizontal: 20,
    fontSize: 18,
  },
  container3: {
    flex: 1,
    marginTop: -10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: '#2C3A47',
  },
  contRow: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 20,
  },
  infoIcon: {
    marginHorizontal: 40,
    color: '#fff',
  },
  spacer: {
    margin: 20,
  },
});
