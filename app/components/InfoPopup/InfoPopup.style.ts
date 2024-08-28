import { StyleSheet } from "react-native";
import { colors } from "../Consts/Const";

export const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    popupContainer: {
      width: 300,
      padding: 20,
      borderRadius: 10,
      backgroundColor: colors.White,
      alignItems: 'center',
    },
    popupText: {
      fontSize: 16,
      marginBottom: 20,
      color: colors.Black,
    },
    button: {
      backgroundColor: colors.Pink,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 4,
    },
    buttonText: {
      color: colors.White,
      fontSize: 16,
    },
  });
  