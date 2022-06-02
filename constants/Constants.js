import {NEWS_API_KEY} from 'react-native-dotenv';
import ComponentStyles from './ComponentStyles';

//custom input_types
export const INPUT_TYPES = {
  TEXT_INPUT: 'TEXT_INPUT',
  PASSWORD_INPUT: 'PASSWORD_INPUT',
  RADIO_BUTTON: 'RADIO_BUTTON',
};

export const BASE_URL = 'https://newsapi.org/';
export const API_KEY = '968cf576332348bf9ab2a225d0653ec5'; //api key get from .env file

export const ZEE_NEWS_USER_KEY = 'ZEE_NEWS_USER'; //key of async storage

//all success messages of this application
export const SUCCESS_MESSAGE = {
  AUTH: {
    SIGN_UP_SUCCESS: 'User account created & signed in!',
  },
};

// all error messages of this application
export const ERROR_MESSAGE = {
  SOMETHING_WENT_WRONG: 'Something went wrong',
  ASYNC_STORAGE_ERROR: 'Error occured in the local storage space',
  NO_INTERNET: 'Check your internet connectivity',
  TOO_MANY_REQUESTS:
    'You made too many requests within a window of time and have been rate limited.',

  AUTH: {
    ALREADY_HAVE_AN_ACCOUNT: 'That email address is already in use!',
    INVALID_EMAIL_ADDRESS: 'That email address is invalid!',
    EMPTY_EAMIL: 'Email address cannot be empty!',
    EMPTY_PASSWORD: 'Password cannot be empty!',
    EMPTY_USERNAME: 'Username cannot be empty!',
    EMPTY_CONFIRM_PASSWORD: 'Confirm password cannot be empty!',
    INVALID_PASSWORD: 'Your password must contain more than 8 characters',
    PASSWORD_DOES_NOT_MATCH: 'Password does not match',
    INVALID_CREDENTIONALS: 'Invalid Credentionals!',
    ALL_FIELDS_REQUIRED: 'Please fill in all the fields',
    WRONG_PASSWORD: 'The password you entered is incorrect',
  },
};

export const ERROR_CODE = {
  USER_NOT_FOUND: 'auth/user-not-found',
  INVALID_EMAIL: 'auth/invalid-email',
  WRONG_PASSWORD: 'auth/wrong-password',
  ALREADY_HAVE_ACCOUNT: 'auth/email-already-in-use',
};

export const ALERT_TYPE = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
};

export const ALERT_COLOR = {
  ERROR: ComponentStyles.COLORS.RED_2,
  SUCCESS: ComponentStyles.COLORS.GREEN,
  WARNING: ComponentStyles.COLORS.ORANGE,
};

//categories
export const CATEGORY = {
  ALL: 'all',
  BUSINESS: 'business',
  SCIENCE: 'science',
  SPORTS: 'sports',
  TECHNOLOGY: 'technology',
};
