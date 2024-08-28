import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabStackParamList } from '../../navigation/BottomTabNavigation/types';
import { styles } from './DrawerCard.style';

// `navigateTo` için geçerli ekran isimlerini belirtin
type DrawerCardNavigationProp = NavigationProp<BottomTabStackParamList>;

interface DrawerCardProps {
  text: string;
  navigateTo: keyof BottomTabStackParamList; 
}

const DrawerCard = ({ text, navigateTo }: DrawerCardProps) => {
  const navigation = useNavigation<DrawerCardNavigationProp>();

  const handlePress = () => {
    navigation.navigate(navigateTo); 
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text style={styles.cardText}>{text}</Text>
      <Text style={styles.arrow}>&gt;</Text>
    </TouchableOpacity>
  );
};

export default DrawerCard;
