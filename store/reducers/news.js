import * as actionTypes from '../actions/news/actionTypes';

const initialState = {
  allNews: [],
  allNewsLoading: false,
  error: null,
  businessNews: [],
  businessNewsLoading: false,
  technologyNews: [],
  technologyNewsLoading: false,
  scienceNews: [],
  scienceNewsLoading: false,
  sportsNews: [],
  sportsNewsLoading: false,
  buffering: false,
};

//get and search all news methods //
const getAllNewsStart = (state, action) => {
  return {
    ...state,
    allNewsLoading: true,
    error: null,
  };
};

const getAllNewsSuccess = (state, action) => {
  return {
    ...state,
    ...action.payload,
    allNewsLoading: false,
  };
};

const getAllNewsFail = (state, action) => {
  return {
    ...state,
    ...action.payload,
    allNewsLoading: false,
  };
};
//get and search all news methods //

//get and search business news methods //
const getBusinessNewsStart = (state, action) => {
  return {
    ...state,
    businessNewsLoading: true,
    error: null,
  };
};

const getBusinessNewsSuccess = (state, action) => {
  return {
    ...state,
    ...action.payload,
    businessNewsLoading: false,
  };
};

const getBusinessNewsFail = (state, action) => {
  return {
    ...state,
    ...action.payload,
    businessNewsLoading: false,
  };
};
//get and search business news methods //

//get and search science news methods //
const getScienceNewsStart = (state, action) => {
  return {
    ...state,
    scienceNewsLoading: true,
    error: null,
  };
};

const getScienceNewsSuccess = (state, action) => {
  return {
    ...state,
    ...action.payload,
    scienceNewsLoading: false,
  };
};

const getScienceNewsFail = (state, action) => {
  return {
    ...state,
    ...action.payload,
    scienceNewsLoading: false,
  };
};
//get and search science news methods //

//get and search technology news methods //
const getTechnologyNewsStart = (state, action) => {
  return {
    ...state,
    technologyNewsLoading: true,
    error: null,
  };
};

const getTechnologyNewsSuccess = (state, action) => {
  return {
    ...state,
    ...action.payload,
    technologyNewsLoading: false,
  };
};

const getTechnologyNewsFail = (state, action) => {
  return {
    ...state,
    ...action.payload,
    technologyNewsLoading: false,
  };
};
//get and search technology news methods //

//get and search sports news methods //
const getSportsNewsStart = (state, action) => {
  return {
    ...state,
    sportsNewsLoading: true,
    error: null,
  };
};

const getSportsNewsSuccess = (state, action) => {
  return {
    ...state,
    ...action.payload,
    sportsNewsLoading: false,
  };
};

const getSportsNewsFail = (state, action) => {
  return {
    ...state,
    ...action.payload,
    sportsNewsLoading: false,
  };
};
//get and search sports news methods

const setBuffering = (state, action) => {
  return {
    ...state,
    ...action.payload,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_NEWS_START:
      return getAllNewsStart(state, action);
    case actionTypes.GET_ALL_NEWS_SUCCESS:
      return getAllNewsSuccess(state, action);
    case actionTypes.GET_ALL_NEWS_FAIL:
      return getAllNewsFail(state, action);

    case actionTypes.GET_BUSINESS_NEWS_START:
      return getBusinessNewsStart(state, action);
    case actionTypes.GET_BUSINESS_NEWS_SUCCESS:
      return getBusinessNewsSuccess(state, action);
    case actionTypes.GET_BUSINESS_NEWS_FAIL:
      return getBusinessNewsFail(state, action);

    case actionTypes.GET_TECHNOLOGY_NEWS_START:
      return getTechnologyNewsStart(state, action);
    case actionTypes.GET_TECHNOLOGY_NEWS_SUCCESS:
      return getTechnologyNewsSuccess(state, action);
    case actionTypes.GET_TECHNOLOGY_NEWS_FAIL:
      return getTechnologyNewsFail(state, action);

    case actionTypes.GET_SCIENCE_NEWS_START:
      return getScienceNewsStart(state, action);
    case actionTypes.GET_SCIENCE_NEWS_SUCCESS:
      return getScienceNewsSuccess(state, action);
    case actionTypes.GET_SCIENCE_NEWS_FAIL:
      return getScienceNewsFail(state, action);

    case actionTypes.GET_SPORTS_NEWS_START:
      return getSportsNewsStart(state, action);
    case actionTypes.GET_SPORTS_NEWS_SUCCESS:
      return getSportsNewsSuccess(state, action);
    case actionTypes.GET_SPORTS_NEWS_FAIL:
      return getSportsNewsFail(state, action);

    case actionTypes.SET_BUFFERING:
      return setBuffering(state, action);

    default:
      return state;
  }
};

export default reducer;
