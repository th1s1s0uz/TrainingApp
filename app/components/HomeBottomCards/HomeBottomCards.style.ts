import { StyleSheet } from "react-native";
import { getHeight } from "../Helpers/Helpers";
import { colors } from "../Consts/Const";

export const styles = StyleSheet.create({
    container: {
      height: getHeight(360),
      paddingVertical: 10,
    },
    
    flatListContainer: {
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
    },
    title: {
      color: colors.Paper,
      fontSize: 44,
      fontWeight: '600',
      paddingBottom: 14,
      position: 'absolute',
      top: 0,
      right: 6,
      zIndex: -999,
    },
  });