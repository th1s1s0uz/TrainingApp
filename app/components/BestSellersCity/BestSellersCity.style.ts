import { StyleSheet } from "react-native";
import { getHeight } from "../Helpers/Helpers";
import { colors } from "../Consts/Const";

export const styles = StyleSheet.create({
    container: {
      height: getHeight(260),
      paddingHorizontal: 6,
      marginTop: 14,
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: colors.Black,
      paddingHorizontal: 10,
      position:'absolute',
      top:0
    },
    listContainer: {
      alignItems: 'center',
      paddingTop:14
    },
  });