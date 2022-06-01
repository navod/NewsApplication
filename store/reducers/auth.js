import * as actionTypes from '../actions/auth/actionTypes';

const initialState = {
  loading: false,
  signUpLoading: false,
  user: null,
  token: null,
  error: null,
  redirectHome: false,
};

const userSingInStart = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const userSignInSuccess = (state, action) => {
  return {
    ...state,
    ...action.payload,
    loading: false,
  };
};

const userSignInFail = (state, action) => {
  return {
    ...state,
    ...action.payload,
    loading: false,
  };
};

const userSingUpStart = (state, action) => {
  return {
    ...state,
    signUpLoading: true,
    error: null,
  };
};

const userSignUpSuccess = (state, action) => {
  return {
    ...state,
    ...action.payload,
    signUpLoading: false,
  };
};

const userSignUpFail = (state, action) => {
  return {
    ...state,
    ...action.payload,
    signUpLoading: false,
  };
};

const userSignOut = (state, action) => {
  return {
    ...state,
    user: null,
    token: null,
    error: null,
    loading: false,
    redirectHome: false,
  };
};

const redirectHome = (state, action) => {
  return {...state, redirectHome: true};
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGN_IN_START:
      return userSingInStart(state, action);
    case actionTypes.USER_SIGN_IN_SUCCESS:
      return userSignInSuccess(state, action);
    case actionTypes.USER_SIGN_IN_FAIL:
      return userSignInFail(state, action);

    case actionTypes.USER_SIGN_UP_START:
      return userSingUpStart(state, action);
    case actionTypes.USER_SIGN_UP_SUCCESS:
      return userSignUpSuccess(state, action);
    case actionTypes.USER_SIGN_UP_FAIL:
      return userSignUpFail(state, action);

    case actionTypes.USER_SIGN_OUT:
      return userSignOut(state, action);

    case actionTypes.REDIRECT_HOME:
      return redirectHome(state, action);

    default:
      return state;
  }
};

export default reducer;
