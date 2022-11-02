import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import React, { createContext, useState, useContext, useEffect, ReactElement } from 'react';
import { AlertState, AlertType } from '../types/common';

interface Props {
  children: ReactElement;
}

const AlertContext = createContext({} as AlertState);

export const AlertProvider = ({ children }: Props) => {
  const [message, setMessage] = useState<string | undefined>();
  const [type, setType] = useState<AlertType | undefined>();

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(undefined);
        setType(undefined);
      }, 5000);
    }
  }, [message]);

  const sendAlert = (message: string, type: AlertType) => {
    setType(type);
    setMessage(message);
  };

  const state: AlertState = {
    message: message,
    type: type,
    sendAlert: sendAlert,
  };

  return (
    <AlertContext.Provider value={state}>
      {message && (
        <Snackbar open={!!message} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert severity={type} variant="filled" sx={{ width: '100%', color: 'grey.0' }}>{message}</Alert>
        </Snackbar>
      )}
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);