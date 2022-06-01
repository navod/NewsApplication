import {axiosNews} from '../../../axios';
import {ALERT_TYPE, API_KEY, ERROR_MESSAGE} from '../../../constants/Constants';
import {toast} from '../../../shared/utility';
import * as actionTypes from './actionTypes';

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
          page: 1,
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
          country: 'us',
          category: 'business',
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
          country: 'us',
          category: 'business',
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
          country: 'us',
          category: 'technology',
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
          country: 'us',
          category: 'technology',
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
          country: 'us',
          category: 'science',
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
          country: 'us',
          category: 'science',
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
