import axios from 'axios';
import { getAccessToken } from './jwt';
import { APP_CONFIG } from './env';

interface TypeObjKey {
  [key: string]: any;
}

const axiosClient = axios.create({
  baseURL: APP_CONFIG.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const token = getAccessToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
   
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  function (response) { 
    return response.data;
  },
  function (error) {
    const newError = {
      data: error?.response?.data,
      status: error?.response?.status,
      statusText: error?.response?.statusText,
    };
    return Promise.reject(newError);
  },
);

const axiosRequest = {
  get: (url: string, params = {}) =>axiosClient.get(url,params),
  post: (url: string, payload: any) => axiosClient.post(url, payload),
  put: (url: string, payload: any) => axiosClient.put(url, payload),
  delete: (url: string) => axiosClient.delete(url),
  postFormData: (url: string, payload: any) => {
    const formData = new FormData();
    for (const key in payload) {
      if (Array.isArray(payload[key])) {
        payload[key].forEach((value: any, index: number) => {
          formData.append(`${key}[${index}]`, value);
        });
      } else {
        formData.append(key, payload[key]);
      }
    }
    return axiosClient.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default axiosRequest;
