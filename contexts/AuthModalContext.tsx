import { useRouter } from 'next/router';
import React, { createContext, useContext, ReactElement, useState, FC, useEffect } from 'react';
import AuthModal from '../components/AuthModal';
import paths from '../constants/paths';
import { completeProfile, getProfileData, login, verifyOtp } from '../services/auth.services';
import { AuthModalState, LoginData, ProfileData, VerifyOtpData } from '../types/auth';
import getAccessToken from '../utils/getToken';
import { useAlert } from './AlertContext';

interface Props {
  children: ReactElement | ReactElement[];
}

const AuthModalContext = createContext({} as AuthModalState);

export const AuthModalProvider: FC<Props> = ({ children }) => {
  const [isloggedIn, setIsloggedIn] = useState(false);
  const [openAuthModal, setAuthModalState] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
      fullName: '',
      email: '',
      mainImageFilePath: {
        orignialUrl: '',
        thumbUrl: '',
      }
  })

  const [loginLoading, setLoginLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [updateProfileLoading, setUpdateProfileLoading] = useState(false);

  const { sendAlert } = useAlert();
  const router = useRouter();

  function handleOpenAuthModal() {
    setAuthModalState(true);
  }

  function handleCloseAuthModal() {
    setAuthModalState(false);
  }

  async function sendPhoneNumber(data: LoginData) {
    setLoginLoading(true);
    try {
      const response = await login(data);
      setLoginLoading(false);
      sendAlert(response.data?.message, 'success')
    } catch(error: any) {
      setLoginLoading(false);
      sendAlert(error.response?.data?.Message, 'error')
      Promise.reject(error);
    }
  }

  async function verifyPhoneNumber(data: VerifyOtpData) {
    setVerifyLoading(true);
    try {
      const response = await verifyOtp(data);
      localStorage.setItem('userData', JSON.stringify(response?.data?.data?.profile));
      localStorage.setItem('accessToken', response?.data?.data?.token?.accessToken);
      setVerifyLoading(false);
      setIsloggedIn(true);
      sendAlert(response.data?.message, 'success')
    } catch(error: any) {
      setVerifyLoading(false);
      sendAlert(error.response?.data?.Message, 'error')
      Promise.reject(error);
    }
  }

  async function fetchAccountData() {
    try {
      const response = await getProfileData();
      setProfileData(response.data.data);
      sendAlert(response.data?.message, 'success')
    } catch(error: any) {
      sendAlert(error.response?.data?.Message, 'error')
      Promise.reject(error);
    }
  }

  async function updateAccountData(data: ProfileData) {
    setUpdateProfileLoading(true);
    try {
      const response = await completeProfile(data);
      setUpdateProfileLoading(false);
      fetchAccountData();
      sendAlert(response.data?.message, 'success')
    } catch(error: any) {
      setUpdateProfileLoading(false);
      sendAlert(error.response?.data?.Message, 'error')
      Promise.reject(error);
    }
  }

  function logout() {
    localStorage.removeItem('userData');
    localStorage.removeItem('accessToken');
    setIsloggedIn(false);
    setProfileData({
      fullName: '',
      email: '',
      mainImageFilePath: {
        orignialUrl: '',
        thumbUrl: '',
      }
    })
    router.push(paths.home);
  }

  useEffect(() => {
    if (getAccessToken()) {
      setIsloggedIn(true)
    } else {
      setIsloggedIn(false)
    }
  }, [])

  const state: AuthModalState = {
    openAuthModal,
    sendPhoneNumber,
    verifyPhoneNumber,
    fetchAccountData,
    updateAccountData,
    handleOpenAuthModal,
    handleCloseAuthModal,
    profileData,
    loginLoading,
    verifyLoading,
    updateProfileLoading,
    logout,
    isloggedIn
  };
  
  return (
    <AuthModalContext.Provider value={state}>
      <AuthModal />
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => useContext(AuthModalContext);