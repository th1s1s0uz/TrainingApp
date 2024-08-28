import React from 'react';
import {View, Text} from 'react-native';
import {FlightProduct} from '../../Store/useBasketStore';
import FlyTicketsCard from '../FlyTicketsCard/FlyTicketsCard';
import {styles} from './BasketTicketProduct.style'

interface BasketTicketCardProps {
  flight: FlightProduct;
  onAddPress: () => void;
  proposal?: boolean; 
}

const BasketTicketProduct: React.FC<BasketTicketCardProps> = ({flight, proposal, onAddPress}) => (
  <View style={styles.detailsSection}>
    <View style={styles.passengerInfo}>
      <Text style={styles.passengerText}>
        Passenger: {flight.passengerName}
      </Text>
      <Text style={styles.passengerText}>
        Passport: {flight.passportNumber}
      </Text>
      <Text style={styles.passengerText}>Email: {flight.email}</Text>
      <Text style={styles.passengerText}>Phone: {flight.phone}</Text>
    </View>
    <Text style={styles.detailsTitle}>Ticket Details</Text>
    <FlyTicketsCard flight={flight} proposal={true} onAddPress={onAddPress}/>
  </View>
);

export default BasketTicketProduct;
