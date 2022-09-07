import { useRouter } from 'next/router';
import React, {
  createContext,
  useContext,
  ReactElement,
  FC,
  useState,
} from 'react';
import { ERROR, LOADING, SUCCESS } from '../constants';
import { getAllCartProducts, getAllProviders } from '../services/cart.services';
import { CartModalState, paymentProvidersData, productData, shipmentsProvidersData } from '../types/cart';


interface Props {
  children: ReactElement | ReactElement[];
}

const CartModalContext = createContext({} as CartModalState);

export const CartModalProvider: FC<Props> = ({ children }) => {
    const [cartData, setCartData] = useState<productData[]>([]);
    const [shipmentData, setShipmentData] = useState<shipmentsProvidersData[]>([]);
    const [paymnetData, setPaymnetData] = useState<paymentProvidersData[]>([]);



  const router = useRouter();

  async function fetchCartProducts() {
    try {
      const response = await  getAllCartProducts();
      setCartData(response.data.data);
      console.log('response',response)
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


  const state: CartModalState = {
    cartData,
    shipmentData,
    paymnetData,
    fetchCartProducts,
    fetchShipmentsProviders,
    fetchPaymentProviders
  
  };

  return (
    <CartModalContext.Provider value={state}>
      {children}
    </CartModalContext.Provider>
  );
};

export const useCartModal = () => useContext(CartModalContext);
