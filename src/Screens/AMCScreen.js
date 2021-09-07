import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacityBase,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const AMCScreen = () => {
  const ObJ = () => {
    return (
      <TouchableWithoutFeedback
        onPress={() => console.log('This is Working...')}>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.textTitle}>Plan Name</Text>
              <Text style={styles.text}>All Products</Text>
            </View>
            <View style={styles.colR} />
            <View style={styles.col}>
              <Text style={styles.textTitle}>Duration</Text>
              <Text style={styles.text}>1 Year</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.textTitle}>Price</Text>
              <Text style={styles.text}>$ 1500</Text>
            </View>
            <View style={styles.colR} />
            <View style={styles.col}>
              <Text style={styles.textTitle}>Plan Type</Text>
              <Text style={styles.text}>All Products</Text>
            </View>
          </View>
          <View style={styles.rowL}>
            <Text style={styles.textTitle}>Description</Text>
            <Text style={styles.textD}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <ScrollView>
      <ObJ />
      <ObJ />
      <ObJ />
      <ObJ />
      <ObJ />
    </ScrollView>
  );
};

export default AMCScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#2C3A47',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  col: {
    width: '44%',
  },
  colR: {
    height: 70,
    marginTop: -10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  textTitle: {
    // marginLeft: -20,
    color: '#fff',
    fontSize: 14,
  },
  text: {
    fontSize: 22,
    marginVertical: 4,
    color: '#fff',
  },
  rowL: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  textD: {
    fontSize: 15,
    color: '#fff',
  },
});
