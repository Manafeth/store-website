
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

export {
    getFeaturedCategories,
    getAllCategories
}