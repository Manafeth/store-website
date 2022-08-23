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

export {
    getProfileWishListData,
    getAllActiveOrders,
}