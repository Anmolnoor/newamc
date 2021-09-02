import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Comments = ({data}) => {
  // --- make it left right looking like what's app after getting the API responses ---
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>Comments</Text>
      {/* {data.map((comment, index) => (
        <View style={styles.box}>
          <View key={index} style={styles.comment}>
            <Text style={[styles.text]}>{comment.comment}</Text>
            <View style={styles.layerBottom}>
              <Text style={[styles.userName]}>{comment.from}</Text>
              <Text style={[styles.time]}>{comment.time}</Text>
            </View>
          </View>
        </View>
      ))} */}
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  box: {
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: '#d1d1d1',
    borderRadius: 10,
    padding: 10,
  },
  layerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 17,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    fontSize: 16,
  },
});
