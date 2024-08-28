import { View, Text, TouchableOpacity} from 'react-native';
import {styles} from './HomeSmallCards.style'

export const HomeSmallCards = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.description1} numberOfLines={2}>
          CRISTMASS DISCOUNT
        </Text>
        <Text style={styles.description2}>%60</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
      <Text style={styles.description4}>$145</Text>

          <Text style={styles.description3}>TRAVEL INSURANCE</Text>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText2}>See All</Text>
          </TouchableOpacity>

      </View>
    </View>
  );
};