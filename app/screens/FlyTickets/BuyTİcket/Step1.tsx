import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../../../components/Consts/Const';
import useBasketStore from '../../../Store/useBasketStore';
import { FlightProduct } from '../../../Store/useBasketStore';
import {styles} from './Step1.style'

interface Step1Props {
  flight: Omit<FlightProduct, 'passengerName' | 'passportNumber' | 'email' | 'phone'>;
  onSuccess: () => void; 
}

const Step1 = ({ flight, onSuccess }: Step1Props) => {
  if (!flight) return null;

  const [passengerName, setPassengerName] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const isFormValid =
    passengerName !== '' &&
    passportNumber !== '' &&
    email !== '' &&
    phone !== '';

  const addProduct = useBasketStore((state) => state.addProduct);

  const generateUniqueId = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  const handleAdd = () => {
    if (isFormValid) {
      const product = {
        id: generateUniqueId(), // Burada unique ID oluşturuluyor
        name: flight.flightNumber,
        price: flight.price,
        from: flight.from,
        to: flight.to,
        departureDate: flight.departureDate,
        departureTime: flight.departureTime,
        arrivalDate: flight.arrivalDate,
        arrivalTime: flight.arrivalTime,
        passengerName,
        passportNumber,
        email,
        phone,
        type: 'flight', 
      };
      addProduct(product);
      onSuccess(); 
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Passenger Name"
          value={passengerName}
          onChangeText={setPassengerName}
        />
        <TextInput
          style={styles.input}
          placeholder="Passport Number"
          value={passportNumber}
          onChangeText={setPassportNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <TouchableOpacity
          onPress={handleAdd}
          style={[
            styles.button,
            { backgroundColor: isFormValid ? colors.Pink : colors.LightGray },
          ]}
          disabled={!isFormValid}
        >
          <Text
            style={[
              styles.buttonText,
              { color: isFormValid ? colors.White : colors.Black },
            ]}
          >
            ${flight.price}
          </Text>
          <Text
            style={[
              styles.buttonText,
              { color: isFormValid ? colors.White : colors.Black },
            ]}
          >
            ADD TO BASKET
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flightInfo}>
        <View style={styles.detailTitle}>
          <Text style={styles.detailTitleText}>FLIGHT DETAILS</Text>
        </View>
        <Text style={styles.title}>{flight.name}</Text>
        <Text style={styles.detail}>
          From: {flight.from}
        </Text>
        <Text style={styles.detail}>
          To: {flight.to}
        </Text>
        <Text style={styles.detail}>
          Departure: {flight.departureDate} {flight.departureTime}
        </Text>
        <Text style={styles.detail}>
          Arrival: {flight.arrivalDate} {flight.arrivalTime}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Step1;
