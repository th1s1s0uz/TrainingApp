import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Product, FlightProduct, HotelProduct } from '../../Store/useBasketStore';
import BasketTicketProduct from '../BasketTicketProduct/BasketTicketProduct';
import HotelDetails from '../BasketHotelProduct/BasketHotelProduct';
import { styles } from './BasketCards.style';

interface BasketTicketCardProps {
  item: Product;
  onRemove: (productId: string) => void;
  onAddPress: () => void;
}

const BasketCards = ({ item, onRemove, onAddPress }: BasketTicketCardProps) => {
  if (!item || !item.type) {
    return null;
  }

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
      {item.type === 'flight' && (
        <BasketTicketProduct flight={item as FlightProduct} onAddPress={onAddPress} />
      )}
      {item.type === 'hotel' && <HotelDetails hotel={item as HotelProduct} />}
      <TouchableOpacity
        onPress={() => onRemove(item.id)}
        style={styles.removeButton}
      >
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketCards;
