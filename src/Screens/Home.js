import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BG from '../Assets/Images/homebg.png';
import PP from '../Assets/Images/pp.png';
import img from '../Assets/Images/imghome.png';
const Home = () => {
  return (
    <ScrollView>
      <ImageBackground source={BG} style={styles.container1}>
        <Image source={PP} style={styles.imagePP} width={120} height={120} />
        <Text style={styles.name}>Hi, Anmol Noor</Text>
        <Text style={styles.text}>Glad to see you again!</Text>
      </ImageBackground>
      <View style={styles.container2}>
        <Text style={styles.text1}>
          The year 2007 witnessed the birth of a visualization which was to
          impart economy with a pinnacle swiftness of innovation in contemporary
          Electronic Security and Surveillance Business. There came PROTOCOL
          SOLUTIONS and a new chapter of imparting excellence in Electronic
          Security and Surveillance System came into subsistence.
        </Text>
        <Image source={img} style={styles.img} />
        <Text style={styles.text1}>
          That was the foundation and today the road voyaged by PROTOCOL
          SOLUTIONS encompasses years of reliance, accomplishments and above all
          unlimited bonds. The bonds that speak for themselves, he relationships
          that reflect factual progress. Triumph at PROTOCOL is defined as the
          never ending smile on our dear customer’s face. At PROTOCOL SOLUTIONS
          we do not impart conception, we create endearing teams.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  imagePP: {
    borderRadius: 60,
  },
  container2: {
    flex: 1,
    marginTop: -25,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: '#000',
    fontSize: 16,
    padding: 15,
  },
});
