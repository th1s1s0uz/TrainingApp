import { useNavigation as useNativeNavigation, NavigationProp } from '@react-navigation/native';
import { TrainingProjectStackParamList } from '../../navigation/Types/Navigaiton.types';

export const useNavigation = () => {
  return useNativeNavigation<NavigationProp<TrainingProjectStackParamList>>();
};