import React from 'react';
import { View, Text, FlatList,  Dimensions } from 'react-native';
import FlightCard from '../FlightCard/FlightCard';
import { Plane, Hotel } from '../../assets/svg/svg';
import { SvgProps } from 'react-native-svg';
import Accomodation from '../Accomodation/Accomodation';
import {styles} from './HomeBottomCards.style'

type Category = {
  id: string;
  icon: React.FC<SvgProps>;
  title: string;
  description: string;
};

const HomeBottomCards = () => {
  const { width } = Dimensions.get('window');
  const cardWidth = width * 0.8; // Kart genişliği

  const [departureDate, setDepartureDate] = React.useState<Date | null>(null);
  const [returnDate, setReturnDate] = React.useState<Date | null>(null);
  const [dateType, setDateType] = React.useState<'departure' | 'return' | null>(null);

  const categoriesData: Category[] = [
    { id: '1', icon: Plane, title: 'Plan Your Flights', description: "Let’s plan your flight together! Explore discounted and last-minute deals, and let us find the best options for you." },
    { id: '2', icon: Hotel, title: 'Accomodation', description: "Explore our nutritional guides and meal plans. Find the best options for a healthy lifestyle." },
  ];

  const handleDateChange = (type: 'departure' | 'return', date: Date) => {
    if (type === 'departure') {
      setDepartureDate(date);
    } else if (type === 'return') {
      setReturnDate(date);
    }
  };

  const renderItem = ({ item }: { item: Category }) => {
    if (item.id === '1') {
      return (
        <FlightCard
          departureDate={departureDate}
          returnDate={returnDate}
          onDateSelect={handleDateChange}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      );
    } else if (item.id === '2') {
      return (
        <Accomodation
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categoriesData}
        horizontal
        pagingEnabled
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
      <Text style={styles.title}>Opportunities</Text>
    </View>
  );
};

export default HomeBottomCards;
