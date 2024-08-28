import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../components/Consts/Const';
import { Plane2, Location, Ticket, CreditCard } from '../../assets/svg/svg';
import { styles } from './FlyTicketsCard.style';

interface FlyTicketsCardProps {
  flight: any;
  onAddPress: () => void;
  proposal?: boolean;
}

const FlyTicketsCard = ({ flight, onAddPress, proposal }: FlyTicketsCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topContainer}>
        <View style={styles.pnrContainer}>
          <View style={styles.pnrTextContainer}>
            <Text style={styles.pnrText}>PNR</Text>
          </View>
          <View style={styles.flightNumberContainer}>
            <Text style={styles.flightNumber}>{flight.flightNumber} {flight.name}</Text>
          </View>
        </View>
        <View style={styles.airCraftContainer}>
          <View style={styles.airCraftTextContainer}>
            <Text style={styles.airCraft}>{flight.aircraft}</Text>
          </View>
          <View style={styles.planeSvgContainer}>
            <Plane2 width={25} height={25} />
          </View>
        </View>
      </View>
      <View style={styles.locationContainer}>
        <View style={styles.cityContainer}>
          <Location width={25} height={25} />
          <Text style={styles.locationTexts}>
            {flight.from} → {flight.to}
          </Text>
        </View>
        <Text>{flight.airline}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 30,
          alignItems: 'center',
          borderBottomWidth: 1,
        }}>
        <View>
          <Text
            style={{ color: colors.Black, paddingHorizontal: 16, width: 100 }}>
            Departure
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          <Text style={{ color: colors.Black }}>
            {flight.departureDate} {flight.departureTime}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 30,
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text
            style={{ color: colors.Black, paddingHorizontal: 16, width: 100 }}>
            Arrival
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Text>
            {flight.arrivalDate} {flight.arrivalTime}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: colors.DarkGray,
              height: 45,
              paddingHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ticket width={25} height={25} />
          </View>
          <View
            style={{
              height: 45,
              paddingHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontWeight: '600' }}>{flight.flightDuration}</Text>
          </View>
        </View>
        {!proposal && ( 
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '50%',
              height: 45,
              borderColor: colors.DarkGray,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                width: '40%',
                textAlign: 'center',
              }}>
              ${flight.price}
            </Text>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 140,
                backgroundColor: colors.DarkGray,
                height: 45,
                flexDirection: 'row',
                gap: 5,
              }}
              onPress={onAddPress}>
              <CreditCard width={30} height={30} />
              <Text style={{ color: colors.White, fontWeight: '600' }}>ADD</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default FlyTicketsCard;
