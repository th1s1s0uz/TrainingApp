import { StyleSheet } from "react-native";
import { colors } from "../Consts/Const";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.Paper,
    },
    header: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.White,
      backgroundColor: colors.DarkGray,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.White,
    },
    content: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    body: {
    },
  });