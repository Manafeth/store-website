
import { axiosInstance } from './axiosInstance';

function getFeaturedCategories (storeId: number, locale?: string) {
  return axiosInstance.get(
    'CustomerCategory/GetAll',
    {
      params: { storeId },
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

function getCategoryDetails (storeId: number, id: string | number, locale?: string) {
  return axiosInstance.get(
    'CustomerCategory/Get',
    {
      params: { id, storeId },
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