import React, { useState, useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  Animated,
} from 'react-native';
import FlyTicketsTabView from '../../components/FlightTicketTabView/FlightTicketTabView';
import { colors } from '../../components/Consts/Const';
import { flightsData } from './FlightsData';
import { styles } from './FlyTickets.style';
import FlightTicketFilter from '../../components/FlightTicketFilter/FlightTicketFilter';
import { useRoute } from '@react-navigation/native';

const FlyTickets = () => {
  const route = useRoute();
  const { fromCity, toCity, departureDate, returnDate } = route.params || {};

  const [fromCityState, setFromCityState] = useState<string>('BER');
  const [toCityState, setToCityState] = useState<string>('all');
  const [selectedDepartureDate, setSelectedDepartureDate] = useState<Date | null>(null);
  const [selectedArriveDate, setSelectedArriveDate] = useState<Date | null>(null);

  const [filteredDepartureFlights, setFilteredDepartureFlights] = useState<any[]>([]);
  const [filteredReturnFlights, setFilteredReturnFlights] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDepartureDatePickerOpen, setDepartureDatePickerOpen] = useState<boolean>(false);
  const [isArriveDatePickerOpen, setArriveDatePickerOpen] = useState<boolean>(false);
  const [departureInput, setDepartureInput] = useState<string>('');
  const [arriveInput, setArriveInput] = useState<string>('');
  const [accordionVisible, setAccordionVisible] = useState<boolean>(false);
  const animatedHeight = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (fromCity) setFromCityState(fromCity);
    if (toCity) setToCityState(toCity);
    if (departureDate) setSelectedDepartureDate(new Date(departureDate));
    if (returnDate) setSelectedArriveDate(new Date(returnDate));

    setDepartureInput(departureDate ? new Date(departureDate).toLocaleDateString() : '');
    setArriveInput(returnDate ? new Date(returnDate).toLocaleDateString() : '');

    filterFlights();
  }, [fromCity, toCity, departureDate, returnDate]);

  useEffect(() => {
    setIsLoading(true);
    filterFlights();
    setIsLoading(false);
  }, [fromCityState, toCityState, selectedDepartureDate, selectedArriveDate]);

  const filterFlights = () => {
    const departureFlights = flightsData.filter(flight => {
      if (!flight.departureDate) return false;

      const flightDepartureDate = new Date(flight.departureDate);
      const isDepartureDateMatch = !selectedDepartureDate || flightDepartureDate.toDateString() === selectedDepartureDate?.toDateString();

      return (
        (flight.from === fromCityState || fromCityState === 'all') &&
        (flight.to === toCityState || toCityState === 'all') &&
        !(fromCityState === 'BER' && toCityState === 'BER') &&
        isDepartureDateMatch
      );
    });

    const returnFlights = flightsData.filter(flight => {
      if (!flight.arrivalDate) return false;

      const flightArrivalDate = new Date(flight.arrivalDate);
      const isArrivalDateMatch = !selectedArriveDate || flightArrivalDate.toDateString() === selectedArriveDate?.toDateString();

      return (
        (flight.from === fromCityState || fromCityState === 'all') &&
        (flight.to === toCityState || toCityState === 'all') &&
        !(fromCityState === 'BER' && toCityState === 'BER') &&
        isArrivalDateMatch
      );
    });

    setFilteredDepartureFlights(departureFlights);
    setFilteredReturnFlights(returnFlights);
  };

  const handleDepartureDateConfirm = (date: Date) => {
    setSelectedDepartureDate(date);
    setDepartureDatePickerOpen(false);
    setDepartureInput(date.toLocaleDateString());
  };

  const handleArriveDateConfirm = (date: Date) => {
    setSelectedArriveDate(date);
    setArriveDatePickerOpen(false);
    setArriveInput(date.toLocaleDateString());
  };

  const toggleAccordion = () => {
    if (accordionVisible) {
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setAccordionVisible(false));
    } else {
      setAccordionVisible(true);
      Animated.timing(animatedHeight, {
        toValue: Dimensions.get('window').height * 0.2,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <FlightTicketFilter
        fromCity={fromCityState}
        toCity={toCityState}
        departureInput={departureInput}
        arriveInput={arriveInput}
        isDepartureDatePickerOpen={isDepartureDatePickerOpen}
        isArriveDatePickerOpen={isArriveDatePickerOpen}
        selectedDepartureDate={selectedDepartureDate}
        selectedArriveDate={selectedArriveDate}
        setFromCity={setFromCityState}
        setToCity={setToCityState}
        setDepartureInput={setDepartureInput}
        setArriveInput={setArriveInput}
        setDepartureDatePickerOpen={setDepartureDatePickerOpen}
        setArriveDatePickerOpen={setArriveDatePickerOpen}
        handleDepartureDateConfirm={handleDepartureDateConfirm}
        handleArriveDateConfirm={handleArriveDateConfirm}
        toggleAccordion={toggleAccordion}
        accordionVisible={accordionVisible}
        animatedHeight={animatedHeight}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.Pink} />
      ) : (
        <FlyTicketsTabView
          departureFlights={filteredDepartureFlights}
          returnFlights={filteredReturnFlights}
        />
      )}
    </View>
  );
};

export default FlyTickets;
