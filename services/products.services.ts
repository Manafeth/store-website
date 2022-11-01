import { ProductByCategoryParams } from '../types/products';
import { axiosInstance } from './axiosInstance';

function getMostPurchasedProducts (params?: { page: number, pageSize: number, generalSearch: string | string[] | undefined }, locale?: string) {
  return axiosInstance.get(
    'Product/MostPurchasedProducts',
    {
      params,
      headers: locale ? {
        'Accept-Language': locale,
      } : {}
    },
  );
}

function getProductDetails(id: string, locale?: string) {
  return axiosInstance.get(
    'Product/Get',
    {
      params: {id},
      headers: locale ? {
        'Accept-Language': locale,
      } : {}
    },
  );
}

function getRelatedProductDetails(productId: string, locale?: string) {
  return axiosInstance.get(
    'Product/GetRelatedProduct',
    {
      params: {productId},
      headers: locale ? {
        'Accept-Language': locale,
      } : {}
    },
  );
}

function getProductsByCategory(params: ProductByCategoryParams, locale?: string) {
  return axiosInstance.get(
    'Product/GetProductCategories',
    {
      params,
      headers: locale ? {
        'Accept-Language': locale,
      } : {}
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