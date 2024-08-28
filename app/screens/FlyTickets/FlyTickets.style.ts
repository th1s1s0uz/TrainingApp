import { StyleSheet } from "react-native";
import { colors } from "../../components/Consts/Const";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.White,
    },
    contentContainer: {
      paddingHorizontal: 10,
      flex:1,
      backgroundColor:colors.White
    },
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectionCard: {
      backgroundColor: colors.White,
      padding: 15,
      justifyContent:'center',
      borderBottomWidth:1
    },
    cityContainer: {
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
    },
    selectiontext: {
      color: colors.Black,
    },
    accordion: {
      overflow: 'hidden',
      backgroundColor: colors.Paper,
      borderBottomWidth:1,
      justifyContent:'center',
      alignItems:'center',
      gap:10
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap:10
    },
    dropdownContainer: {
      height:50,
      width:130,
      justifyContent:'center',
    },
    datePickerContainer: {
      width:140,
      height:50,
      backgroundColor: colors.White,
      borderRadius:6,
      borderWidth:1,
      justifyContent:'center',
      paddingLeft:10
    },
    dateInput: {
      color: colors.Black,
      fontSize: 14,
    },
  
  });