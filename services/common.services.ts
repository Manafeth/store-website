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

function getSlides(locale?: string) {
  return axiosInstance.get(
    'Announcement/GetAllSliders',
    {
      headers: locale ? {
        'Accept-Language': locale,
      } : {}
    }
  );
}

export {
    getCountries,
    getAllCities,
    getStoreInfo,
    getSlides
};