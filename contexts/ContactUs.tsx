import React, { createContext, useContext, ReactElement, useState, FC } from 'react';
import { ERROR, LOADING, SUCCESS } from '../constants';
import { createContact } from '../services/contactUs.services';
import { ContactUsData, ContactUsState } from '../types/contactUs';
import { useAlert } from './AlertContext';

interface Props {
  children: ReactElement | ReactElement[];
}

const ContactUsContext = createContext({} as ContactUsState);

export const ContactUsProvider: FC<Props> = ({ children }) => {
  const [createLoader, setCreateLoader] = useState('');


  const { sendAlert } = useAlert();


  async function createContactFunction(data: ContactUsData) {
    setCreateLoader(LOADING);
    try {
      const response = await createContact(data);
      setCreateLoader(SUCCESS);
      sendAlert(response.data?.message, SUCCESS)
    } catch(error: any) {
      setCreateLoader(ERROR);
      sendAlert(error.response?.data?.Message, ERROR)
      Promise.reject(error);
    }
  }

 

  const state: ContactUsState = {
    createLoader,
    createContactFunction
  };
  
  return (
    <ContactUsContext.Provider value={state}>
      {children}
    </ContactUsContext.Provider>
  );
};

export const useContactUs = () => useContext(ContactUsContext);