import { useRouter } from 'next/router';
import React, { createContext, useContext, ReactElement, useState, FC, useEffect } from 'react';
import paths from '../constants/paths';
import { completeProfile, getProfileData, login, verifyOtp } from '../services/auth.services';
import { AuthModalState, LoginData, ProfileData, VerifyOtpData } from '../types/auth';
import getAccessToken from '../utils/getToken';

interface Props {
  children: ReactElement;
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
      await login(data);
      setLoginLoading(false);
    } catch(error) {
      setLoginLoading(false);
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
    } catch(error) {
      setVerifyLoading(false);
      Promise.reject(error);
    }
  }

  async function fetchAccountData() {
    try {
      const response = await getProfileData();
      setProfileData(response.data.data);
    } catch(error) {
      Promise.reject(error);
    }
  }

  async function updateAccountData(data: ProfileData) {
    setUpdateProfileLoading(true);
    try {
      await completeProfile(data);
      setUpdateProfileLoading(false);
      fetchAccountData();
    } catch(error) {
      setUpdateProfileLoading(false);
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
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => useContext(AuthModalContext);