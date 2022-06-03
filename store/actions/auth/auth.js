import {
  ALERT_TYPE,
  ERROR_CODE,
  ERROR_MESSAGE,
  ZEE_NEWS_USER_KEY,
} from '../../../constants/Constants';
import {toast} from '../../../shared/utility';
import * as actionTypes from './actionTypes';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

//sign in state methods//
const userSignInStart = () => {
  return {
    type: actionTypes.USER_SIGN_IN_START,
  };
};

const userSignInSuccess = payload => {
  return {
    type: actionTypes.USER_SIGN_IN_SUCCESS,
    payload,
  };
};

const userSignInFail = error => {
  return {
    type: actionTypes.USER_SIGN_IN_FAIL,
    payload: {error},
  };
};

export const redirectHome = () => {
  return {
    type: actionTypes.REDIRECT_HOME,
  };
};

export const userSignIn = (email, password, rememberMe, showPopup) => {
  return dispatch => {
    dispatch(userSignInStart());

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userRes => {
        if (rememberMe) {
          const asyncStorageData = {
            user: userRes.user,
            token: userRes.user.uid,
          };
          AsyncStorage.setItem(
            ZEE_NEWS_USER_KEY,
            JSON.stringify(asyncStorageData),
          )
            .then(() => {
              dispatch(
                userSignInSuccess({
                  user: userRes.user,
                  token: userRes.user.uid,
                }),
              );
              if (showPopup) {
                showPopup();
              }
              // dispatch(redirectHome());
            })
            .catch(() => {
              toast(ERROR_MESSAGE.ASYNC_STORAGE_ERROR, ALERT_TYPE.ERROR);
            });
        } else {
          dispatch(
            userSignInSuccess({user: userRes.user, token: userRes.user.uid}),
          );
          dispatch(redirectHome());
        }
      })
      .catch(error => {
        dispatch(userSignInFail(error));
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
//sign in state methods//

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

const signOut = () => {
  return {
    type: actionTypes.USER_SIGN_OUT,
  };
};

export const userSignOut = () => {
  return dispatch => {
    AsyncStorage.removeItem(ZEE_NEWS_USER_KEY);
    dispatch(signOut());
  };
};

export const tryAutoSignin = () => {
  return dispatch => {
    dispatch(userSignInStart());
    AsyncStorage.getItem(ZEE_NEWS_USER_KEY).then(data => {
      const zeeNewsUser = JSON.parse(data);
      if (zeeNewsUser) {
        dispatch(
          userSignInSuccess({
            user: zeeNewsUser.user,
            token: zeeNewsUser.token,
          }),
        );
        dispatch(redirectHome());
      } else {
        dispatch(signOut());
      }
    });
  };
};

// sign up state methods//
