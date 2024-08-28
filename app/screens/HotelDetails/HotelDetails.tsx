import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import { hotelsData } from '../Booking/BookingData';
import Header from '../../components/Header/Header';
import { colors } from '../../components/Consts/Const';
import { styles } from './HotelDetail.style';
import HotelBookingSection from '../../components/HotelBookingSection.tsx/HotelBookingSection';

// Hotel tipi
interface Hotel {
  id: string;
  name: string;
  rating: number;
  address: string;
  shortDescription: string;
  longDescription: string;
  images: {
    banner: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
  };
  rooms: any[]; // Specify the type of rooms if available
}

// Route parametrelerinin tipi
type HotelDetailsRouteParams = {
  id: string;
};

// Props tipi
type HotelDetailsProps = {
  route: {
    params: HotelDetailsRouteParams;
  };
};

// HotelDetails bileşeni
const HotelDetails = ({ route }: HotelDetailsProps) => {
  const { id } = route.params;
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const hotelData = hotelsData
      .flatMap(city => city.hotels)
      .find(hotel => hotel.id === id);

    setTimeout(() => {
      setHotel(hotelData || null);
      setIsLoading(false);
    }, 1000);
  }, [id]);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={colors.Pink} />
      </View>
    );
  }

  if (!hotel) return <Text>Hotel not found!</Text>;

  return (
    <View style={styles.container}>
      <Header
        title={hotel.name}
        bgColor={colors.Pink}
        titleColor={colors.White}
        backButtonTextColor={colors.White}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: hotel.images.banner }}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <View style={styles.contentContainer}>
          <Text style={styles.hotelName}>{hotel.name}</Text>
          <Text style={styles.hotelInfo}>Rating: {hotel.rating}</Text>
          <Text style={styles.hotelInfo}>Address: {hotel.address}</Text>
          <Text style={styles.hotelDescription}>{hotel.longDescription}</Text>

          <View style={styles.sliderContainer}>
            <Swiper
              style={styles.wrapper}
              autoplay={false}
              loop={true}
              showsPagination={true}
              dotStyle={styles.dotStyle}
              activeDotStyle={styles.activeDotStyle}>
              {Object.values(hotel.images)
                .slice(1)
                .map((image, index) => (
                  <View key={index} style={styles.slide}>
                    <Image source={{ uri: image }} style={styles.galleryImage} />
                  </View>
                ))}
            </Swiper>
          </View>

          <HotelBookingSection hotel={hotel} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HotelDetails;
