import {
  ALERT_TYPE,
  ERROR_CODE,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from '../../../constants/Constants';
import {toast} from '../../../shared/utility';
import * as actionTypes from './actionTypes';
import auth from '@react-native-firebase/auth';

const userSignInStart = () => {
  return {
    type: actionTypes.USER_SIGN_IN_START,
  };
};

const userSignInSuccess = userData => {
  return {
    type: actionTypes.USER_SIGN_IN_SUCCESS,
    payload: {userData},
  };
};

const userSignInFail = error => {
  return {
    type: actionTypes.USER_SIGN_IN_FAIL,
    payload: {error},
  };
};

export const userSignIn = (email, password, callback) => {
  return dispatch => {
    dispatch(userSignInStart());

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userRes => {
        dispatch(userSignInSuccess(userRes));
        callback();
      })
      .catch(error => {
        dispatch(userSignInFail());
        if (error.code === ERROR_CODE.USER_NOT_FOUND) {
          toast(ERROR_MESSAGE.AUTH.INVALID_CREDENTIONALS, ALERT_TYPE.ERROR);
        } else if (error.code === ERROR_CODE.INVALID_EMAIL) {
          toast(ERROR_MESSAGE.AUTH.INVALID_EMAIL_ADDRESS, ALERT_TYPE.ERROR);
        } else if (error.code === ERROR_CODE.WRONG_PASSWORD) {
          toast(ERROR_MESSAGE.AUTH.WRONG_PASSWORD, ALERT_TYPE.ERROR);
        }
      });
  };
};

const userSignUpStart = () => {
  return {
    type: actionTypes.USER_SIGN_UP_START,
  };
};

const userSignUpSuccess = () => {
  return {
    type: actionTypes.USER_SIGN_UP_SUCCESS,
  };
};

const userSignUpFail = error => {
  return {
    type: actionTypes.USER_SIGN_UP_FAIL,
    payload: {error},
  };
};

export const userSignUp = (email, password, userName, callback) => {
  return dispatch => {
    dispatch(userSignUpStart());

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(createUser => {
        createUser.user.updateProfile({displayName: userName});
        dispatch(userSignUpSuccess());
        callback();
      })
      .catch(error => {
        dispatch(userSignUpFail(error));
        if (error.code === ERROR_CODE.ALREADY_HAVE_ACCOUNT) {
          toast(ERROR_MESSAGE.AUTH.ALREADY_HAVE_AN_ACCOUNT, ALERT_TYPE.ERROR);
        } else if (error.code === ERROR_CODE.INVALID_EMAIL) {
          toast(ERROR_MESSAGE.AUTH.INVALID_EMAIL_ADDRESS, ALERT_TYPE.ERROR);
        }
      });
  };
};
