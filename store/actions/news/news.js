import {axiosNews} from '../../../axios';
import {
  ALERT_TYPE,
  API_KEY,
  CATEGORY,
  ERROR_MESSAGE,
} from '../../../constants/Constants';
import {toast} from '../../../shared/utility';
import * as actionTypes from './actionTypes';

export const setBuffering = buffering => {
  return {
    type: actionTypes.SET_BUFFERING,
    payload: {buffering},
  };
};

///  get,search all news methods ///
const getAllNewsStart = () => {
  return {
    type: actionTypes.GET_ALL_NEWS_START,
  };
};

const getAllNewsSuccess = allNews => {
  return {
    type: actionTypes.GET_ALL_NEWS_SUCCESS,
    payload: {allNews},
  };
};

const getAllNewsFail = error => {
  return {
    type: actionTypes.GET_ALL_NEWS_FAIL,
    payload: {error},
  };
};

export const getAllNews = callback => {
  return dispatch => {
    dispatch(getAllNewsStart());
    axiosNews
      .get('/v2/top-headlines', {
        headers: {authorization: API_KEY},
        params: {
          country: 'us',
          // category: 'health',
          // q:"what"
        },
      })
      .then(newsRes => {
        dispatch(getAllNewsSuccess(newsRes.data.articles));
        if (callback) {
          callback();
        }
      })
      .catch(newsErr => {
        dispatch(getAllNewsFail(newsErr));

        if (newsErr.response.status === 429) {
          toast(ERROR_MESSAGE.TOO_MANY_REQUESTS, ALERT_TYPE.ERROR);
        } else {
          toast(ERROR_MESSAGE.SOMETHING_WENT_WRONG, ALERT_TYPE.ERROR);
        }
      });
  };
};

export const searchAllNews = searchText => {
  return dispatch => {
    dispatch(getAllNewsStart());
    axiosNews
      .get('/v2/top-headlines', {
        headers: {authorization: API_KEY},
        params: {
          page: 1,
          country: 'us',
          // category: 'health',
          q: searchText,
        },
      })
      .then(newsRes => {
        dispatch(getAllNewsSuccess(newsRes.data.articles));
      })
      .catch(newsErr => {
        dispatch(getAllNewsFail(newsErr));
        if (newsErr.response.status === 429) {
          toast(ERROR_MESSAGE.TOO_MANY_REQUESTS, ALERT_TYPE.ERROR);
        } else {
          toast(ERROR_MESSAGE.SOMETHING_WENT_WRONG, ALERT_TYPE.ERROR);
        }
      });
  };
};
///  get and search all news methods ///

///  get and search business news methods ///
const getBusinessNewsStart = () => {
  return {
    type: actionTypes.GET_BUSINESS_NEWS_START,
  };
};

const getBusinessNewsSuccess = businessNews => {
  return {
    type: actionTypes.GET_BUSINESS_NEWS_SUCCESS,
    payload: {businessNews},
  };
};

const getBusinessNewsFail = error => {
  return {
    type: actionTypes.GET_BUSINESS_NEWS_FAIL,
    payload: {error},
  };
};

export const getBusinessNews = callback => {
  return dispatch => {
    dispatch(getBusinessNewsStart());
    axiosNews
      .get('/v2/top-headlines', {
        headers: {authorization: API_KEY},
        params: {
          page: 1,
          // country: 'us',
          category: CATEGORY.BUSINESS,
        },
      })
      .then(newsRes => {
        dispatch(getBusinessNewsSuccess(newsRes.data.articles));
        if (callback) {
          callback();
        }
      })
      .catch(newsErr => {
        dispatch(getBusinessNewsFail(newsErr));
        if (newsErr.response.status === 429) {
          toast(ERROR_MESSAGE.TOO_MANY_REQUESTS, ALERT_TYPE.ERROR);
        } else {
          toast(ERROR_MESSAGE.SOMETHING_WENT_WRONG, ALERT_TYPE.ERROR);
        }
      });
  };
};

