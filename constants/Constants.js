import {NEWS_API_KEY} from 'react-native-dotenv';
import ComponentStyles from './ComponentStyles';

//custom input_types
export const INPUT_TYPES = {
  TEXT_INPUT: 'TEXT_INPUT',
  PASSWORD_INPUT: 'PASSWORD_INPUT',
};

export const BASE_URL = 'https://newsapi.org/';
export const API_KEY = NEWS_API_KEY; //api key get from .env file

//all success messages of this application
export const SUCCESS_MESSAGE = {
  SIGN_UP: {
    SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  },
};

// all error messages of this application
export const ERROR_MESSAGE = {
  SOMETHING_WENT_WRONG: 'Something went wrong',
  ASYNC_STORAGE_ERROR: 'Error occured in the local storage space',
  NO_INTERNET: 'Check your internet connectivity',
  TOO_MANY_REQUESTS:
    'You made too many requests within a window of time and have been rate limited.',
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
  ALL: 'ALL',
  BUSINESS: 'Business',
  SCIENCE: 'SCIENCE',
  SPORTS: 'SPORTS',
  TECHNOLOGY: 'TECHNOLOGY',
};
