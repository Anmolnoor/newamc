import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//  --- Conponents ---

import Tickets from '../Screens/TicketScreen';
import Profile from '../Screens/ProfileScreen';
import EditProfile from '../Screens/EditProfile';
import Single from '../Screens/SingleTicketScreen';
import Create from '../Screens/CreateNew';
import Home from '../Screens/Home';

const amc = () => {
  return (
    <View>
      <Text>This is the AMC screen.</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const HomeTab = ({navigation, route}) => {
  console.log('====================================');
  console.log(route);
  console.log('====================================');
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AMC" component={amc} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Tickets" component={Tickets} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeTab;
