import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import DateIcon from '../../assets/svg/date.svg';
import CustomDatePicker from '../DatePicker/DatePicker';
import SimpleDropdown from '../DropDown/DropDown';
import useBasketStore from '../../Store/useBasketStore';
import {styles} from '../../screens/HotelDetails/HotelDetail.style';
import InfoPopup from '../InfoPopup/InfoPopup';

interface Room {
  type: string;
  price: number;
}

interface Hotel {
  name: string;
  rooms: Room[];
}

interface HotelBookingSectionProps {
  hotel: Hotel;
}

const HotelBookingSection = ({hotel}: HotelBookingSectionProps) => {
  const [selectedRoom, setSelectedRoom] = useState(hotel.rooms[0]?.type || '');
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(2);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const guestOptions = [
    {label: '1 Person', value: 1},
    {label: '2 Person', value: 2},
    {label: '3 Person', value: 3},
    {label: '4 Person', value: 4},
  ];

  const {addProduct} = useBasketStore(state => ({
    addProduct: state.addProduct,
  }));

  useEffect(() => {
    const tomorrow = new Date(checkInDate);
    tomorrow.setDate(checkInDate.getDate() + 1);
    setCheckOutDate(tomorrow);
  }, [checkInDate]);

  const handleConfirmCheckIn = (date: Date) => {
    const today = new Date();
    if (date < today) {
      date = today;
    }
    setCheckInDate(date);
    const newCheckOutDate = new Date(date);
    newCheckOutDate.setDate(date.getDate() + 1);
    if (checkOutDate <= date) {
      setCheckOutDate(newCheckOutDate);
    }

    setIsCheckInOpen(false);
  };

  const handleConfirmCheckOut = (date: Date) => {
    const newCheckOutDate = new Date(checkInDate);
    newCheckOutDate.setDate(checkInDate.getDate() + 1);

    if (date <= checkInDate) {
      date = newCheckOutDate;
    }
    setCheckOutDate(date);
    setIsCheckOutOpen(false);
  };

  const today = new Date();
  const minCheckInDate = today;
  const minCheckOutDate = new Date(checkInDate);
  minCheckOutDate.setDate(checkInDate.getDate() + 1);

  const nights = Math.ceil(
    (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24),
  );
  const selectedRoomPrice =
    hotel.rooms.find(room => room.type === selectedRoom)?.price || 0;

  const totalCost = nights * guestCount * selectedRoomPrice;

  const handleBookNow = () => {
    addProduct({
      id: generateUniqueId(),
      name: hotel.name,
      price: totalCost,
      type: 'hotel',
      hotelName: hotel.name,
      roomType: selectedRoom,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      guestCount: guestCount,
    });
    setIsPopupVisible(true);
  };

  const generateUniqueId = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      },
    );
  };

  return (
    <View style={styles.priceCardContainer}>
        <View style={styles.roomToggleContainer}>
            {hotel.rooms.map((room, index) => (
              <Pressable
                key={index}
                style={[
                  styles.roomToggle,
                  selectedRoom === room.type && styles.roomToggleSelected,
                ]}
                onPress={() => setSelectedRoom(room.type)}>
                <Text
                  style={[
                    styles.roomToggleText,
                    selectedRoom === room.type && styles.roomToggleTextSelected,
                  ]}>
                  {room.type}
                </Text>
                <Text
                  style={[
                    styles.roomToggleText,
                    selectedRoom === room.type && styles.roomToggleTextSelected,
                  ]}>
                  ${room.price}
                </Text>
              </Pressable>
            ))}
          </View>
      <View style={styles.dateContainer}>
        <DateIcon width={20} height={20} />
        <TouchableOpacity
          onPress={() => setIsCheckInOpen(true)}
          style={styles.dateButton}>
          <Text style={{alignSelf: 'center', fontSize: 16}}>
            {checkInDate.toDateString()}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dateContainer}>
        <DateIcon width={20} height={20} />
        <TouchableOpacity
          onPress={() => setIsCheckOutOpen(true)}
          style={styles.dateButton}>
          <Text style={styles.dateText}>
            {checkOutDate.toDateString()}
          </Text>
        </TouchableOpacity>
      </View>

      <CustomDatePicker
        open={isCheckInOpen}
        date={checkInDate}
        onConfirm={handleConfirmCheckIn}
        onCancel={() => setIsCheckInOpen(false)}
        minimumDate={minCheckInDate}
      />
      <CustomDatePicker
        open={isCheckOutOpen}
        date={checkOutDate}
        onConfirm={handleConfirmCheckOut}
        onCancel={() => setIsCheckOutOpen(false)}
        minimumDate={minCheckOutDate}
      />
      <View>
        <Text style={{paddingHorizontal: 10, paddingBottom: 20}}>
          **Please check the number of guests. Guests under the age of 18
          are not allowed
        </Text>
        <SimpleDropdown
          items={guestOptions}
          placeholder="Choose number of people"
          selectedValue={guestCount}
          onValueChange={setGuestCount}
          width={'100%'}
        />
      </View>
      <View style={styles.bookingInfoContainer}>
        <TouchableOpacity
          style={styles.bookNowButton}
          onPress={handleBookNow}>
          <Text style={styles.totalCost}>${totalCost}</Text>
          <Text style={styles.bookNowButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
      <InfoPopup
        visible={isPopupVisible}
        onClose={closePopup}
        title="Successfully booked!"
        buttonText='OKAY'
      />
    </View>
  );
};

export default HotelBookingSection;
