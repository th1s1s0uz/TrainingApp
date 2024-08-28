import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TrainingProjectPaths, TrainingProjectStackParamList } from './Types/Navigaiton.types';
import DrawerTabNavigaton from './DrawerNavigaton/DrawerNavigation';
import Basket from '../screens/Basket/Basket';


const Stack = createNativeStackNavigator<TrainingProjectStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={TrainingProjectPaths.Drawer}
        component={DrawerTabNavigaton} 
      />
      <Stack.Screen
        name={TrainingProjectPaths.Basket}
        component={Basket} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
