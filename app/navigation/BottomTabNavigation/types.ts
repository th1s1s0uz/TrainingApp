import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum BottomTabPaths {
  Home = 'Home',
  Booking = 'Booking',
  FlyTickets = 'FlyTickets',
}

export type BottomTabStackParamList = {
  [BottomTabPaths.Home]: undefined;
  [BottomTabPaths.FlyTickets]: {
    fromCity: string;
    toCity: string;
    departureDate: Date | null;
    returnDate: Date | null;
    isOneWay: boolean;
  };
  [BottomTabPaths.Booking]: {selectedCity: string};
};

export type BottomTabNavigation<
  T extends keyof BottomTabStackParamList = keyof BottomTabStackParamList,
> = NativeStackNavigationProp<BottomTabStackParamList, T>;

export type TrainingProjectRouteProp<T extends keyof BottomTabStackParamList> =
  RouteProp<BottomTabStackParamList, T>;
