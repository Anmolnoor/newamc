import React from 'react';
import {
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import bg from '../Assets/Images/bgbg.png';
import profilePic from '../Assets/Images/pp.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = ({navigation}) => {
  // console.log('====================================');
  // console.log({navigation});
  // console.log('====================================');
  const iconsTop = [
    {
      name: 'storefront',
      title: 'AMC',
    },
    {
      name: 'description',
      title: 'Tickets',
    },
    {
      name: 'mode-edit',
      title: 'Edit Profile',
    },
  ];

  const iconsBot = [
    {
      name: 'ios-share',
      title: 'About us',
    },
    {
      name: 'settings',
      title: 'Settings',
    },
    {
      name: 'logout',
      title: 'Logout',
    },
  ];

  const onClickInfo = title => {
    console.log('this is working...' + title);
  };

  const getBox = (name, title, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.btn}
        onPress={() => onClickInfo(title)}>
        <View key={index} style={styles.infoBox}>
          <Icon style={styles.infoIcon} name={name} size={30} />
          <Text style={styles.infoText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const info = [
    {
      name: 'person',
      title: 'Anmol Noor',
    },
    {
      name: 'mail-outline',
      title: 'anmolnoor59@gmail.com',
    },
    {
      name: 'location-city',
      title: 'MalerKotla',
    },
    {
      name: 'call',
      title: '8872161460',
    },
    {
      name: 'event',
      title: '1999-99-99',
    },
  ];

  const getInfo = (name, title, index) => {
    return (
      <View key={index} style={styles.infobBox}>
        <Icon style={styles.infobIcon} name={name} size={30} />
        <Text style={styles.info}>{title}</Text>
      </View>
    );
  };
  return (
    <ScrollView style={styles.profile}>
      <View style={styles.container1}>
        <ImageBackground style={styles.image1} source={bg}>
          <Image style={styles.image2} source={profilePic} />
          <Text style={styles.title}>Hi, Anmol Noor</Text>
          <Text style={styles.text}>Glad to see you again!</Text>
        </ImageBackground>
      </View>
      <View style={styles.container2}>
        {info.map((icon, index) => getInfo(icon.name, icon.title, index))}
        <Text style={styles.info} />
      </View>
      <View style={styles.container3}>
        <View style={styles.contRow}>
          {iconsTop.map((icon, index) => getBox(icon.name, icon.title, index))}
        </View>
        <View style={styles.contRow}>
          {iconsBot.map((icon, index) => getBox(icon.name, icon.title, index))}
        </View>
        <View style={styles.spacer} />
      </View>
    </ScrollView>
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
  },
  image1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image2: {
    borderRadius: 60,
    width: 120,
    height: 120,
  },
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
    // height: 220,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    marginTop: -15,
    padding: 15,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  info: {
    fontSize: 16,
  },
  infobIcon: {
    paddingHorizontal: 15,
  },
  container3: {
    flex: 1,
    paddingTop: 10,
    marginTop: -10,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: '#2C3A47',
  },
  contRow: {
    flexDirection: 'row',
    padding: 15,
    // margin: 10,
  },
  infoIcon: {
    marginHorizontal: '14%',
    color: '#fff',
  },
  spacer: {
    margin: 5,
  },
  infoBox: {
    alignItems: 'center',
  },
  infobBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 1,
  },

  infoText: {
    color: '#fff',
    paddingTop: 8,
  },
});
