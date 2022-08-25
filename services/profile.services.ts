import { addressDetailsData, emailNotificationData } from "../types/profile";
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
function getAllAddress (params?: { page: number, pageSize: number }) {
  return axiosInstance.get(
    'Address/GetAll',
    {params},
  );
}

function createAddress(data:addressDetailsData) {
  return axiosInstance.post(
    'Address/Create',
    data
  );
}
function updateAddress(data:addressDetailsData) {
  return axiosInstance.put(
    'Address/Update',
    data
  );
}


function deleteAddress(id: number) {
  return axiosInstance.delete(
    'Address/Delete',
    {
      params:{
        id
      },
    }
  );
}
function getCustomerProfileData() {
  return axiosInstance.get(
    'Auth/GetCustomerProfile',
  );
}
function getEmailNotificationData() {
  return axiosInstance.get(
    'NotificationSetting/Get',
  );
}
function updateEmailNotification(data:emailNotificationData) {
  return axiosInstance.put(
    'NotificationSetting/Update',
    data
  );
}
export {
    getProfileWishListData,
    getAllActiveOrders,
    getAllArchiveed,
    getAllAddress,
    createAddress,
    updateAddress,
    deleteAddress,
    getCustomerProfileData,
    getEmailNotificationData,
    updateEmailNotification
}