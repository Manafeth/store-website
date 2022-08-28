
import { axiosInstance } from './axiosInstance';

function getFeaturedCategories () {
  return axiosInstance.get(
    'CustomerCategory/GetAll',
  );
}

function getAllCategories () {
  return axiosInstance.get(
    'CustomerCategory/GetAllCategories',
  );
}

function getCategoryDetails (id: string | number) {
  return axiosInstance.get(
    'CustomerCategory/Get',
    {params: { id }}
  );
}

export {
    getFeaturedCategories,
    getAllCategories,
    getCategoryDetails
}