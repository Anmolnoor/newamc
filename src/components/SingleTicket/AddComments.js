import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const AddComments = ({data}) => {
  const onChangeHandleComment = () => {
    console.log('T');
  };

  //   const inputs = {
  //     placeholder: 'Your Answer',
  //     name: 'comment',
  //     value: '',
  //     onChangeText: e => setFormData({...FormData, email: e}),
  //   };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Comment</Text>
      <View style={styles.box}>
        {/* <InputComment style={styles.input} data={inputs} /> */}
        <TextInput
          style={styles.input}
          placeholder="Your Answer"
          name="answer"
        />
      </View>
      <View style={styles.btnLayer}>
        <TouchableOpacity style={styles.btns}>
          <Text style={styles.btnText}>Upload file</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btns}>
          <Text style={styles.btnText}>Post Answer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddComments;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  box: {
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: '#d1d1d1',
    borderRadius: 10,
    padding: 10,
  },
  btnLayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btns: {
    borderWidth: 1,
    padding: 8,
    width: 170,
    marginVertical: 10,
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
  },
});
