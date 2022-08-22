import { axiosInstance } from "./axiosInstance";

function getProfileWishListData() {
    return axiosInstance.get(
      'WishList/GetWishListForUser',
    );
}

export {
    getProfileWishListData,
}