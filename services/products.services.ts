import { ProductByCategoryParams } from '../types/products';
import { axiosInstance } from './axiosInstance';

function getMostPurchasedProducts (params?: { page: number, pageSize: number, generalSearch: string }) {
  return axiosInstance.get(
    'Product/MostPurchasedProducts',
    {params},
  );
}

function getProductDetails(id: string) {
  return axiosInstance.get(
    'Product/Get',
    {params: {id}},
  );
}

function getRelatedProductDetails(productId: string) {
  return axiosInstance.get(
    'Product/GetRelatedProduct',
    {params: {productId}},
  );
}

function getProductsByCategory(params: ProductByCategoryParams) {
  return axiosInstance.get(
    'Product/GetProductCategories',
    {params}
  );
}

export {
    getMostPurchasedProducts,
    getProductDetails,
    getRelatedProductDetails,
    getProductsByCategory
}