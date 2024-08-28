import React from 'react';
import { View, Text, FlatList } from 'react-native';
import useBasketStore from '../../Store/useBasketStore';
import { colors } from '../../components/Consts/Const';
import Header from '../../components/Header/Header';
import BasketCards from '../../components/BasketCards.tsx/BasketCards';
import {styles} from './Basket.style'

const Basket = () => {
  const products = useBasketStore((state) => state.products);
  const removeProduct = useBasketStore((state) => state.removeProduct);
  const getTotalPrice = useBasketStore((state) => state.getTotalPrice);

  const handleRemove = (productId: string) => {
    removeProduct(productId);
  };

  const renderItem = ({ item }: { item: any }) => (
    <BasketCards item={item} onRemove={handleRemove} onAddPress={() =>{}} />
  );

  return (
    <View style={styles.container}>
      <Header title='Basket' bgColor={colors.Pink} titleColor={colors.White} backButtonTextColor={colors.White} />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${getTotalPrice().toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default Basket;
