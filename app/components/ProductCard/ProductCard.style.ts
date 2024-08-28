import { StyleSheet } from "react-native";
import { colors } from "../Consts/Const";
import { getHeight, getWidth } from "../Helpers/Helpers";

export const styles = StyleSheet.create({
    productCard: {
      borderRadius: 4,
      width: getWidth(180),
      padding: 10,
      marginHorizontal: 5,
      justifyContent: 'flex-end',
    },
    productImage: {
      width: '100%',
      height: getHeight(150),
      borderRadius: 8,
    },
    productDetails: {
      marginTop: 10,
    },
    productTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.DarkGray,
    },
    priceContainer: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    productPrice: {
      fontSize: 14,
      color: colors.Pink,
      fontWeight: 'bold',
    },
    oldPrice: {
      fontSize: 12,
      color: colors.DarkGray,
      textDecorationLine: 'line-through',
      textDecorationColor: colors.DarkGray,
      marginRight: 5,
    },
  });
