import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {TrainingProjectNavigation} from '../../navigation/Types/Navigaiton.types';
import {useNavigation} from '@react-navigation/native';
import BestSellersComponent from '../../components/BestSellersCity/BestSellersCity';
import {colors} from '../../components/Consts/Const';
import {bestSellingProducts} from './homeData';
import {HomeSmallCards} from '../../components/HomeSmallCards/HomeSmallCards';
import HomeBottomCards from '../../components/HomeBottomCards/HomeBottomCards';
import HomeProfileCard from '../../components/HomeProfileCard/HomeProfileCard';
import {styles} from './Home.style'

const Home = () => {
  const {navigate} = useNavigation<TrainingProjectNavigation>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={{height: 200, justifyContent: 'center', width: '100%'}}>
          <HomeProfileCard />
        </View>
        <HomeSmallCards />
        <TouchableOpacity
          style={{
            width: '90%',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
            backgroundColor: colors.DarkGray,
            marginTop: 10,
          }}>
          <Text style={{fontSize: 20, color: colors.White, fontWeight: '600'}}>
            CATCH YOUR DREAMS
          </Text>
        </TouchableOpacity>
        <BestSellersComponent
            products={bestSellingProducts}
            title={'Just For You'}
          />
          <View style={{width:'90%'}}>
          <Text style={{fontSize:14, color:colors.Paper}}>Whether in a historic city or wandering through wet and rainy streets</Text>
          </View>
        <View style={{paddingBottom: 20}}>
          <HomeBottomCards />
        </View>
      </View>
    </ScrollView>
  );
};



export default Home;
