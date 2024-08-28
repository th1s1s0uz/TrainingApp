import { StyleSheet } from "react-native";
import { colors } from "../Consts/Const";

export const styles = StyleSheet.create({
    cardContainer: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: colors.DarkGray,
      borderBottomColor: colors.Black,
      marginBottom: 30,
      backgroundColor:colors.White
    },
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor:colors.White
  
    },
    pnrContainer: {
      flexDirection: 'row',
      width: '40%',
      alignItems: 'center',
    },
    pnrTextContainer: {
      backgroundColor: colors.DarkGray,
      height: 30,
      justifyContent: 'center',
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    pnrText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.White,
    },
    flightNumberContainer: {
      backgroundColor: colors.Paper,
      height: 30,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    flightNumber: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.DarkGray,
    },
    airCraftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    airCraftTextContainer: {
      height: 30,
      paddingHorizontal: 20,
      backgroundColor: colors.White,
      justifyContent: 'center',
      alignItems: 'center',
    },
    airCraft: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    planeSvgContainer: {
      backgroundColor: colors.DarkGray,
      height: 30,
      justifyContent: 'center',
      width: 30,
      alignItems: 'center',
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 40,
      justifyContent: 'space-between',
    },
    cityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    locationTexts: {
      color: colors.Black,
      fontSize: 16,
    },
  });