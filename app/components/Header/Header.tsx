import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {styles} from './Header.style';
import {colors} from '../Consts/Const';
import { TrainingProjectNavigation, TrainingProjectPaths } from '../../navigation/Types/Navigaiton.types';
import useBasketStore from '../../Store/useBasketStore';

interface HeaderProps {
  bgColor?: string;
  title?: string;
  titleColor?: string;
  backButtonTextColor?: string;
}

const Header: React.FC<HeaderProps> = ({
  titleColor,
  bgColor,
  title,
  backButtonTextColor,
}) => {
  const navigation = useNavigation<TrainingProjectNavigation>();
  const canGoBack = navigation.canGoBack();

  const totalQuantity = useBasketStore((state) => state.products.length);

  return (
    <SafeAreaView
      style={[styles.headerContainer, {backgroundColor: bgColor || colors.White}]}>
      <View style={[styles.container, {backgroundColor: bgColor || colors.White}]}>
        {canGoBack ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={[styles.buttonText, {color: backButtonTextColor}]}>
              Back
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Text style={styles.buttonText}>Menu</Text>
          </TouchableOpacity>
        )}

        {title ? (
          <Text style={[styles.title, {color: titleColor || colors.Black}]}>
            {title.length > 20 ? `${title.substring(0, 20)}...` : title}
          </Text>
        ) : (
          <View style={styles.insideContainer}>
            <TouchableOpacity style={styles.pointView} onPress={()=> navigation.navigate(TrainingProjectPaths.Basket)}>
              <Text style={styles.pointText}>Basket</Text>
              {totalQuantity > 0 && ( // Eğer totalQuantity 0'dan büyükse göster
                <View style={styles.quantityContainer}>
                  <Text style={styles.quantityText}>{totalQuantity}</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.notificationText}>N</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;
