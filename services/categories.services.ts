
import { axiosInstance } from './axiosInstance';

function getFeaturedCategories (headers?: {[key: string]: any}) {
  return axiosInstance.get(
    'CustomerCategory/GetAll',
    {
      headers: headers || {}
    }
  );
}

function getAllCategories (headers?: {[key: string]: any}) {
  return axiosInstance.get(
    'CustomerCategory/GetAllCategories',
    {
      headers: headers || {}
    }
  );
}

function getCategoryDetails (id: string | number, headers?: {[key: string]: any}) {
  return axiosInstance.get(
    'CustomerCategory/Get',
    {
      params: { id },
      headers: headers || {}
    }
  );
}

export {
    getFeaturedCategories,
    getAllCategories,
    getCategoryDetails
}