export const searchBusinessNews = searchText => {
  return dispatch => {
    dispatch(getBusinessNewsStart());
    axiosNews
      .get('/v2/top-headlines', {
        headers: {authorization: API_KEY},
        params: {
          page: 1,
          // country: 'us',
          category: CATEGORY.BUSINESS,
          q: searchText,
        },
      })
      .then(newsRes => {
        dispatch(getBusinessNewsSuccess(newsRes.data.articles));
      })
      .catch(newsErr => {
        dispatch(getBusinessNewsFail(newsErr));
        if (newsErr.response.status === 429) {
          toast(ERROR_MESSAGE.TOO_MANY_REQUESTS, ALERT_TYPE.ERROR);
        } else {
          toast(ERROR_MESSAGE.SOMETHING_WENT_WRONG, ALERT_TYPE.ERROR);
        }
      });
  };
};
///  get and search business news methods ///

///  get and search technology news methods ///
const getTechnologyNewsStart = () => {
  return {
    type: actionTypes.GET_TECHNOLOGY_NEWS_START,
  };
};

const getTechnologyNewsSuccess = technologyNews => {
  return {
    type: actionTypes.GET_TECHNOLOGY_NEWS_SUCCESS,
    payload: {technologyNews},
  };
};

const getTechnologysNewsFail = error => {
  return {
    type: actionTypes.GET_TECHNOLOGY_NEWS_FAIL,
    payload: {error},
  };
};

export const getTechnologyNews = callback => {
  return dispatch => {
    dispatch(getTechnologyNewsStart());
    axiosNews
      .get('/v2/top-headlines', {
        headers: {authorization: API_KEY},
        params: {
          page: 1,
          // country: 'us',
          category: CATEGORY.TECHNOLOGY,
        },
      })
      .then(newsRes => {
        dispatch(getTechnologyNewsSuccess(newsRes.data.articles));
        if (callback) {
          callback();
        }
      })
      .catch(newsErr => {
        dispatch(getTechnologysNewsFail(newsErr));
        if (newsErr.response.status === 429) {
          toast(ERROR_MESSAGE.TOO_MANY_REQUESTS, ALERT_TYPE.ERROR);
        } else {
          toast(ERROR_MESSAGE.SOMETHING_WENT_WRONG, ALERT_TYPE.ERROR);
        }
      });
  };
};

export const searchTechnologyNews = searchText => {
  return dispatch => {
    dispatch(getTechnologyNewsStart());
    axiosNews
      .get('/v2/top-headlines', {
        headers: {authorization: API_KEY},
        params: {
          page: 1,
          // country: 'us',
          category: CATEGORY.TECHNOLOGY,
          q: searchText,
        },
      })
      .then(newsRes => {
        dispatch(getTechnologyNewsSuccess(newsRes.data.articles));
      })
      .catch(newsErr => {
        dispatch(getTechnologysNewsFail(newsErr));
        if (newsErr.response.status === 429) {
          toast(ERROR_MESSAGE.TOO_MANY_REQUESTS, ALERT_TYPE.ERROR);
        } else {
          toast(ERROR_MESSAGE.SOMETHING_WENT_WRONG, ALERT_TYPE.ERROR);
        }
      });
  };
};
///  get and search technology news methods ///

///  get and search sceinece news methods ///
const getScienceNewsStart = () => {
  return {
    type: actionTypes.GET_SCIENCE_NEWS_START,
  };
};

const getScienceNewsSuccess = scienceNews => {
  return {
    type: actionTypes.GET_SCIENCE_NEWS_SUCCESS,
    payload: {scienceNews},
  };
};

const getScienceNewsFail = error => {
  return {
    type: actionTypes.GET_SCIENCE_NEWS_FAIL,
    payload: {error},
  };
};

