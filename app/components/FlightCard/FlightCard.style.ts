import { StyleSheet} from 'react-native';
import {CARD_HEIGHT, CARD_WIDTH, colors} from '../Consts/Const';

export const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: colors.LightGray,
    marginRight: 20,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    borderLeftWidth: 4,
    borderColor: colors.Pink,
    borderRadius:6
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 6,
    backgroundColor: colors.White,
    borderRadius: 50,
  },
  cardText: {
    color: colors.Dark,
    fontSize: 18,
    fontWeight: '600',
  },
  cardDescription: {
    fontSize: 14,
    paddingTop: 12,
    color: colors.Pink,
    fontWeight:'600'
  },
  datePickerContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 14,
    gap:10,
    justifyContent:'center',
    alignItems:'center'
  },
  departureInput: {
    width: '48%',
    backgroundColor: colors.White,
    borderRadius: 5,
    fontSize: 14,
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth:1
  },
  returnInput: {
    width: '48%',
    backgroundColor: colors.White,
    borderRadius: 5,
    fontSize: 14,
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth:1

  },
  buttonContainer: {
    height: 45,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    height: 40,
    backgroundColor: colors.Black,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 5,
  },
  buttonText: {
    color: colors.White,
    fontSize: 14,
    fontWeight: '600',
  },
  oneWayButton: {
    height: 40,
    width: '40%',
    justifyContent: 'center',
    marginRight: 10,
    flexDirection:'row',
    alignItems:'center',gap:5
  },
  oneWayButtonActive: {
    backgroundColor: colors.Pink,
  },
  oneWayButtonText: {
    color: '#000',
  },
  oneWayButtonTextActive: {
    color: '#fff',
  },
  oneWaySquare: {
    width: 10,
    height: 10,
    borderWidth: 1,
    marginRight:5
  },
  dropdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%',
    paddingTop:10
  },
});
