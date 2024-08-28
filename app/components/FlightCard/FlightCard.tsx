import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomDatePicker from '../DatePicker/DatePicker';
import SimpleDropdown from '../DropDown/DropDown';
import { SvgProps } from 'react-native-svg';
import { colors } from '../Consts/Const';
import { styles } from './FlightCard.style';
import { BottomTabNavigation, BottomTabPaths } from '../../navigation/BottomTabNavigation/types';

export const cities = [
  { label: 'All', value: 'all' },
  { label: 'New York', value: 'JFK' },
  { label: 'Budapest', value: 'BUD' },
  { label: 'Copenhagen', value: 'CPH' },
  { label: 'Rio de Janeiro', value: 'GIG' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Berlin', value: 'BER' },
];

interface FlightCardProps {
  departureDate: Date | null;
  returnDate: Date | null;
  onDateSelect: (type: 'departure' | 'return', date: Date | null) => void;
  icon: React.FC<SvgProps>;
  title: string;
  description: string;
}

const FlightCard = ({
  icon: Icon,
  title,
  description,
  departureDate,
  returnDate,
  onDateSelect,
}: FlightCardProps) => {
  const navigation = useNavigation<BottomTabNavigation<BottomTabPaths.FlyTickets>>();
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [dateType, setDateType] = useState<'departure' | 'return' | null>(null);
  const [isOneWay, setIsOneWay] = useState(false);
  const [isCheckEnabled, setIsCheckEnabled] = useState(false);
  const [fromCity, setFromCity] = useState('BER');
  const [toCity, setToCity] = useState(cities[0].value); 

  const handleDateChange = (date: Date) => {
    if (dateType) {
      onDateSelect(dateType, date);
      console.log(`Selected ${dateType} date: ${date.toLocaleDateString()}`);
    }
    setOpenDatePicker(false);
  };

  const formatDate = (date: Date | null) => {
    return date ? date.toLocaleDateString() : '';
  };

  const handleOneWayClick = () => {
    setIsOneWay(!isOneWay);
    if (!isOneWay) {
      onDateSelect('return', null);
      console.log('One-way option selected, return date cleared.');
    }
  };

  useEffect(() => {
  
    const areDatesSelected = isOneWay ? !!departureDate : !!departureDate && !!returnDate;

    setIsCheckEnabled(areDatesSelected);
  }, [departureDate, returnDate, fromCity, toCity, isOneWay]);

  const handleCheck = () => {
    console.log('Navigating with the following data:');
    console.log(`From City: ${fromCity}`);
    console.log(`To City: ${toCity}`);
    console.log(`Departure Date: ${formatDate(departureDate)}`);
    console.log(`Return Date: ${formatDate(returnDate)}`);
    console.log(`One Way: ${isOneWay}`);

    navigation.navigate(BottomTabPaths.FlyTickets, {
      fromCity,
      toCity,
      departureDate,
      returnDate,
      isOneWay,
    });
  };

  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon width={26} height={26} />
      </View>
      <Text style={styles.cardText}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <View style={styles.dropdownRow}>
        <SimpleDropdown
          items={cities}
          placeholder="From"
          selectedValue={fromCity}
          onValueChange={(value) => {
            setFromCity(value);
            console.log(`Selected from city: ${value}`);
          }}
          width={140}
        />
        <SimpleDropdown
          items={cities}
          placeholder="To"
          selectedValue={toCity}
          onValueChange={(value) => {
            setToCity(value);
            console.log(`Selected to city: ${value}`);
          }}
          width={140}
        />
      </View>
      <View style={styles.datePickerContainer}>
        <TextInput
          style={styles.departureInput}
          placeholder="Departure"
          value={formatDate(departureDate)}
          onTouchStart={() => {
            setDateType('departure');
            setCurrentDate(departureDate || new Date());
            setOpenDatePicker(true);
          }}
        />
        <TextInput
          style={[styles.returnInput, { backgroundColor: isOneWay ? '#e0e0e0' : '#fff' }]}
          placeholder="Return"
          value={formatDate(returnDate)}
          onTouchStart={() => {
            if (!isOneWay) {
              setDateType('return');
              setCurrentDate(returnDate || new Date());
              setOpenDatePicker(true);
            }
          }}
          editable={!isOneWay}
          pointerEvents={isOneWay ? 'none' : 'auto'}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.oneWayButton} onPress={handleOneWayClick}>
          <View style={[styles.oneWaySquare, isOneWay && styles.oneWayButtonActive]} />
          <Text style={styles.oneWayButtonText}>One Way</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isCheckEnabled ? colors.Black : '#CCCCCC' },
          ]}
          onPress={isCheckEnabled ? handleCheck : undefined}
          disabled={!isCheckEnabled}
        >
          <Text style={styles.buttonText}>Check</Text>
        </TouchableOpacity>
      </View>
      <CustomDatePicker
        open={openDatePicker}
        date={currentDate}
        onConfirm={handleDateChange}
        onCancel={() => setOpenDatePicker(false)}
      />
    </View>
  );
};

export default FlightCard;
