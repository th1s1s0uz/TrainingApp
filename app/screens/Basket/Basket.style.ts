import { StyleSheet } from "react-native";
import { colors } from "../../components/Consts/Const";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.Paper,
    },
    listContainer: {
      flexGrow: 1,
    },
    totalContainer: {
      paddingBottom: 20,
      paddingTop: 20,
      backgroundColor: colors.Pink,
      alignItems: 'center',
    },
    totalText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: colors.White,
    },
  });