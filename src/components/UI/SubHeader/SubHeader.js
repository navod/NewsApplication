import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../constants/ComponentStyles';
import ComponentStyles from '../../../../constants/ComponentStyles';

const SubHeader = props => {
  const Left = props.left
    ? () => props.left
    : () => <View style={{width: wp('5%')}} />;
  const Middle = props.middle
    ? () => props.middle
    : () => <View style={{width: wp('5%')}} />;
  const Right = props.right
    ? () => props.right
    : () => <View style={{width: wp('5%')}} />;

  return (
    <View style={styles.subHeader}>
      <Left />
      <Middle />
      <Right />
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  subHeader: {
    height: hp('7.5%'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: wp('6.1%'),
    paddingRight: wp('6.1%'),
    backgroundColor: ComponentStyles.COLORS.RED,
  },
});
