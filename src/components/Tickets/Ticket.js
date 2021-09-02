import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Moment from 'moment';

Moment.locale('en');

const Ticket = ({LocalStorage, data, navigation}) => {
  const onPress = () => {
    navigation.navigate('SingleTicket', {LocalStorage, data});
    console.log('this is working');
  };

  // console.log('====================================');
  // console.log({
  //   l: LocalStorage,
  // });
  // console.log('====================================');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.layerone}>
          <Text style={styles.name}>
            Subject : {data?.subject.substring(0, 27)}
          </Text>
          {/* {data.status === '2' ? (
            <Text style={styles.statusSolved}>{data.status}</Text>
          ) : (
            <Text style={styles.statusPending}>{data.status}</Text>
          )} */}
        </View>
        <Text style={styles.date}>{Moment(data.created_at).format('LLL')}</Text>
        <View style={styles.layerTwo}>
          <Text style={styles.subject}>Username : {data?.name}</Text>
          <Text style={styles.btn}>
            <Icon size={30} color="#c60e16" name="arrow-right-bold" />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderWidth: 1,
    marginVertical: 8,
    borderRadius: 10,
    borderColor: '#c60e16',
  },
  name: {
    fontSize: 18,
    marginVertical: 8,
    marginLeft: 10,
  },
  statusPending: {
    backgroundColor: '#FBBC0430',
    padding: 6,
    color: '#FBBC04',
    marginHorizontal: 10,
  },
  statusSolved: {
    backgroundColor: '#34A85330',
    padding: 6,
    color: '#34A853',
    marginHorizontal: 10,
  },
  date: {
    fontSize: 20,
    marginTop: -8,
    marginLeft: 14,
  },
  layerone: {
    margin: 4,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  layerTwo: {
    flexDirection: 'row',
    margin: 6,
  },
  subject: {
    marginLeft: 10,
    width: 290,
    fontSize: 18,
  },
  btn: {
    paddingLeft: 4,
    marginBottom: 5,
  },
});
