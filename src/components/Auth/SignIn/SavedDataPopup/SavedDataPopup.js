import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import ComponentStyles, {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../../constants/ComponentStyles';
import IO from 'react-native-vector-icons/Ionicons';
import * as actions from '../../../../../store/actions';
import success from '../../../../../assets/success.webp';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';

const SavedDataPopup = props => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.popup}>
          <View style={styles.header}>
            <IO
              name="close-outline"
              size={ComponentStyles.ICON_SIZE.MEDIUM + 2}
              onPress={() => {
                props.onClose();
                props.onRedirectHome();
              }}
              color={ComponentStyles.COLORS.RED}
            />
          </View>
          <View style={styles.imageContainer}>
            <FastImage source={success} style={styles.image} />
          </View>
          <Text style={styles.title}>Username & Password Saved!</Text>
          <Text style={styles.description}>
            {'Now you can login easily without\nentering your credentials'}
          </Text>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              props.onClose();
              props.onRedirectHome();
            }}>
            <Text style={styles.loginTxt}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onRedirectHome: () => dispatch(actions.redirectHome()),
  };
};

export default connect(null, mapDispatchToProps)(SavedDataPopup);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  popup: {
    backgroundColor: ComponentStyles.COLORS.WHITE,
    borderRadius: hp('1.7%'),
    paddingLeft: wp('5.8%'),
    paddingRight: wp('5.8%'),
    borderWidth: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: wp('2%'),
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
  },

  image: {
    width: wp('23%'),
    height: wp('23%'),
    resizeMode: 'contain',
  },
  title: {
    fontSize: ComponentStyles.FONT_SIZE.SMALL + 1,
    color: ComponentStyles.COLORS.BLACK,
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    textAlign: 'center',
    marginBottom: hp('1.25%'),
  },
  description: {
    fontSize: ComponentStyles.FONT_SIZE.EX_SMALL + 1,
    color: ComponentStyles.COLORS.DARK_GRAY,
    fontFamily: ComponentStyles.FONT.MULISH_REGULAR,
    textAlign: 'center',
    marginBottom: hp('3.9%'),
  },
  loginBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp('4%'),
    backgroundColor: ComponentStyles.COLORS.RED,
    borderRadius: wp('1.5%'),
    marginBottom: hp('2%'),
  },
  loginTxt: {
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    fontSize: ComponentStyles.FONT_SIZE.SMALL,
    color: ComponentStyles.COLORS.WHITE,
  },
});
