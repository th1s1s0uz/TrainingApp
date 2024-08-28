import React, { useRef, useState } from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { FlatList, Dimensions } from 'react-native';
import FlyTicketsCard from '../../components/FlyTicketsCard/FlyTicketsCard';
import { colors } from '../../components/Consts/Const';
import BottomSheetComponent from '../BottomSheet/BottomSheet';
import Step1 from '../../screens/FlyTickets/BuyTİcket/Step1';
import InfoPopup from '../../components/InfoPopup/InfoPopup'; 

interface FlyTicketsTabViewProps {
  departureFlights: any[];
  returnFlights: any[];
}

const FlyTicketsTabView = ({ departureFlights, returnFlights }: FlyTicketsTabViewProps) => {
  const layout = Dimensions.get('window');
  const [index, setIndex] = useState<number>(0);
  const [selectedFlight, setSelectedFlight] = useState<any>(null);

  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false); 
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['70%', '95%'];

  const [routes] = useState([
    { key: 'departure', title: 'Departure' },
    { key: 'return', title: 'Arrive' },
  ]);

  const openBottomSheet = (flight) => {
    setSelectedFlight(flight);
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleSuccess = () => {
    closeBottomSheet();
    setPopupVisible(true);
  };

  const renderReturnFlights = () => (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{ paddingTop: 10, paddingBottom: 20 }}
      data={returnFlights}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <FlyTicketsCard flight={item} onAddPress={() => openBottomSheet(item)} proposal={false} />;
      }}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  );

  const renderDepartureFlights = () => (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{ paddingTop: 10, paddingBottom: 20 }}
      data={departureFlights}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <FlyTicketsCard flight={item} onAddPress={() => openBottomSheet(item)} proposal={false} />;
      }}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  );

  

  const renderScene = SceneMap({
    departure: renderDepartureFlights,
    return: renderReturnFlights,
  });

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: colors.Pink }}
            style={{ backgroundColor: colors.White }}
            labelStyle={{ color: colors.Black, fontWeight: 'bold' }}
          />
        )}
      />
      {isBottomSheetVisible && (
        <BottomSheetComponent
          ref={bottomSheetRef}
          title="Create Your Ticket"
          snapPoints={snapPoints}
          onClose={closeBottomSheet}
        >
          <Step1 flight={selectedFlight} onSuccess={handleSuccess} />
        </BottomSheetComponent>
      )}
      {isPopupVisible && (
        <InfoPopup
          visible={isPopupVisible}
          onClose={closePopup}
          title="Ticket successfully added!"
          buttonText="OK"
        />
      )}
    </>
  );
};

export default FlyTicketsTabView;
