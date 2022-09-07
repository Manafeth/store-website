
import { ProductCartData } from '../types/cart';
import { axiosInstance } from './axiosInstance';

function addProductToCart(data: ProductCartData) {
  return axiosInstance.post(
    'Cart/AddProductToCart',
    data,
  );
}

function getAllCartProducts() {
  return axiosInstance.get(
    'Cart/GetCartProducts',
  );
}

function getAllProviders(addressId: number) {
  return axiosInstance.get(
    'Providers/GetAll',
    {
      params:{
        addressId
      },
    }
  );
}

export {
    addProductToCart,
    getAllCartProducts,
    getAllProviders
}