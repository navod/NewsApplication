import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ComponentStyles from '../../../../constants/ComponentStyles';

const BlankScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>loading....</Text>
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
});
