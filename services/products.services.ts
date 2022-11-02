import { ProductByCategoryParams } from '../types/products';
import { axiosInstance } from './axiosInstance';

function getMostPurchasedProducts (params?: { page: number, pageSize: number, generalSearch: string | string[] | undefined }, headers?: { [key: string]: any }) {
  return axiosInstance.get(
    'Product/MostPurchasedProducts',
    {
      params,
      headers: headers || {}
    },
  );
}

function getProductDetails(id: string | string[] | undefined | number, headers?: { [key: string]: any }) {
  return axiosInstance.get(
    'Product/Get',
    {
      params: {id},
      headers: headers || {}
    },
  );
}

function getRelatedProductDetails(productId: string | string[] | undefined | number, headers?: { [key: string]: any }) {
  return axiosInstance.get(
    'Product/GetRelatedProduct',
    {
      params: {productId},
      headers: headers || {}
    },
  );
}

function getProductsByCategory(params: ProductByCategoryParams, headers?: { [key: string]: any }) {
  return axiosInstance.get(
    'Product/GetProductCategories',
    {
      params,
      headers: headers || {}
    }
  );
}

function toggleProductInWishList(productId: number | string) {
    return axiosInstance.post(
      'WishList/AddOrDeleteWishList',
      { productId }
    );
}

export {
    getMostPurchasedProducts,
    getProductDetails,
    getRelatedProductDetails,
    getProductsByCategory,
    toggleProductInWishList
}