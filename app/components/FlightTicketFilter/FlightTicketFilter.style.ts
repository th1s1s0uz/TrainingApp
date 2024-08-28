import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../Consts/Const';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  selectionCard: {
    backgroundColor: colors.White,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 3,
    shadowColor: colors.Black,
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectiontext: {
    fontSize: 16,
    color: colors.Black,
  },
  accordion: {
    backgroundColor: colors.White,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 10,
    elevation: 3,
    shadowColor: colors.Black,
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  datePickerContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  dateInput: {
    borderBottomWidth: 1,
    borderBottomColor: colors.DarkGray,
    fontSize: 16,
    paddingVertical: 5,
    color: colors.Black,
  },
});
