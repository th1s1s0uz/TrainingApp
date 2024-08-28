import { StyleSheet } from "react-native";
import { colors } from "../Consts/Const";

export const styles = StyleSheet.create({
    card: {
      paddingBottom: 6,
      paddingTop: 14,
      borderBottomWidth:1,
      borderColor:colors.Pink,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    arrow:{
      fontWeight:'600',
      color: colors.Black,
    },
    cardText: {
      fontSize: 16,
      color: colors.Black,
    },
  });