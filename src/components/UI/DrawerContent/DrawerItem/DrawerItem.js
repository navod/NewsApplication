import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IO from 'react-native-vector-icons/Ionicons';
import ComponentStyles, {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../constants/ComponentStyles';

const DrawerItem = props => {
  const Icon = props.icon;
  return (
    <TouchableOpacity
      style={{
        ...styles.drawerItem,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
      }}
      onPress={props.onPress}>
      <View style={styles.leftContainer}>
        <Icon />
        <Text
          style={
            props.labelColor
              ? {...styles.label, color: props.labelColor}
              : styles.label
          }>
          {props.label}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <IO
          name="chevron-forward-outline"
          size={ComponentStyles.ICON_SIZE.SMALL}
          color={props.color ? props.color : ComponentStyles.COLORS.RED}
        />
      </View>
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  drawerItem: {
    height: hp('6%'),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
    height: '100%',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '30%',
    height: '100%',
  },

  label: {
    color: ComponentStyles.COLORS.DARK_GRAY,
    fontFamily: ComponentStyles.FONT.MULISH_REGULAR,
    fontSize: ComponentStyles.FONT_SIZE.EX_SMALL,
    marginLeft: '10%',
  },
});
