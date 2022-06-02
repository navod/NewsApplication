import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ComponentStyles, {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../constants/ComponentStyles';
import logo from '../../../../../assets/logo.png';
import IO from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const SuccessfullPopUp = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.parentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Success</Text>
      </View>
      <View
        style={{
          padding: wp('10%'),
          paddingTop: 0,
          alignItems: 'center',
          flex: 1,
        }}>
        <Image source={logo} style={styles.image} resizeMode="contain" />
        <Text style={styles.appName}>Zee News</Text>
        <View style={styles.confirmIconContainer}>
          <IO
            name="md-checkmark-outline"
            color={ComponentStyles.COLORS.RED}
            size={ComponentStyles.ICON_SIZE.LARGE + 30}
          />
        </View>
        <Text style={styles.successfullTxt}>
          Your account has been successfully created
        </Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            props.onClose();
            navigation.navigate('SignIn');
          }}>
          <Text style={styles.btnText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessfullPopUp;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: ComponentStyles.COLORS.RED,
  },
  image: {
    tintColor: 'white',
    width: wp('20%'),
    height: wp('7%'),
    marginTop: wp('4%'),
  },
  confirmIconContainer: {
    backgroundColor: ComponentStyles.COLORS.WHITE,
    borderRadius: wp('100%'),
    width: wp('25%'),
    height: wp('25%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  successfullTxt: {
    fontFamily: ComponentStyles.FONT.MULISH_REGULAR,
    color: ComponentStyles.COLORS.WHITE,
    fontSize: ComponentStyles.FONT_SIZE.EX_LARGE + 5,
    textAlign: 'center',
    lineHeight: 35,
    marginTop: wp('5%'),
  },
  titleContainer: {
    width: '100%',
    backgroundColor: ComponentStyles.COLORS.RED_1,
    alignItems: 'center',
    paddingVertical: wp('3%'),
  },
  title: {
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    fontSize: ComponentStyles.FONT_SIZE.MEDIUM,
    color: ComponentStyles.COLORS.WHITE,
  },
  btn: {
    backgroundColor: ComponentStyles.COLORS.RED_3,
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('1.5%'),
    paddingVertical: wp('4%'),
    elevation: 2,
  },
  btnText: {
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    fontSize: ComponentStyles.FONT_SIZE.SMALL,
    color: ComponentStyles.COLORS.WHITE,
  },
  appName: {
    marginTop: wp('2%'),
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    fontSize: ComponentStyles.FONT_SIZE.LARGE + 2,
    color: ComponentStyles.COLORS.WHITE,
    marginBottom: wp('4%'),
  },
});
