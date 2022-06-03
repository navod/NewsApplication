import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ComponentStyles, {
  heightPercentageToDP as hp,
} from '../../../../constants/ComponentStyles';
import IO from 'react-native-vector-icons/Ionicons';

const NoContentScreen = () => {
  return (
    <View style={styles.container}>
      <IO
        name="md-warning-outline"
        size={ComponentStyles.ICON_SIZE.LARGE + 50}
        color={ComponentStyles.COLORS.GRAY}
      />
      <Text style={styles.text}>No news available</Text>
    </View>
  );
};

export default NoContentScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontFamily: ComponentStyles.FONT.MULISH_LIGHT,
    color: ComponentStyles.COLORS.GRAY,
    fontSize: ComponentStyles.FONT_SIZE.MEDIUM,
  },
});
