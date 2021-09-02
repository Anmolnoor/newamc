import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

// ------ components ------
import TopBar from '../components/Tickets/TopBar';
import TopBtn from '../components/Tickets/TopBtn';
import Loader from '../components/Loader/Loader';
import {
  SolvedList,
  PendingList,
  AllItemList,
} from '../components/Tickets/TicketLists';

//  --- Api ---
import axios from 'axios';
import NavBar from '../components/NavBar/NavBar';

const TicketScreen = ({route, navigation}) => {
  console.log('====================================');
  console.log(route);
  console.log('====================================');
  const [callApi, setCallApi] = useState(true);
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState({});

  const [activeScreen, setScreen] = useState('all');
  const userData = route?.params;
  const id = {id: userData?.user?.id};

  const LocalStorage = {
    userData: userData,
    tickets: data,
  };
  const getTickets = async formData => {
    await axios
      .post(
        'http://amc-management.protocolsolution.com/api/user/ticketdetail',
        formData,
      )
      .then(res => {
        console.log(res.data);
        setData(res.data);
        setCallApi(false);
        setLoader(!loader);
      })
      .catch(err => {
        console.log({err: err, msg: err.message});
        setData(null);
        setCallApi(false);
        setLoader(!loader);
      });
  };

  callApi && getTickets(id);
  return (
    <View style={styles.container}>
      {loader ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <TopBtn activeScreen={activeScreen} setScreen={setScreen} />
          <ScrollView>
            {
              <View style={styles.view}>
                {activeScreen === 'solved' && (
                  <SolvedList
                    data={data}
                    LocalStorage={LocalStorage}
                    navigation={navigation}
                  />
                )}
                {activeScreen === 'pending' && (
                  <PendingList
                    data={data}
                    LocalStorage={LocalStorage}
                    navigation={navigation}
                  />
                )}
                {activeScreen === 'all' && (
                  <AllItemList
                    data={data}
                    LocalStorage={LocalStorage}
                    navigation={navigation}
                  />
                )}
              </View>
            }
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default TicketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    alignSelf: 'center',
  },
  view: {
    height: '100%',
    width: '100%',
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: '#c60e16',
  },
});
