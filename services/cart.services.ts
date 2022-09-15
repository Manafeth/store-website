
import { CheckoutData, ProductCartData } from '../types/cart';
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
function getOrder(id: number | string | string[]) {
  return axiosInstance.get(
    'Order/Get',
    {
      params:{
        id
      },
    }
  );
}

function createOrder(data: CheckoutData) {
  return axiosInstance.post(
    'Order/Create',
    data
  );
}
function getInvoice(id: number | string | string[]) {
  return axiosInstance.get(
    'Invoice/Get',
    {
      params:{
        id
      },
    }
  );
}

function checkCouponValidation(code: string) {
  return axiosInstance.post(
    'Order/CheckCouponValidation',
    undefined,
    { params: {code} }
  );
}

export {
    addProductToCart,
    getAllCartProducts,
    getAllProviders,
    getOrder,
    createOrder,
    getInvoice,
    checkCouponValidation
}