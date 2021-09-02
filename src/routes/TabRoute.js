import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const home = () => {
  return (
    <View>
      <Text>This is the home screen</Text>
    </View>
  );
};

const amc = () => {
  return (
    <View>
      <Text>This is the AMC screen.</Text>
    </View>
  );
};

const create = () => {
  return (
    <View>
      <Text>This is the create new screen.</Text>
    </View>
  );
};

const tickets = () => {
  return (
    <View>
      <Text>This is the Ticket Screen</Text>
    </View>
  );
};

const profile = () => {
  return (
    <View>
      <Text>This is the profile screen.</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={home} />
      <Tab.Screen name="AMC" component={amc} />
      <Tab.Screen name="Create" component={create} />
      <Tab.Screen name="Tickets" component={tickets} />
      <Tab.Screen name="Profile" component={profile} />
    </Tab.Navigator>
  );
};

export default HomeTab;
