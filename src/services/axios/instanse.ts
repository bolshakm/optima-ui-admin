import axios from 'axios';
import { storageKeys, backendKeys } from 'common/constants';

const instance = axios.create({
  baseURL: backendKeys.root,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem(storageKeys.token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;
