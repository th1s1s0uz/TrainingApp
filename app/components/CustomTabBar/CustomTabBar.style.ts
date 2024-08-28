import { StyleSheet } from "react-native";
import { colors } from "../Consts/Const";

export const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: colors.White, 
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: colors.White,
      height:60
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 10,
      height:60,
      justifyContent:'center',
      borderTopWidth:3,
      borderColor: colors.DarkGray
      
    },
    label: {
      color: colors.White, 
      fontSize: 16,
    },
    activeTab: {
      borderTopWidth:3,
      borderColor: colors.Pink,
    },

  });