import {StyleSheet} from 'react-native';
import {colors} from '../Consts/Const';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: colors.Paper,
    borderWidth:1,
    borderColor:colors.Pink
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.Black,
    textDecorationLine: 'underline',
    textDecorationColor: colors.Pink,
    textDecorationStyle:'double',
  },
  insideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointView: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.Black,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pointText: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.Black,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  quantityContainer: {
    borderLeftWidth: 1,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderRadius: 50,
    backgroundColor:colors.Black
  },
  quantityText: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.White,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  notificationText: {
    fontSize: 22,
    marginLeft: 15,
    color: colors.Pink,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    paddingRight: 2,
  },
  itemQuantityContainer: {
    right: 0,
    backgroundColor: colors.White,
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  itemQuantityText: {
    color: colors.Black,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  Profilecontainer: {
    flex: 1,
    justifyContent:'center',
    borderRadius:20,
    flexDirection:'row'
    
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'40%',
  },
  image: {
    width:30,
    height:30,
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  name:{
    fontWeight:'bold'
  },
  brandName:{
    color:colors.DarkGray
  },
  menuContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  infoContainer:{
width:300  }
});
