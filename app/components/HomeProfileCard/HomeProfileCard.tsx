import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './HomeProfilecCard.style'

const HomeProfileCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.image}></View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Hello Steve</Text>
          <Text style={styles.brandName}>Welcome to MoldyPlace</Text>
        </View>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Your MoldyPlace Balance</Text>
        <Text style={styles.price}>$73.169.56</Text>
      </View>
    </View>
  );
};

export default HomeProfileCard;