export const getScienceNews = callback => {
  return dispatch => {
    dispatch(getScienceNewsStart());
    axiosNews
      .get('/v2/top-headlines', {
        headers: {authorization: API_KEY},
        params: {
          page: 1,
          // country: 'us',
          category: CATEGORY.SCIENCE,
        },
      })
      .then(newsRes => {
        dispatch(getScienceNewsSuccess(newsRes.data.articles));
        if (callback) {
          callback();
        }
      })
      .catch(newsErr => {
        dispatch(getScienceNewsFail(newsErr));
        if (newsErr.response.status === 429) {
          toast(ERROR_MESSAGE.TOO_MANY_REQUESTS, ALERT_TYPE.ERROR);
        } else {
          toast(ERROR_MESSAGE.SOMETHING_WENT_WRONG, ALERT_TYPE.ERROR);
        }
      });
  };
};

export const searchScienceNews = searchText => {
  return dispatch => {
    dispatch(getScienceNewsStart());
    axiosNews
      .get('/v2/top-headlines', {
        headers: {authorization: API_KEY},
        params: {
          page: 1,
          // country: 'us',
          category: CATEGORY.SCIENCE,
          q: searchText,
        },
      })
      .then(newsRes => {
        dispatch(getScienceNewsSuccess(newsRes.data.articles));
      })
      .catch(newsErr => {
        dispatch(getScienceNewsFail(newsErr));
        if (newsErr.response.status === 429) {
          toast(ERROR_MESSAGE.TOO_MANY_REQUESTS, ALERT_TYPE.ERROR);
        } else {
          toast(ERROR_MESSAGE.SOMETHING_WENT_WRONG, ALERT_TYPE.ERROR);
        }
      });
  };
};
///  get and search sceinece news methods ///

///  get and search sports news methods ///
const getSportsNewsStart = () => {
  return {
    type: actionTypes.GET_SPORTS_NEWS_START,
  };
};

const getSportsNewsSuccess = sportsNews => {
  return {
    type: actionTypes.GET_SPORTS_NEWS_SUCCESS,
    payload: {sportsNews},
  };
};

const getSportsNewsFail = error => {
  return {
    type: actionTypes.GET_SPORTS_NEWS_FAIL,
    payload: {error},
  };
};

export const getSportsNews = callback => {
  return dispatch => {
    dispatch(getSportsNewsStart());
    axiosNews
      .get('/v2/top-headlines', {
        headers: {authorization: API_KEY},
        params: {
          category: CATEGORY.SPORTS,
        },
      })
      .then(newsRes => {
        dispatch(getSportsNewsSuccess(newsRes.data.articles));
        if (callback) {
          callback();
        }
      })
      .catch(newsErr => {
        dispatch(getSportsNewsFail(newsErr));

        if (newsErr.response.status === 429) {
          toast(ERROR_MESSAGE.TOO_MANY_REQUESTS, ALERT_TYPE.ERROR);
        } else {
          toast(ERROR_MESSAGE.SOMETHING_WENT_WRONG, ALERT_TYPE.ERROR);
        }
      });
  };
};

export const searchSportsNews = searchText => {
  return dispatch => {
    dispatch(getSportsNewsStart());
    axiosNews
      .get('/v2/top-headlines', {
        headers: {authorization: API_KEY},
        params: {
          category: CATEGORY.SPORTS,
          q: searchText,
        },
      })
      .then(newsRes => {
        dispatch(getSportsNewsSuccess(newsRes.data.articles));
      })
      .catch(newsErr => {
        dispatch(getSportsNewsFail(newsErr));
        if (newsErr.response.status === 429) {
          toast(ERROR_MESSAGE.TOO_MANY_REQUESTS, ALERT_TYPE.ERROR);
        } else {
          toast(ERROR_MESSAGE.SOMETHING_WENT_WRONG, ALERT_TYPE.ERROR);
        }
      });
  };
};
///  get and search sports news methods ///
