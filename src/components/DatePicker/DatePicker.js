import React, {useState} from 'react';
import {Platform, Touchable, TouchableOpacity, View} from 'react-native';
import {StyleSheet, Text, Button} from 'react-native';
import Moment from 'moment';

import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({setFormData, FormData}) => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, newDate) => {
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
    setFormData({...FormData, dob: Moment(newDate).format('YYYY-M-D')});
    setDate(newDate);
  };

  return (
    <View style={styles.container}>
      {!isPickerShow && (
        <TouchableOpacity onPress={showPicker}>
          <Text style={styles.text}>DOB : {Moment(date).format('LL')}</Text>
        </TouchableOpacity>
      )}

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'spinner'}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    borderWidth: 1,
    marginTop: 10,
    width: 140,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#292734',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    marginTop: 12,
    borderBottomWidth: 1,
    padding: 10,
    width: 320,
    paddingLeft: 5,
  },
});

export default DatePicker;
