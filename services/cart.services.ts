
import { CheckoutData, StcPaymentData, PaymentData, ProductCartData, BankFilesData } from '../types/cart';
import convertToFormData from '../utils/convertToFormData';
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

function deleteProductFromCart(id: number) {
  return axiosInstance.delete(
    'Cart/DeleteCartProduct',
    {params: { id }}
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

function createPaymentGateway(data: PaymentData) {
  return axiosInstance.post(
    'PaymentGateway/CreatePaymentGateway',
    data
  );
}

function stcPaymentConfirmation(data: StcPaymentData) {
  return axiosInstance.post(
    'StcPay/DirectPaymentConfirmation',
    data
  );
}

function uploadBankFiles(bankFilesdata: BankFilesData) {
  const data = convertToFormData(bankFilesdata);
  return axiosInstance.post(
    'Bank/UploadBankTransferFiles',
    data
  );
}

function getBankFiles(invoiceId: number) {
  return axiosInstance.get(
    'Bank/GetBankTransferFiles',
    {params: { invoiceId }}
  );
}

export {
    addProductToCart,
    getAllCartProducts,
    getAllProviders,
    getOrder,
    createOrder,
    getInvoice,
    checkCouponValidation,
    createPaymentGateway,
    stcPaymentConfirmation,
    uploadBankFiles,
    getBankFiles,
    deleteProductFromCart
}