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

function getSlides() {
  return axiosInstance.get(
    'Announcement/GetAllSliders',
  );
}

export {
    getCountries,
    getAllCities,
    getStoreInfo,
    getSlides
};