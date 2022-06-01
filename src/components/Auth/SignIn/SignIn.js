import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import ComponentStyles, {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../../../../constants/ComponentStyles';
import {
  ALERT_TYPE,
  ERROR_MESSAGE,
  INPUT_TYPES,
} from '../../../../constants/Constants';
import Input from '../../UI/input/Input';
import * as actions from '../../../../store/actions';
import {connect} from 'react-redux';
import loginImage from '../../../../assets/login.png';
import logo from '../../../../assets/logo.png';
import {useNavigation} from '@react-navigation/native';
import {toast} from '../../../../shared/utility';
import {useNetInfo} from '@react-native-community/netinfo';

const SignIn = props => {
  const [email, setEmail] = useState('navod@gmail.com');
  const [password, setPassword] = useState('1234567890');
  const [passwordVisible, setVisibility] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const navigation = useNavigation();
  const netInfo = useNetInfo();

  const isValid = () => {
    if (email == '' && password == '') {
      toast(ERROR_MESSAGE.AUTH.ALL_FIELDS_REQUIRED, ALERT_TYPE.ERROR);
      return false;
    } else if (email === '') {
      toast(ERROR_MESSAGE.AUTH.EMPTY_EAMIL, ALERT_TYPE.ERROR);
      return false;
    } else if (password === '') {
      toast(ERROR_MESSAGE.AUTH.EMPTY_PASSWORD, ALERT_TYPE.ERROR);
      return false;
    } else {
      return true;
    }
  };

  const signInHandler = () => {
    if (!netInfo.isConnected) {
      toast(ERROR_MESSAGE.NO_INTERNET, ALERT_TYPE.ERROR);
    } else {
      if (isValid()) {
        props.onSignInHandler(email, password, rememberMe);
      }
    }
  };

  return (
    <View style={styles.parentContainer}>
      <StatusBar
        animated={true}
        backgroundColor={ComponentStyles.COLORS.RED}
        barStyle="light-content"
      />
      <View style={styles.imageContainer}>
        <Image
          source={loginImage}
          resizeMode="cover"
          style={styles.image}
          resizeMethod="scale"
        />
        <View style={styles.centerContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={logo}
              resizeMode="contain"
              style={styles.image}
              resizeMethod="scale"
            />
          </View>
        </View>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Explore today's world news</Text>
        </View>
        <View style={styles.textInputContainer}>
          <Input
            type={INPUT_TYPES.TEXT_INPUT}
            placeholder="Email address"
            iconName="person-outline"
            keyboardType="email-address"
            onChangeText={val => setEmail(val)}
            value={email}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Input
            type={INPUT_TYPES.PASSWORD_INPUT}
            placeholder="Password"
            passwordVisible={passwordVisible}
            iconName="key-outline"
            toggleVisibility={() => setVisibility(!passwordVisible)}
            onChangeText={val => setPassword(val)}
            value={password}
          />
        </View>
        <Input
          type={INPUT_TYPES.RADIO_BUTTON}
          placeholder="Remember me"
          checked={rememberMe}
          toggleCheck={() => setRememberMe(!rememberMe)}
          value={password}
        />
        {props.loading ? (
          <View
            style={{
              ...styles.loginBtn,
              backgroundColor: ComponentStyles.COLORS.WHITE,
            }}>
            <ActivityIndicator
              size={ComponentStyles.ICON_SIZE.LARGE + 1}
              color={ComponentStyles.COLORS.RED}
            />
          </View>
        ) : (
          <>
            <TouchableOpacity onPress={signInHandler} style={styles.loginBtn}>
              <Text style={styles.loginTxt}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.bottomText}>
                Don't have an account ?{' '}
                <Text style={styles.bottomInnerText}>Register Now</Text>
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignInHandler: (email, password, rememberMe) =>
      dispatch(actions.userSignIn(email, password, rememberMe)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const styles = StyleSheet.create({
  textInputContainer: {
    marginBottom: hp('2.3%'),
    height: hp('6%'),
    width: '100%',
  },

  parentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 0.5,
  },
  centerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: wp('25%'),
    height: wp('25%'),
    borderRadius: wp('100%'),
    backgroundColor: 'white',
    elevation: 8,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  subContainer: {
    flex: 0.4,
    padding: wp('4%'),
    marginTop: -20,
    backgroundColor: 'white',
    borderTopRightRadius: wp('2.5'),
    borderTopLeftRadius: wp('2.5'),
  },
  loginBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp('4%'),
    backgroundColor: ComponentStyles.COLORS.RED,
    borderRadius: wp('1.5%'),
    marginTop: hp('5%'),
  },
  loginTxt: {
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    fontSize: ComponentStyles.FONT_SIZE.MEDIUM,
    color: ComponentStyles.COLORS.WHITE,
  },
  bottomText: {
    marginTop: hp('3.5%'),
    fontFamily: ComponentStyles.FONT.MULISH_REGULAR,
    fontSize: ComponentStyles.FONT_SIZE.EX_SMALL + 1,
    color: ComponentStyles.COLORS.EX_DARK_GREY_2,
    textAlign: 'center',
  },
  bottomInnerText: {
    textDecorationLine: 'underline',
    color: ComponentStyles.COLORS.RED,
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
  },
  headingContainer: {
    marginBottom: hp('4.7%'),
  },

  heading: {
    color: ComponentStyles.COLORS.RED,
    fontSize: ComponentStyles.FONT_SIZE.MEDIUM,
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    textAlign: 'center',
  },
});
