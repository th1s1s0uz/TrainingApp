import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';
import BottomTabNavigaton from '../BottomTabNavigation/BottomTabNavigation';
import { TrainingProjectPaths } from '../Types/Navigaiton.types';
import { colors, width } from '../../components/Consts/Const';
import HotelDetails from '../../screens/HotelDetails/HotelDetails';
import ContactUs from '../../screens/ContactUs/ContactUs';

const DrawerNavigation = createDrawerNavigator();

const DrawerTabNavigaton = () => { 
  return (
    <DrawerNavigation.Navigator
      drawerContent={props => <Drawer {...props} />}
      screenOptions={{
        header: props => <Header />,
        headerStyle: {
          backgroundColor: colors.White,
        },
        drawerType: 'front',
        headerTintColor: 'black',
        drawerStyle: {
          width: width / 1.3,
        },
      }}>
      <DrawerNavigation.Screen
        name={TrainingProjectPaths.ButtomTabs}
        component={BottomTabNavigaton} 
      />
      <DrawerNavigation.Screen
        name={TrainingProjectPaths.HotelDetails}
        component={HotelDetails}
        options={{headerShown: false}}
      />
       <DrawerNavigation.Screen
        name={TrainingProjectPaths.ContactUs}
        component={ContactUs}
        options={{headerShown: false}}
      />
    </DrawerNavigation.Navigator>
  );
};


export default DrawerTabNavigaton;
