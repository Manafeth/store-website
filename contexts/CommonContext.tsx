import React, { createContext, useContext, ReactElement, FC, useEffect, useState } from 'react';
import { getSlides, getStoreInfo } from '../services/common.services';
import { CommonContextState, SlideData, StoreInfoData } from '../types/common';
import  { getMostPurchasedProducts } from '../services/products.services';
import { ProductData } from '../types/products';
import { useRouter } from 'next/router';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
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

    const [slides, setSlides] = useState<SlideData[]>([])

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

    async function fetchMostPurchasedProducts(params: { page: number, pageSize: number, generalSearch: string | string[] | undefined }) {
      try {
        const response = await getMostPurchasedProducts(params)
        setMostPurchasedProducts(response.data.data.data)
      } catch (error) {
        Promise.reject(error)
      }
    }

    async function fetchSlides() {
      try {
        const response = await getSlides();
        setSlides(response.data.data)
      } catch (error) {
        Promise.reject(error)
      }
    }
    

  const state: CommonContextState = {
    storeInfo,
    fetchStoreInfo,
    mostPurchasedProducts,
    fetchMostPurchasedProducts,
    slides,
    fetchSlides
  };
  
  return (
    <CommonContext.Provider value={state}>
      {children}
      <FloatingWhatsApp
        phoneNumber={storeInfo.complaintNumber}
        accountName={storeInfo.name}
        avatar={storeInfo.mainImageFilePath?.thumbUrl}
        allowEsc
        allowClickAway
        notification
      />
    </CommonContext.Provider>
  );
};

export const useCommon = () => useContext(CommonContext);