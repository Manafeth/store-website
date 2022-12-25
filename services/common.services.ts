import { axiosInstance } from './axiosInstance';

function getCountries() {
  return axiosInstance.get(
    'Country/GetAll',
  );
}
function getAllCities(params?: { page?: number; pageSize?: number; searchKey?: string; countryId?: number }) {
  return axiosInstance.get('City/GetAll', {
    params,
  });
}

function getStoreInfo() {
  return axiosInstance.get(
    'Auth/GetStoreInfo',
  );
}

function getBanner(headers?: { [key: string]: any }) {
  return axiosInstance.get(
    'Auth/GetBanner',
    {
      headers: headers || {}
    }
  );
}

export {
    getCountries,
    getAllCities,
    getStoreInfo,
    getBanner
};