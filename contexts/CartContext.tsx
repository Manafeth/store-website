import { useRouter } from 'next/router';
import React, {
  createContext,
  useContext,
  ReactElement,
  FC,
  useState,
} from 'react';
import { ERROR, LOADING, SUCCESS } from '../constants';
import { getAllCartProducts } from '../services/cart.services';
import { CartModalState, productData } from '../types/cart';


interface Props {
  children: ReactElement | ReactElement[];
}

const CartModalContext = createContext({} as CartModalState);

export const CartModalProvider: FC<Props> = ({ children }) => {
    const [cartData, setCartData] = useState<productData[]>([]);



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


  const state: CartModalState = {
    cartData,
    fetchCartProducts
  
  };

  return (
    <CartModalContext.Provider value={state}>
      {children}
    </CartModalContext.Provider>
  );
};

export const useCartModal = () => useContext(CartModalContext);
