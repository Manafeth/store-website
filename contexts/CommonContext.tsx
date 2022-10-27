import React, { createContext, useContext, ReactElement, FC, useEffect, useState } from 'react';
import { getStoreInfo } from '../services/common.services';
import { CommonContextState, StoreInfoData } from '../types/common';
import FloatingWhatsApp from 'react-floating-whatsapp'
import  { getMostPurchasedProducts } from '../services/products.services';
import { ProductData } from '../types/products';
import { useRouter } from 'next/router';
interface Props {
  children: ReactElement | ReactElement[];
}

const CommonContext = createContext({} as CommonContextState);

export const CommonContextProvider: FC<Props> = ({ children }) => {
    const [storeInfo, setStoreInfo] = useState<StoreInfoData>({
        id: 0,
        name: '',
        mainImageFilePath: {
            orignialUrl: '',
            thumbUrl: ''
        },
        complaintNumber: '',
        supportEmail: ''
    })

    const router = useRouter();

    const [mostPurchasedProducts, setMostPurchasedProducts] = useState<ProductData[]>([])
    
    async function fetchStoreInfo() {
      try {
        const response = await getStoreInfo();
        setStoreInfo(response.data.data)
      } catch (error) {
        Promise.reject(error)
        router.push('/404')
      }
    }

    async function fetchMostPurchasedProducts(params: { page: number, pageSize: number, generalSearch: string }) {
      try {
        const response = await getMostPurchasedProducts(params)
        setMostPurchasedProducts(response.data.data.data)
      } catch (error) {
        Promise.reject(error)
      }
    }

  const state: CommonContextState = {
    storeInfo,
    fetchStoreInfo,
    mostPurchasedProducts,
    fetchMostPurchasedProducts
  };
  
  return (
    <CommonContext.Provider value={state}>
      {children}
      <FloatingWhatsApp phoneNumber={storeInfo.complaintNumber} accountName={storeInfo.name} avatar={storeInfo.mainImageFilePath?.thumbUrl} />
    </CommonContext.Provider>
  );
};

export const useCommon = () => useContext(CommonContext);