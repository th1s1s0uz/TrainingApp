import { StyleSheet } from "react-native";
import { colors } from "../../components/Consts/Const";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: colors.White,
    },
    hotelContainer: {
      marginBottom: 20,
      backgroundColor: colors.White,
      padding: 10,
      borderBottomRightRadius: 8,
      borderBottomLeftRadius: 8,
      borderBottomWidth:1
    },
    bannerImage: {
      width: '100%',
      height: 200,
    },
    hotelName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    hotelInfo: {
      fontSize: 14,
      marginTop: 4,
    },
    hotelDescription: {
      fontSize: 14,
      marginTop: 8,
      color: '#555',
    },
    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      marginTop:20
    },
    hotelRoomContainer: {},
    hotelRoom: {
      fontSize: 14,
      color: colors.Pink,
      fontWeight:'600'
    },
    buttonContainer: {
      paddingHorizontal:20,
      paddingVertical:5,
      backgroundColor:colors.White,
      borderRadius:4,
      borderWidth:2,
      borderColor:colors.Pink
    },
    buttonText: {
      color:colors.Pink,
      fontWeight:'bold'
    },
  });