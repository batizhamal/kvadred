import axios, { AxiosInstance } from 'axios';

const VITE_API_URL = import.meta.env.VITE_API_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${VITE_API_URL}`,
});

export function instance(url?: string): AxiosInstance {
  if (url) {
    axiosInstance.defaults.baseURL = url;
  }
  return axiosInstance;
}

export default instance;
