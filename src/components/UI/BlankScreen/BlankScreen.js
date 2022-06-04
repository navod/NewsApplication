import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import ComponentStyles, {
  widthPercentageToDP as wp,
} from '../../../../constants/ComponentStyles';
import logo from '../../../../assets/logo.png';
import FastImage from 'react-native-fast-image';

const BlankScreen = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={logo}
        tintColor={ComponentStyles.COLORS.WHITE}
        style={styles.image}
        resizeMode="contain"
      />
      <ActivityIndicator
        size={ComponentStyles.ICON_SIZE.LARGE + 1}
        color={ComponentStyles.COLORS.WHITE}
        style={{position: 'absolute', bottom: 50}}
      />
    </View>
  );
};

export default BlankScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ComponentStyles.COLORS.RED,
  },
  text: {
    fontFamily: ComponentStyles.FONT.MULISH_LIGHT,
    fontSize: ComponentStyles.FONT_SIZE.SMALL,
    color: ComponentStyles.COLORS.WHITE,
  },
  image: {
    width: wp('40%'),
    height: wp('20%'),
  },
});
