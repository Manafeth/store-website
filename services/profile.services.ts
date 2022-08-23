import { axiosInstance } from "./axiosInstance";

function getProfileWishListData() {
    return axiosInstance.get(
      'WishList/GetWishListForUser',
    );
}

function getAllActiveOrders (params?: { page: number, pageSize: number }) {
  return axiosInstance.get(
    'Order/GetAllActive',
    {params},
  );
}
function getAllArchiveed (params?: { page: number, pageSize: number }) {
  return axiosInstance.get(
    'Order/GetAllArchiveed',
    {params},
  );
}

export {
    getProfileWishListData,
    getAllActiveOrders,
    getAllArchiveed
}