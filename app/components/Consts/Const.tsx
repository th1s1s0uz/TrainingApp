import { Dimensions } from 'react-native';

const colors = {
  Theme: '##DBDFD7',
  LightGray: '#F5F5F5',
  DarkGray: '#31363F',
  Dark: '#100C11',
  TransparentBacgkGround: 'rgba(0,0,0,0.4)',
  White: '#FFFFFF',
  LightWhite: '#F5F5F5',
  Black: '#0E0A0F',
  Pink: '#9381FF',
  Paper: '#D5D9D2'
};


export const nameRegex = /^(?:[a-zçıöüğşA-ZİÇÖÜĞŞ]+\s?){2,3}$/;

const { width, height } = Dimensions.get('window');

export const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const { width: deviceWidth, height: deviceHeight } = Dimensions.get('screen');

export { colors, width, height };

export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = 280;
