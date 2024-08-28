import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import SimpleDropdown from '../../components/DropDown/DropDown';
import { hotelsData } from './BookingData';
import { useRoute } from '@react-navigation/native';
import { styles } from './Booking.style';
import { colors, screenWidth } from '../../components/Consts/Const';
import { TrainingProjectPaths } from '../../navigation/Types/Navigaiton.types';


const Booking = ({ navigation }) => {
  const route = useRoute(); 
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const cities = [
    { label: 'All', value: 'all' },
    { label: 'New York', value: 'new_york' },
    { label: 'Budapest', value: 'budapest' },
    { label: 'Kopenhag', value: 'kopenhag' },
    { label: 'Rio de Janeiro', value: 'rio_de_janeiro' },
    { label: 'İstanbul', value: 'istanbul' },
  ];

  useEffect(() => {
    if (route.params?.selectedCity) {
      setSelectedCity(route.params.selectedCity);
    } else {
      setSelectedCity('all');
    }

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [route.params?.selectedCity]);

  useEffect(() => {
    if (selectedCity) {
      setIsLoading(true);
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedCity]);

  const filteredHotels =
    selectedCity === 'all' || !selectedCity
      ? hotelsData.flatMap(city => city.hotels)
      : hotelsData.find(city => city.city === selectedCity)?.hotels || [];

  const handleHotelPress = (hotelId) => {
    navigation.navigate(TrainingProjectPaths.HotelDetails, { id: hotelId });
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={colors.Pink} size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{width:'100%', paddingVertical:10}}>
      <SimpleDropdown
        items={cities}
        placeholder="Select a city"
        selectedValue={selectedCity}
        onValueChange={(value) => setSelectedCity(value)}
        borderRadius={6}
        borderWidth={1}
        width={'100%'}
      />
      </View>
      <FlatList
        data={filteredHotels}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.images.banner }}
              style={styles.bannerImage}
              resizeMode="cover"
            />
            <View style={styles.hotelContainer}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', paddingBottom: 10 }}>
                <Text style={styles.hotelName}>{item.name}</Text>
                <Text>{item.rating} *</Text>
              </View>
              <Text style={styles.hotelInfo}>{item.shortDescription}</Text>
              <Text style={styles.hotelDescription}>{item.address}</Text>
              <View style={styles.bottomContainer}>
                <View style={styles.hotelRoomContainer}>
                  {item.rooms.length > 0 && (
                    <Text style={styles.hotelRoom}>
                      Starting from ${item.rooms[0].price} for night
                    </Text>
                  )}
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => handleHotelPress(item.id)}>
                  <Text style={styles.buttonText}>See Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Booking;
