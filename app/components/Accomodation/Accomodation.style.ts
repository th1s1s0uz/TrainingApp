import { Dimensions, StyleSheet } from "react-native";
import { CARD_HEIGHT, CARD_WIDTH, colors } from "../Consts/Const";

export const styles = StyleSheet.create({
    card: {
      padding: 10,
      backgroundColor: colors.Black,
      marginRight: 20,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      justifyContent: 'flex-end',
      borderLeftWidth: 4,
      borderColor: colors.Pink,
      borderRadius: 6,
    },
    iconContainer: {
      position: 'absolute',
      top: 10,
      right: 10,
      padding: 6,
      backgroundColor: colors.White,
      borderRadius: 50,
    },
    cardText: {
      color: colors.White,
      fontSize: 18,
      fontWeight: '600',
    },
    cardDescription: {
      fontSize: 14,
      paddingTop: 12,
      color: colors.White,
      fontWeight:'600',
      paddingBottom:12
    },
    selectedCityText: {
      marginTop: 10,
      color: colors.White,
    },
    buttonContainer: {
      width:'90%',
      justifyContent:'center',
      alignItems:'center',
      height:50,
      margin:5
    },
    button: {
      backgroundColor:colors.Black,
      borderWidth:1,
      borderColor:colors.White,
      justifyContent:'center',
      alignItems:'center',
      paddingVertical:10,
      paddingHorizontal:40,
      borderRadius:10
    },
    buttonText: {
      color: colors.White,
      fontWeight:'600'
    },
  });