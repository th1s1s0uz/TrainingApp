import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../../components/CustomTabBar/CustomTabBar';

import {BottomTabPaths} from './types';
import Home from '../../screens/Home/Home';

import Booking from '../../screens/Booking/Booking';
import FlyTickets from '../../screens/FlyTickets/FlyTickets';
import { BookingICon, FlyTicketsICon, HomePageIcon } from '../../assets/svg/svg';

const Tab = createBottomTabNavigator();

const BottomTabNavigaton = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, 
      }}
      initialRouteName={BottomTabPaths.Home}
    >
      <Tab.Screen
        name={BottomTabPaths.FlyTickets}
        component={FlyTickets}
        options={{
          tabBarIcon: (props) => <FlyTicketsICon width={35} height={35} fill={props.color} />,
        }}
      />
      <Tab.Screen
        name={BottomTabPaths.Home}
        component={Home}
        options={{
          tabBarIcon: (props) => <HomePageIcon width={35} height={35} fill={props.color} />,
        }}
      />
      <Tab.Screen
        name={BottomTabPaths.Booking}
        component={Booking}
        options={{
          tabBarIcon: (props) => <BookingICon width={35} height={35} fill={props.color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigaton;