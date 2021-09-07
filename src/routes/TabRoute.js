import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

//  --- Conponents ---

import Tickets from '../Screens/TicketScreen';
import Profile from '../Screens/ProfileScreen';
import EditProfile from '../Screens/EditProfile';
import Single from '../Screens/SingleTicketScreen';
import Create from '../Screens/CreateNew';
import Home from '../Screens/Home';
import Amc from '../Screens/AMCScreen';

const Tab = createBottomTabNavigator();

const HomeTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'AMC') {
            iconName = focused ? 'storefront' : 'storefront';
          } else if (route.name === 'Create') {
            iconName = focused ? 'add-circle-outline' : 'add-circle-outline';
          } else if (route.name === 'Tickets') {
            iconName = focused ? 'description' : 'description';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-outline' : 'person-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        keyboardHidesTabBar: true,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AMC" component={Amc} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Tickets" component={Tickets} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeTab;
