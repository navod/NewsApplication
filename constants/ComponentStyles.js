import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

//passing the precentage type and set the responsive value as a pixel
export const widthPercentageToDP = percentage => {
  const perc = +percentage.split('%')[0];
  return (width * perc) / 100;
};
//passing the precentage type and set the responsive value as a pixel
export const heightPercentageToDP = percentage => {
  const perc = +percentage.split('%')[0];
  return (height * perc) / 100;
};

export default {
  COLORS: {
    DARK_BLUE: '#1E4079',
    RED: '#E93D25',
    DARK_GRAY: '#26262D',
    WHITE: '#ffffff',
    BLACK: '#000000',
    LIGHT_GRAY: '#F4F4F4',
    LIGHT_GRAY_2: '#808080',
    LIGHT_GRAY_3: '#A4A4A4',
    GREY: '#D2D2D2',
    GREEN: '#5cb85c',
    RED_2: '#ee6c4d',
    ORANGE: '#f0ad4e',
  },

  FONT: {
    MULISH_LIGHT: 'Mulish_Light',
    MULISH_REGULAR: 'Mulish_Regular',
    MULISH_BOLD: 'Mulish_Bold',
    MULISH_MEDIUM: 'Mulish_Medium',
  },

  FONT_SIZE: {
    // EX_SMALL: 13,
    EX_SMALL: heightPercentageToDP('1.5%'),
    // SMALL: 16,
    SMALL: heightPercentageToDP('1.9%'),
    // MEDIUM: 20,
    MEDIUM: heightPercentageToDP('2.3%'),
    // LARGE: 21,
    LARGE: heightPercentageToDP('2.45%'),
    // EX_LARGE: 25,
    EX_LARGE: heightPercentageToDP('2.9%'),
  },

  ICON_SIZE: {
    // EX_SMALL: 16,
    EX_SMALL: heightPercentageToDP('1.9%'),
    // SMALL: 20,
    SMALL: heightPercentageToDP('2.3%'),
    // MEDIUM: 30,
    MEDIUM: heightPercentageToDP('3.45%'),
    // LARGE: 35,
    LARGE: heightPercentageToDP('4%'),
  },
};
