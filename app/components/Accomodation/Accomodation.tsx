import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SvgProps} from 'react-native-svg';
import SimpleDropdown from '../DropDown/DropDown';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './Accomodation.style'
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigation, BottomTabPaths } from '../../navigation/BottomTabNavigation/types';

interface NutritionCardProps {
  icon: React.FC<SvgProps>;
  title: string;
  description: string;
}

const Accomodation = ({
  icon: Icon,
  title,
  description,
}: NutritionCardProps) => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const navigation = useNavigation<BottomTabNavigation>();

  const cities = [
    { label: 'New York', value: 'new_york' },
    { label: 'Budapest', value: 'budapest' },
    { label: 'Kopenhag', value: 'kopenhag' },
    { label: 'Rio de Janeiro', value: 'rio_de_janeiro' },
    { label: 'İstanbul', value: 'istanbul' },
  ];

  const handleNext = () => {
    navigation.navigate(BottomTabPaths.Booking, { selectedCity: selectedCity || 'all' });
  };

  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon width={26} height={26} />
      </View>
      <Text style={styles.cardText}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>

      <SimpleDropdown
        items={cities}
        placeholder="Select a city"
        selectedValue={selectedCity}
        onValueChange={setSelectedCity}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Accomodation;