import { StyleSheet } from "react-native";
import { colors } from "../Consts/Const";

export const styles = StyleSheet.create({
    itemContainer: {
      backgroundColor: colors.White,
      borderRadius: 6,
      padding: 10,
      margin: 20,
    },
    itemDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    itemName: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    itemPrice: {
      color: colors.Black,
      fontSize: 16,
    },
    removeButton: {
      backgroundColor: 'red',
      height:50,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent:'center'
    },
    removeButtonText: {
      color: colors.White,
      fontWeight: 'bold',
      fontSize:16
    },
  });