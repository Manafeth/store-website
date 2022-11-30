import React, { createContext, useContext, ReactElement, FC, useState } from 'react';
import { getBanner, getStoreInfo } from '../services/common.services';
import { BannerData, CommonContextState, SlideData, StoreInfoData } from '../types/common';
import  { getMostPurchasedProducts } from '../services/products.services';
import { ProductData } from '../types/products';
// import { useRouter } from 'next/router';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import StoreEmptyState from '../components/StoreEmptyState';
// import paths from '../constants/paths';
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
      supportEmail: '',
      instagram: '',
      twitter: '',
      facebook: '',
      description: '',
      backgroundColor: '',
      producTitelColor: '',
      priceColor: '',
      buttonColor: '',
      buttonTitelColor: '',
      footerColor: '',
      headerColor: '',
      isTabbyActive: false,
      buttonHoverColor: '',
      categoryTitleColor: '',
      sectionTitleColor: '',
      contactUsImagePath: {
        orignialUrl: '',
        thumbUrl: ''
      }
    })

    const [bannerData, setBannerData] = useState<BannerData>({
      titel: '',
      description: '',
      imageFilePath: {
        orignialUrl: '',
        thumbUrl: ''
      }
    })
    
    const [storeNotFound, setStoreNotFound] = useState(false);
    const [mostPurchasedProducts, setMostPurchasedProducts] = useState<ProductData[]>([])
    // const router = useRouter();
    async function fetchStoreInfo() {
      try {
        const response = await getStoreInfo();
        setStoreInfo(response.data.data)
        setStoreNotFound(false)
      } catch (error) {
        Promise.reject(error)
        setStoreNotFound(true)
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

    async function fetchBannerData() {
      try {
        const response = await getBanner();
        setBannerData(response.data.data)
      } catch (error) {
        Promise.reject(error)
      }
    }
    

  const state: CommonContextState = {
    storeInfo,
    fetchStoreInfo,
    mostPurchasedProducts,
    fetchMostPurchasedProducts,
    bannerData,
    fetchBannerData,
    storeNotFound
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