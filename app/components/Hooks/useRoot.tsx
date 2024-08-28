import { useRoute as useNativeRoute } from '@react-navigation/native';
import { TrainingProjectRoute, TrainingProjectStackParamList } from '../../navigation/Types/Navigaiton.types';


export const useTpRoute = <T extends keyof TrainingProjectStackParamList>() =>
  useNativeRoute<TrainingProjectRoute<T>>();
