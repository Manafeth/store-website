
import { axiosInstance } from './axiosInstance';

function getFeaturedCategories (locale?: string) {
  return axiosInstance.get(
    'CustomerCategory/GetAll',
    {
      headers: locale ? {
        'Accept-Language': locale,
      } : {}
    }
  );
}

function getAllCategories (locale?: string) {
  return axiosInstance.get(
    'CustomerCategory/GetAllCategories',
    {
      headers: locale ? {
        'Accept-Language': locale,
      } : {}
    }
  );
}

function getCategoryDetails (id: string | number, locale?: string) {
  return axiosInstance.get(
    'CustomerCategory/Get',
    {
      params: { id },
      headers: locale ? {
        'Accept-Language': locale,
      } : {}
    }
  );
}

export {
    getFeaturedCategories,
    getAllCategories,
    getCategoryDetails
}