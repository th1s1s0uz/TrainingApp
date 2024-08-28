import { StyleSheet } from "react-native";
import { colors } from "../../../components/Consts/Const";

export const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      backgroundColor: colors.Paper,
      height: '100%',
    },
    flightInfo: {
      marginTop: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    detail: {
      fontSize: 16,
    },
    form: {
      marginTop: 20,
    },
    input: {
      height: 50,
      borderColor: colors.Black,
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 8,
      borderRadius: 4,
      backgroundColor: colors.White,
    },
    button: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 50,
      flexDirection: 'row',
      borderRadius: 6,
    },
    buttonText: {
      color: colors.White,
      fontWeight: '600',
      fontSize: 16,
    },
    detailTitle: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
    },
    detailTitleText: {
      fontWeight: '600',
      fontSize: 16,
    },
  });