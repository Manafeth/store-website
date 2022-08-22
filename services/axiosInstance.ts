import axios from 'axios';
import getAccessToken from '../utils/getToken';

// create axios instance
export const axiosInstance = (() => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  instance.interceptors.request.use(
    async (config: any) => {
      try {
        const updatedConfig = config;
        if (!updatedConfig.ignoreToken) {
          if (config.useUserToken) {
            const { accessToken } = localStorage;
            if (accessToken) updatedConfig.headers.common.Authorization = `Bearer ${accessToken}`;
          } else {
            const accessToken = getAccessToken();
            // Do something before request is sent
            if (accessToken) updatedConfig.headers.common.Authorization = `Bearer ${accessToken}`;
          }
        }

        // updatedConfig.headers.common['Accept-Language'] = localStorage.userLanguage || 'en';

        return updatedConfig;
      } catch (err) {
        return Promise.reject(err);
      }
    },
    (error) => {
      // Do something with request error
      Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
    //   if (error.response.status === 401) {
    //     localStorage.removeItem('access_token');
    //     localStorage.removeItem('userData');
    //     localStorage.removeItem('firebaseToken');
    //     window.location.href = paths.login;
    //   }
      return Promise.reject(error);
    },
  );
  return instance;
})();
