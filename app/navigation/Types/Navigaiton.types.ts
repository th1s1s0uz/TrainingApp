// src/navigation/types/navigation.types.ts
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export enum TrainingProjectPaths {
  ButtomTabs = 'BottomTabs',
  Drawer = 'Drawer',
  HotelDetails = 'HotelDetails',
  ContactUs = 'ContactUs',
  Basket = 'Basket'
}

export type TrainingProjectStackParamList = {
  [TrainingProjectPaths.Drawer]: undefined;
  [TrainingProjectPaths.HotelDetails]: undefined;
  [TrainingProjectPaths.ContactUs]: undefined;
  [TrainingProjectPaths.Basket]: undefined;
};

export type TrainingProjectNavigation<
  T extends keyof TrainingProjectStackParamList = keyof TrainingProjectStackParamList,
> = NativeStackNavigationProp<TrainingProjectStackParamList, T>;

export type TrainingProjectRoute<T extends keyof TrainingProjectStackParamList> = RouteProp<
  TrainingProjectStackParamList,
  T
>;
