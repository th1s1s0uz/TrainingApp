import { StyleSheet } from "react-native";
import { colors } from "../Consts/Const";

export const styles = StyleSheet.create({
    outerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      gap: 5,
    },
    container: {
      height: 140,
      width: '48%',
      backgroundColor: colors.Black,
      borderRadius: 10,
      padding: 10,
      justifyContent: 'space-between',
    },
    container2: {
      height: 140,
      width: '48%',
      backgroundColor: colors.Paper,
      borderRadius: 10,
      padding: 10,
      justifyContent: 'flex-end',
    },
    description1: {
      color: colors.White,
      fontSize: 22,
      fontWeight: '600',
    },
    description2: {
      color: colors.White,
      fontSize: 50,
      fontWeight: '600',
    },
    button: {
      backgroundColor: colors.Paper,
      borderRadius: 20,
      paddingVertical: 5,
      paddingHorizontal: 14,
      position: 'absolute',
      bottom: 10,
      right: 10,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: colors.Black,
      fontWeight: '600',
      fontSize: 14,
    },
    button2: {
      backgroundColor: colors.Black,
      borderRadius: 20,
      paddingVertical: 5,
      paddingHorizontal: 14,
      position: 'absolute',
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      top:10,
      right:10
    },
    buttonText2: {
      color: colors.White,
      fontWeight: '600',
      fontSize: 14,
    },
    description3:{
      color: colors.Black,
      fontSize: 22,
      fontWeight: '600',
    },
    description4: {
      color: colors.Black,
      fontSize: 50,
      fontWeight: '600',
    },
  });
  