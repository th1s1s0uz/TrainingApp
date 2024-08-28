import { Dimensions, PixelRatio, Platform } from 'react-native';
const { width: screen_width, height: screen_height } = Dimensions.get('window');

const scale = screen_width / 414;
const heightScale = screen_height / 896;

export const getHeight = (size: number) => {
  const newSize = size * heightScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const getWidth = (width: number) => {
  const newWidth = width * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newWidth));
};

export const checkNumber = (desc: string) => {
  var re = /(?:[-+() ]*\d){10,13}/gm;
  var res = desc.match(re);
  return res;
};
