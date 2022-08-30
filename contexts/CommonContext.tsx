import React, { createContext, useContext, ReactElement, FC, useEffect, useState } from 'react';
import { getStoreInfo } from '../services/common.services';
import { CommonContextState, StoreInfoData } from '../types/common';

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
        }
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
    </CommonContext.Provider>
  );
};

export const useCommon = () => useContext(CommonContext);