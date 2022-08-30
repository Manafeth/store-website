import { axiosInstance } from './axiosInstance';

function getCountries() {
  return axiosInstance.get(
    'Country/GetAll',
  );
}
function getAllCities(countryId?: number) {
  return axiosInstance.get('City/GetAll', {
    params: {
      countryId,
    },
  });
}

function getStoreInfo() {
  return axiosInstance.get(
    'Auth/GetStoreInfo',
  );
}

export {
    getCountries,
    getAllCities,
    getStoreInfo
};