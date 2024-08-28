import React from 'react';
import {View,  Text} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import DrawerCard from './DrawerCard';
import {BottomTabPaths} from '../../navigation/BottomTabNavigation/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Facebook,Intagram, LinkedIn, Twitter, YouTube} from '../../assets/svg/svg';
import { TrainingProjectPaths } from '../../navigation/Types/Navigaiton.types';
import {styles} from './Drawer.style'

const Drawer = (props: DrawerContentComponentProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <DrawerCard text="Home" navigateTo={BottomTabPaths.Home} />
          <DrawerCard text="Booking" navigateTo={BottomTabPaths.Booking} />
          <DrawerCard text="FlyTickets" navigateTo={BottomTabPaths.FlyTickets} />
          <DrawerCard text='Contact Us' navigateTo={TrainingProjectPaths.ContactUs} />
        </View>
        <View style={styles.footer}>
         
          <View style={styles.socialMediasTitleContianer}>
          <Text style={styles.socialMediasText}>Our Social Medias</Text>
          </View>
          <View style={{flexDirection:'row', gap:5}}>
            <TouchableOpacity>
              <Facebook width={30} height={30}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Intagram width={30} height={30}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <LinkedIn width={30} height={30}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Twitter width={30} height={30}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <YouTube width={30} height={30}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Drawer;
