import React, { createContext, useContext, ReactElement, useState, FC } from 'react';
import { ERROR, LOADING, SUCCESS } from '../constants';
import { createContact } from '../services/contactUs.services';
import { getContent } from '../services/content.services';
import { ContactUsData, ContactUsState } from '../types/contactUs';
import { ContantData, ContantState } from '../types/contant';
import { useAlert } from './AlertContext';

interface Props {
  children: ReactElement | ReactElement[];
}

const ContantContext = createContext({} as ContantState);

export const ContantProvider: FC<Props> = ({ children }) => {
    const [ContantData, setContantData] = useState<ContantData>({
        content: '',
        type: 0
    })


  const { sendAlert } = useAlert();

  async function getContentDetails(type:number) {
    try {
     const response = await  getContent(type);
     setContantData(response.data.data)
    } catch(error) {
      Promise.reject(error);
    }
  }





 

  const state: ContantState = {
    ContantData,
    getContentDetails
  };
  
  return (
    <ContantContext.Provider value={state}>
      {children}
    </ContantContext.Provider>
  );
};

export const useContant = () => useContext(ContantContext);