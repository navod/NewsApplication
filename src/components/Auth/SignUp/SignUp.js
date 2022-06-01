import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
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
import {useNavigation} from '@react-navigation/native';
import SuccessfullPopUp from './SuccessfullPopUp/SuccessfullPopUp';
import {toast} from '../../../../shared/utility';
import {useNetInfo} from '@react-native-community/netinfo';

const SignUp = props => {
  const navigation = useNavigation();
  const netInfo = useNetInfo();

  const [username, setUsername] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [passwordVisible, setVisibility] = useState(false);

  const [confirmPasswordVisible, setConfirmVisibility] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const isValid = () => {
    if (username === '' && password && confirmPassword && password) {
      toast(ERROR_MESSAGE.AUTH.ALL_FIELDS_REQUIRED, ALERT_TYPE.ERROR);
      return false;
    } else if (username === '') {
      toast(ERROR_MESSAGE.AUTH.EMPTY_USERNAME, ALERT_TYPE.ERROR);
      return false;
    } else if (email === '') {
      toast(ERROR_MESSAGE.AUTH.EMPTY_EAMIL, ALERT_TYPE.ERROR);
      return false;
    } else if (password === '') {
      toast(ERROR_MESSAGE.AUTH.EMPTY_PASSWORD, ALERT_TYPE.ERROR);
      return false;
    } else if (confirmPassword === '') {
      toast(ERROR_MESSAGE.AUTH.EMPTY_CONFIRM_PASSWORD, ALERT_TYPE.ERROR);
      return false;
    } else if (confirmPassword !== password) {
      toast(ERROR_MESSAGE.AUTH.PASSWORD_DOES_NOT_MATCH, ALERT_TYPE.ERROR);
      return false;
    } else if (password.length < 8) {
      toast(ERROR_MESSAGE.AUTH.INVALID_PASSWORD, ALERT_TYPE.ERROR);
      return false;
    } else {
      return true;
    }
  };
  const onSignUpHandler = () => {
    if (!netInfo.isConnected) {
      toast(ERROR_MESSAGE.NO_INTERNET, ALERT_TYPE.ERROR);
    } else {
      if (isValid()) {
        props.onSignUp(email, password, username, () => setModalVisible(true));
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

      <Modal animationType="fade" visible={modalVisible}>
        <SuccessfullPopUp onClose={() => setModalVisible(false)} />
      </Modal>

      <View style={styles.topContainer}>
        <Text style={styles.headerTxt}>Create a new account</Text>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.textInputContainer}>
          <Input
            type={INPUT_TYPES.TEXT_INPUT}
            placeholder="Username"
            iconName="person-outline"
            keyboardType="email-address"
            onChangeText={val => setUsername(val)}
            value={username}
          />
        </View>

        <View style={styles.textInputContainer}>
          <Input
            type={INPUT_TYPES.TEXT_INPUT}
            placeholder="email"
            iconName="ios-at-outline"
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

        <View style={styles.textInputContainer}>
          <Input
            type={INPUT_TYPES.PASSWORD_INPUT}
            placeholder="Confirm Password"
            passwordVisible={confirmPasswordVisible}
            iconName="key-outline"
            toggleVisibility={() =>
              setConfirmVisibility(!confirmPasswordVisible)
            }
            onChangeText={val => setConfirmPassword(val)}
            value={confirmPassword}
          />
        </View>
        {props.loading ? (
          <View
            style={{
              ...styles.signUpBtn,
              backgroundColor: ComponentStyles.COLORS.WHITE,
            }}>
            <ActivityIndicator
              size={ComponentStyles.ICON_SIZE.LARGE + 1}
              color={ComponentStyles.COLORS.RED}
            />
          </View>
        ) : (
          <>
            <TouchableOpacity
              style={styles.signUpBtn}
              onPress={() => onSignUpHandler()}>
              <Text style={styles.signUpBtnTxt}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.bottomText}>
                Already have an account ?{' '}
                <Text style={styles.bottomInnerText}>Login</Text>
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
    loading: state.auth.signUpLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: (email, password, username, callback) =>
      dispatch(actions.userSignUp(email, password, username, callback)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

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
  topContainer: {
    flex: 0.25,
    backgroundColor: ComponentStyles.COLORS.RED,
    justifyContent: 'center',
  },
  headerTxt: {
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    color: ComponentStyles.COLORS.WHITE,
    fontSize: ComponentStyles.FONT_SIZE.LARGE + 10,
    marginLeft: wp('4%'),
  },
  subContainer: {
    flex: 0.7,
    padding: wp('4%'),
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: wp('8%'),
  },
  signUpBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp('4%'),
    backgroundColor: ComponentStyles.COLORS.RED,
    borderRadius: wp('1.5%'),
    marginTop: hp('5%'),
    width: '100%',
  },
  signUpBtnTxt: {
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
    fontSize: ComponentStyles.FONT_SIZE.MEDIUM,
    color: ComponentStyles.COLORS.WHITE,
  },
  bottomText: {
    marginTop: hp('3.5%'),
    fontFamily: ComponentStyles.FONT.MULISH_REGULAR,
    fontSize: ComponentStyles.FONT_SIZE.EX_SMALL + 1,
    color: ComponentStyles.COLORS.EX_DARK_GREY_2,
    // textAlign: 'center',
  },
  bottomInnerText: {
    textDecorationLine: 'underline',
    color: ComponentStyles.COLORS.RED,
    fontFamily: ComponentStyles.FONT.MULISH_BOLD,
  },
});
