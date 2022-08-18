import { axiosInstance } from './axiosInstance';

function getCountries() {
  return axiosInstance.get(
    'Country/GetAll',
  );
}

export {
    getCountries
};