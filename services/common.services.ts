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


export {
    getCountries,
    getAllCities,
};