import { StyleSheet } from "react-native";
import { colors} from "../../components/Consts/Const";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 20,
  },
  hotelName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  hotelInfo: {
    fontSize: 16,
    marginVertical: 5,
  },
  hotelDescription: {
    fontSize: 14,
    marginVertical: 10,
  },
  sliderContainer: {
    height: 200,
    marginVertical: 10,
  },
  dotStyle: {
    backgroundColor: colors.White,
  },
  activeDotStyle: {
    backgroundColor: colors.Pink,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  roomToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  roomToggle: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.LightGray,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  roomToggleSelected: {
    backgroundColor: colors.Pink,
  },
  roomToggleText: {
    fontSize: 16,
  },
  roomToggleTextSelected: {
    color: colors.White,
  },
  priceCardContainer: {
    marginVertical: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dateButton: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.LightGray,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
  },
  bookingInfoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  bookNowButton: {
    backgroundColor: colors.Pink,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    flexDirection:'row',
    justifyContent:'space-around',
    height:50
  },
  bookNowButtonText: {
    color: colors.White,
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalCost: {
    color: colors.White,
    fontSize: 18,
    fontWeight: 'bold',
  },
  wrapper:{}
});