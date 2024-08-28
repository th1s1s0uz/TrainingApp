import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../../components/CustomTabBar/CustomTabBar';

import Home from '../../screens/Home/Home';

import { BottomTabPaths } from '../BottomTabNavigation/types';
import Booking from '../../screens/Booking/Booking';
import FlyTickets from '../../screens/FlyTickets/FlyTickets';

const Tab = createBottomTabNavigator();

const BottomTabNavigaton = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={BottomTabPaths.FlyTickets}
        component={FlyTickets}
        options={{ tabBarLabel: 'FlyTickets', tabBarIcon: () => null }}
      />
      <Tab.Screen
        name={BottomTabPaths.Home}
        component={Home}
        options={{ tabBarLabel: 'Home', tabBarIcon: () => null }}
      />
      <Tab.Screen
        name={BottomTabPaths.Booking}
        component={Booking}
        options={{ tabBarLabel: 'Booking', tabBarIcon: () => null }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigaton;
