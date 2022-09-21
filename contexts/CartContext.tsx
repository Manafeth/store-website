import { useRouter } from 'next/router';
import React, {
  createContext,
  useContext,
  ReactElement,
  FC,
  useState,
} from 'react';
import { ERROR, LOADING, SUCCESS } from '../constants';
import { checkCouponValidation, createOrder, getAllCartProducts, getAllProviders, getInvoice, getOrder } from '../services/cart.services';
import { CartModalState, CheckoutData, InvocieData, OrderData, PaymentProvidersData, ShipmentsProvidersData } from '../types/cart';
import { ProductData } from '../types/products';
import { useAlert } from './AlertContext';


interface Props {
  children: ReactElement | ReactElement[];
}

const CartModalContext = createContext({} as CartModalState);

export const CartModalProvider: FC<Props> = ({ children }) => {
    const [cartData, setCartData] = useState<ProductData[]>([]);
    const [shipmentData, setShipmentData] = useState<ShipmentsProvidersData[]>([]);
    const [paymnetData, setPaymnetData] = useState<PaymentProvidersData[]>([]);
    const [orderAndInvoice, setOrderAndInvoice] = useState({
      orderId: 0,
      invoiceId: 0
    })
    const initialState = {
      shipmentProviderId: 0,
      paymentProviderId: 0,
      couponCode: "",
      addressId: 0,
      type: 1
    }
    const [checkoutData, setCheckoutData] = useState<CheckoutData>(initialState);

    const [orderData, setOrderData] = useState<OrderData>({
      id:0,
      invoiceId:0,
      orderDate:'',
      phoneNumber:'',
      paymentProvider:'',
      paymentStatus:0,
      status:0,
      shipmentProviderImage: {
        orignialUrl:'',
        thumbUrl:'',
      },
      orderChangeLogs:[
        {
          id:0,
          new:0,
          changeAt:'',
        }
      ]
    });
    const [invoiceData, setInvoiceData] = useState<InvocieData>({
      id:0,
      createAt:'',
      date: '',
      total: 0,
      vatPercentage:0,
      discount: 0,
      netValue: 0,
      account: {
          id:0,
          title:''
      },
      invoiceItems:[
        {
          id: 0,
          itemId: 0,
          item: '',
          unitPrice: 0,
          quantity: 0,
          total: 0,
        }
      ],
    });


  const [createOrderStatus, setCreateOrderStatus] = useState('');
  const [isCodeValid, setIsCodeValid] = useState(false);

  const { sendAlert } = useAlert();

  async function fetchCartProducts() {
    try {
      const response = await  getAllCartProducts();
      setCartData(response.data.data);
    } catch (error) {
      Promise.reject(error);
    }
  }
  async function fetchShipmentsProviders(id:number) {
    try {
     const response = await  getAllProviders(id);
     setShipmentData(response.data.data.shipmentsProviders)
    } catch(error) {
      Promise.reject(error);
    }
  }
  async function fetchPaymentProviders(id:number) {
    try {
     const response = await  getAllProviders(id);
     setPaymnetData(response.data.data.paymentProviders)
    } catch(error) {
      Promise.reject(error);
    }
  }

  async function fetchOrderDetails(id: number | string | string[]) {
    try {
     const response = await  getOrder(id);
     setOrderData(response.data.data)
    } catch(error) {
      Promise.reject(error);
    }
  }

  async function createOrderTrigger() {
    setCreateOrderStatus(LOADING)
    try {
      const response = await createOrder(checkoutData);
      setCreateOrderStatus(SUCCESS)
      setOrderAndInvoice(response.data.data);
      sendAlert(response.data?.message, SUCCESS);
      setCheckoutData(initialState);
    } catch(error: any) {
      setCreateOrderStatus(ERROR)
      sendAlert(error.response?.data?.Message, ERROR);
    }
  }

  function updateCheckoutData(name: string, value: any) {
    setCheckoutData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  async function fetchInvoiceDetails(id: number | string | string[]) {
    try {
     const response = await getInvoice(id);
     setInvoiceData(response.data.data)
    } catch(error) {
      Promise.reject(error);
    }
  }

  async function checkCouponCodeValidation(code: string) {
    setIsCodeValid(false)
    try {
      const response = await checkCouponValidation(code);
      if (response.data.isSuccess)
        setIsCodeValid(true)
    } catch(error) {
      setIsCodeValid(false)
    }
  }

  function clearOrderStatus() {
    setCreateOrderStatus('');
  }

  const state: CartModalState = {
    cartData,
    shipmentData,
    paymnetData,
    orderData,
    checkoutData,
    orderAndInvoice,
    createOrderStatus,
    invoiceData,
    fetchCartProducts,
    fetchShipmentsProviders,
    fetchPaymentProviders,
    fetchOrderDetails,
    updateCheckoutData,
    createOrderTrigger,
    fetchInvoiceDetails,
    clearOrderStatus,
    checkCouponCodeValidation,
    isCodeValid
  };

  return (
    <CartModalContext.Provider value={state}>
      {children}
    </CartModalContext.Provider>
  );
};

export const useCart = () => useContext(CartModalContext);
