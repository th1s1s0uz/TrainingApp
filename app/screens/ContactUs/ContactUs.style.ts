import { StyleSheet } from "react-native";
import { colors } from "../../components/Consts/Const";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.White,
    },
    formContainer: {
      padding: 16,
      flexGrow: 1,
    },
    description: {
      fontSize: 16,
      marginBottom: 16,
      color: colors.Black,
    },
    label: {
      fontSize: 16,
      marginVertical: 8,
      color: colors.Black,
    },
    messageInput: {
      height: 100,
      borderColor: colors.Black,
      borderWidth: 1,
      borderRadius: 4,
      paddingHorizontal: 8,
      marginBottom: 16,
      paddingTop: 8,
      textAlignVertical: 'top',
    },
    button: {
      backgroundColor: colors.Pink,
      padding: 12,
      borderRadius: 4,
      alignItems: 'center',
    },
    buttonDisabled: {
      backgroundColor: '#ccc',
    },
    buttonText: {
      color: colors.White,
      fontSize: 16,
    },
  });
  