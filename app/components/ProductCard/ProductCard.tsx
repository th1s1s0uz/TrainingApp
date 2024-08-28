import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './ProductCard.style';

interface ProductItem {
  image: string;
  title: string;
  oldPrice?: number;
  price: number;
  discountPrice?: number;
}

interface ProductCardProps {
  item: ProductItem;
}

const ProductCard = ({item}: ProductCardProps) => (
  <TouchableOpacity style={styles.productCard}>
    <Image source={{uri: item.image}} style={styles.productImage} />
    <View style={styles.productDetails}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <View style={styles.priceContainer}>
        {item.discountPrice && (
          <Text style={styles.oldPrice}>${item.oldPrice}</Text>
        )}
        <Text style={styles.productPrice}>
          ${item.discountPrice || item.price}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ProductCard;
