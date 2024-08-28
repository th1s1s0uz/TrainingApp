import { StyleSheet } from "react-native";
import { colors } from "../Consts/Const";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 30,
      paddingTop: 10,
      backgroundColor: colors.White,
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: '40%',
    },
    image: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderRadius: 50,
      marginRight: 10,
    },
    infoContainer: {
      justifyContent: 'center',
    },
    name: {
      fontWeight: 'bold',
    },
    brandName: {
      color: colors.Pink,
    },
    balanceContainer: {
      height: '60%',
      justifyContent:'center'
    },
    balanceText:{
      fontSize:16,
    },
    price: {
      fontSize: 46,
      fontWeight:'600'
    },
  });