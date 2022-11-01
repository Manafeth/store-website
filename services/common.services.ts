import { axiosInstance } from './axiosInstance';

function getCountries(storeId: number) {
  return axiosInstance.get(
    'Country/GetAll',
    {params: {storeId}}
  );
}
function getAllCities(storeId: number, countryId?: number) {
  return axiosInstance.get('City/GetAll', {
    params: {
      countryId,
      storeId
    },
  });
}

function getStoreInfo(locale?: string) {
  return axiosInstance.get(
    'Auth/GetStoreInfo',
    {
      headers: locale ? {
        'Accept-Language': locale,
        'referer': 'http://localhost:3000'
      } : {}
    }
  );
}

function getSlides(storeId: number, locale?: string) {
  return axiosInstance.get(
    'Announcement/GetAllSliders',
    {
      params: { storeId },
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