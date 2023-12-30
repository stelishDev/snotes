/* eslint-disable prettier/prettier */
import axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
const baseUrl = 'https://api.scripture.api.bible';
const apiKey = '39c038f385138bd8666daeea7c9c5e66'; // TODO: get from env

export const getBaseUrlInterceptor =
  (urlPath: string) =>
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const updatedHeaders: AxiosHeaders = {
        ...config.headers,
        'api-key': apiKey,
    } as unknown as AxiosHeaders;

    return {
      ...config,
      headers: updatedHeaders,
      baseURL: `/${urlPath}`,
    };
  };

const axiosClient = axios.create();
axiosClient.defaults.headers.common = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
axiosClient.defaults.withCredentials = true;
axiosClient.interceptors.request.use(
  getBaseUrlInterceptor(`${baseUrl}/v1`),
  error => Promise.reject(error),
);

export const apiV1Client = axiosClient;
