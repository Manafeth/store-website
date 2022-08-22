import { axiosInstance } from './axiosInstance';

function getMostPurchasedProducts (params?: { page: number, pageSize: number, generalSearch: string }) {
  return axiosInstance.get(
    'Product/MostPurchasedProducts',
    {params},
  );
}

export {
    getMostPurchasedProducts
}