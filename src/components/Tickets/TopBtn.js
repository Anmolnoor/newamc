import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TopBtn = ({setScreen, activeScreen}) => {
  const onPressAll = () => {
    setScreen('all');
  };

  const onPressSolved = () => {
    setScreen('solved');
  };

  const onPressPending = () => {
    setScreen('pending');
  };

  return (
    <View style={styles.btns}>
      <TouchableOpacity style={styles.all} onPress={onPressAll}>
        <Text
          style={
            activeScreen === 'all'
              ? [styles.allText, styles.activeText]
              : [styles.allText]
          }>
          Open
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.all} onPress={onPressSolved}>
        <Text
          style={
            activeScreen === 'solved'
              ? [styles.allText, styles.activeText]
              : [styles.allText]
          }>
          Solved
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.all} onPress={onPressPending}>
        <Text
          style={
            activeScreen === 'pending'
              ? [styles.allText, styles.activeText]
              : [styles.allText]
          }>
          Pending
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopBtn;

const styles = StyleSheet.create({
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 51,
    alignSelf: 'center',
    backgroundColor: '#272934',
    justifyContent: 'space-around',
  },
  all: {
    width: 100,
  },
  allText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    padding: 10,
  },
  activeText: {
    borderRadius: 10,
    backgroundColor: '#c60e16',
    color: '#fff',
  },
});
