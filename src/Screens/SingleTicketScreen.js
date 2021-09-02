import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

// --- Components ---
import TopBar from '../components/SingleTicket/TopBar';
import UserInfo from '../components/SingleTicket/UserInfo';
import UserQuery from '../components/SingleTicket/UserQuery';
import StaffDetails from '../components/SingleTicket/StaffDetails';
import Comments from '../components/SingleTicket/Comments';
import AddComments from '../components/SingleTicket/AddComments';
const SingleTicketScreen = ({route, navigation}) => {
  console.log(route);

  // const userData = navigation.state.params?.userData;
  // const Data = navigation.state.params?.data;

  const LocalStorage = route?.params?.LocalStorage;
  const data = route?.params?.data;

  console.log('====================================');
  console.log(LocalStorage.tickets.staff_Details);
  console.log('====================================');

  return (
    <ScrollView>
      <TopBar navigation={navigation} />
      <UserInfo data={data} LocalStorage={LocalStorage} />
      <UserQuery data={data} />
      <StaffDetails LocalStorage={LocalStorage.tickets.staff_Details} />
      <Comments LocalStorage={LocalStorage} />
      <AddComments />
    </ScrollView>
  );
};

export default SingleTicketScreen;

const styles = StyleSheet.create({});
