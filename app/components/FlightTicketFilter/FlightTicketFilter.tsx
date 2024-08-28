import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import SimpleDropdown from '../../components/DropDown/DropDown';
import CustomDatePicker from '../../components/DatePicker/DatePicker';
import { DateIcon, Location, Loop, RoadTable } from '../../assets/svg/svg';
import { colors } from '../../components/Consts/Const';
import { cities } from '../../screens/FlyTickets/FlightsData'; 
import { styles } from '../../screens/FlyTickets/FlyTickets.style';

interface FilterComponentProps {
  fromCity: string;
  toCity: string;
  departureInput: string;
  arriveInput: string;
  isDepartureDatePickerOpen: boolean;
  isArriveDatePickerOpen: boolean;
  selectedDepartureDate: Date | null;
  selectedArriveDate: Date | null;
  setFromCity: (value: string) => void;
  setToCity: (value: string) => void;
  setDepartureInput: (value: string) => void;
  setArriveInput: (value: string) => void;
  setDepartureDatePickerOpen: (open: boolean) => void;
  setArriveDatePickerOpen: (open: boolean) => void;
  handleDepartureDateConfirm: (date: Date) => void;
  handleArriveDateConfirm: (date: Date) => void;
  toggleAccordion: () => void;
  accordionVisible: boolean;
  animatedHeight: Animated.Value;
}

const FlightTicketFilter: React.FC<FilterComponentProps> = ({
  fromCity,
  toCity,
  departureInput,
  arriveInput,
  isDepartureDatePickerOpen,
  isArriveDatePickerOpen,
  selectedDepartureDate,
  selectedArriveDate,
  setFromCity,
  setToCity,
  setDepartureInput,
  setArriveInput,
  setDepartureDatePickerOpen,
  setArriveDatePickerOpen,
  handleDepartureDateConfirm,
  handleArriveDateConfirm,
  toggleAccordion,
  accordionVisible,
  animatedHeight,
}) => {
  const getCityLabel = (value: string) => {
    const city = cities.find(city => city.value === value);
    return city ? city.label : '';
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={toggleAccordion}>
        <View style={styles.selectionCard}>
          <View style={styles.cityContainer}>
            <RoadTable width={25} height={25} />
            <Text style={styles.selectiontext}>{getCityLabel(fromCity)}</Text>
            <Loop width={25} height={25} />
            <Text style={styles.selectiontext}>{getCityLabel(toCity)}</Text>
          </View>
          <View style={styles.cityContainer}>
            <DateIcon width={25} height={25} />
            <Text style={styles.selectiontext}>
              {departureInput || 'Select a Date'}
            </Text>
            <DateIcon width={25} height={25} />
            <Text style={styles.selectiontext}>
              {arriveInput || 'Select a Date'}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      {accordionVisible && (
        <Animated.View style={[styles.accordion, { height: animatedHeight }]}>
          <View style={styles.rowContainer}>
            <Location width={20} height={20} />
            <SimpleDropdown
              items={cities}
              placeholder={getCityLabel(fromCity)}
              selectedValue={fromCity}
              onValueChange={setFromCity}
              width={140}
            />
            <Text> to: </Text>
            <SimpleDropdown
              items={cities}
              placeholder={getCityLabel(toCity)}
              selectedValue={toCity}
              onValueChange={setToCity}
              width={140}
            />
          </View>
          <View style={styles.rowContainer}>
            <DateIcon width={20} height={20} />
            <TouchableOpacity
              onPress={() => setDepartureDatePickerOpen(true)}
              style={styles.datePickerContainer}
            >
              <TextInput
                style={styles.dateInput}
                placeholder="Select a Date"
                value={departureInput}
                editable={false}
                placeholderTextColor={colors.Black}
              />
            </TouchableOpacity>
            <DateIcon width={20} height={20} />
            <TouchableOpacity
              onPress={() => setArriveDatePickerOpen(true)}
              style={styles.datePickerContainer}
            >
              <TextInput
                style={styles.dateInput}
                placeholder="Select a Date"
                value={arriveInput}
                editable={false}
                placeholderTextColor={colors.Black}
              />
            </TouchableOpacity>
          </View>

          <CustomDatePicker
            open={isDepartureDatePickerOpen}
            date={selectedDepartureDate || new Date()}
            onConfirm={handleDepartureDateConfirm}
            onCancel={() => setDepartureDatePickerOpen(false)}
          />
          <CustomDatePicker
            open={isArriveDatePickerOpen}
            date={selectedArriveDate || new Date()}
            onConfirm={handleArriveDateConfirm}
            onCancel={() => setArriveDatePickerOpen(false)}
          />
        </Animated.View>
      )}
    </>
  );
};

export default FlightTicketFilter;
