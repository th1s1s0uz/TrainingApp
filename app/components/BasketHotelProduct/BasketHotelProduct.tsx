import React from 'react';
import { View, Text } from 'react-native';
import { HotelProduct } from '../../Store/useBasketStore';
import {styles} from './BasketHotelProduct.style'

interface HotelDetailsProps {
  hotel: HotelProduct;
}

const HotelDetails: React.FC<HotelDetailsProps> = ({ hotel }) => (
  <View style={styles.detailsSection}>
    <Text style={styles.detailsTitle}>Hotel Details:</Text>
    <Text style={styles.detailsText}>Hotel Name: {hotel.hotelName}</Text>
    <Text style={styles.detailsText}>Room Type: {hotel.roomType}</Text>
    <Text style={styles.detailsText}>Check-In: {hotel.checkInDate.toDateString()}</Text>
    <Text style={styles.detailsText}>Check-Out: {hotel.checkOutDate.toDateString()}</Text>
    <Text style={styles.detailsText}>Guests: {hotel.guestCount}</Text>
  </View>
);

export default HotelDetails;
