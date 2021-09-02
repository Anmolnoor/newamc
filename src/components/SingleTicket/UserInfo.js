import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Moment from 'moment';

const UserInfo = ({LocalStorage, data}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.layer]}>
        <Text style={[styles.text]}>
          Subject : {data.subject.substring(0, 30)}
        </Text>
        {/* {LocalData.Data.status === '2' ? (
          <Text style={styles.statusSolved}>{LocalData.Data.status}</Text>
        ) : (
          <Text style={styles.statusPending}>{LocalData.Data.status}</Text>
        )} */}
      </View>
      <View style={[styles.layer]}>
        <Text style={[styles.text]}>Username : {data.name}</Text>
        <Text style={[styles.text]}>Ticket_ID : {data.id}</Text>
      </View>
      <View style={[styles.layer]}>
        <Text style={[styles.text]}>Created</Text>
        <Text style={[styles.text]}>
          {Moment(data.created_at).format('LLL')}
        </Text>
      </View>
      <View style={[styles.layer, styles.last]}>
        <Text style={[styles.text]}>Last activity</Text>
        <Text style={[styles.text]}>
          {Moment(data.updated_at).format('LLL')}
        </Text>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#d1d1d1',
  },
  layer: {
    padding: 8,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  statusPending: {
    backgroundColor: '#FBBC0430',
    padding: 3,
    color: '#FBBC04',
    marginHorizontal: 10,
  },
  statusSolved: {
    backgroundColor: '#34A85330',
    padding: 3,
    color: '#34A853',
    marginHorizontal: 10,
  },
  last: {
    borderBottomWidth: 0,
  },
});
