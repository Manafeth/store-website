import React, { createContext, useContext, ReactElement, FC, useEffect, useState } from 'react';
import { getStoreInfo } from '../services/common.services';
import { CommonContextState, StoreInfoData } from '../types/common';
import FloatingWhatsApp from 'react-floating-whatsapp'

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
    
    async function fetchStoreInfo() {
        try {
            const response = await getStoreInfo();
            setStoreInfo(response.data.data)
        } catch (error) {
            Promise.reject(error)
        }
    }

  const state: CommonContextState = {
    storeInfo,
    fetchStoreInfo
  };
  
  return (
    <CommonContext.Provider value={state}>
      {children}
      <FloatingWhatsApp phoneNumber={storeInfo.complaintNumber} accountName={storeInfo.name} avatar={storeInfo.mainImageFilePath?.thumbUrl} />
    </CommonContext.Provider>
  );
};

export const useCommon = () => useContext(CommonContext);