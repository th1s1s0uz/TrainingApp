import { StyleSheet } from "react-native";
import { colors } from "../Consts/Const";

export const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.Paper,
      paddingVertical: 20,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    cardContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingHorizontal: 20,
    },
    footer: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      gap:5
    },
    socialMediasTitleContianer:{
      paddingTop:30,
      borderBottomWidth:2,
      paddingBottom:3,
      borderColor:colors.Pink
    },
    socialMediasText:{
  
    }
  });
  