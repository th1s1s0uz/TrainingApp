import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ProductCard from '../ProductCard/ProductCard';
import { colors } from '../Consts/Const';
import { styles } from './BestSellersCity.style';

// Ürünlerin türünü tanımlayın
export interface Product {
  id: string;
  name: string;
  price: number;
}

// BestSellersComponent props türü
interface BestSellersComponentProps {
  products: Product[]; // Ürünlerin listesi
  title: string; // Başlık
}

const BestSellersComponent = ({ products, title }: BestSellersComponentProps) => {
  // item için tip belirleme
  const renderProduct = ({ item }: { item: Product }) => <ProductCard item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={{ position: 'absolute', right: 30, top: 5, zIndex: 10 }}>
        <Text style={{ color: colors.Pink, fontWeight: '600', textDecorationLine: 'underline', textDecorationColor: colors.DarkGray }}>
          See All
        </Text>
      </TouchableOpacity>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default BestSellersComponent;
