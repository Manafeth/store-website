
import { ProductCartData } from '../types/cart';
import { axiosInstance } from './axiosInstance';

function addProductToCart(data: ProductCartData) {
  return axiosInstance.post(
    'Cart/AddProductToCart',
    data,
  );
}

export {
    addProductToCart,
}