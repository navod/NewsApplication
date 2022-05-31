import axios from 'axios';
import {BASE_URL} from './constants/Constants';

export const axiosNews = axios.create({
  baseURL: BASE_URL,
});
