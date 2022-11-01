import { useRouter } from 'next/router';
import React, { createContext, useContext, ReactElement, useState, FC, useEffect } from 'react';
import AuthModal from '../components/AuthModal';
import { ERROR, LOADING, SUCCESS } from '../constants';
import paths from '../constants/paths';
import { completeProfile, getProfileData, login, verifyOtp } from '../services/auth.services';
import { AuthModalState, LoginData, ProfileData, VerifyOtpData } from '../types/auth';
import getAccessToken from '../utils/getToken';
import { useAlert } from './AlertContext';
import { useCommon } from './CommonContext';

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

  const [sendPhoneNumberStatus, setSendPhoneNumberStatus] = useState('')
  const [verifyStatus, setVerifyStatus] = useState('')
  const [updateProfileStatus, setUpdateProfileStatus] = useState('')
  const [userData, setUserData] = useState<ProfileData>({
    fullName: '',
    email: '',
    mainImageFilePath: {
      orignialUrl: '',
      thumbUrl: '',
    },
    isCompleteProfile: false,
    phoneNumber: ''
  })

  const { sendAlert } = useAlert();

  const {storeInfo} = useCommon();
  const router = useRouter();

  function handleOpenAuthModal() {
    setAuthModalState(true);
  }

  function handleCloseAuthModal() {
    setAuthModalState(false);
  }

  async function sendPhoneNumber(data: LoginData) {
    setSendPhoneNumberStatus(LOADING);
    try {
      const response = await login({...data, storeId: storeInfo.id || 0});
      setSendPhoneNumberStatus(SUCCESS);
      sendAlert(response.data?.message, SUCCESS)
    } catch(error: any) {
      setSendPhoneNumberStatus(ERROR);
      sendAlert(error.response?.data?.Message, ERROR)
      Promise.reject(error);
    }
  }

  async function verifyPhoneNumber(data: VerifyOtpData) {
    setVerifyStatus(LOADING);
    try {
      const response = await verifyOtp({...data, storeId: storeInfo.id || 0});
      localStorage.setItem('userData', JSON.stringify(response?.data?.data?.profile));
      localStorage.setItem('accessToken', response?.data?.data?.token?.accessToken);
      setVerifyStatus(SUCCESS);
      setIsloggedIn(true);
      setUserData(response.data.data.profile)
      sendAlert(response.data?.message, SUCCESS)
    } catch(error: any) {
      setVerifyStatus(ERROR);
      sendAlert(error.response?.data?.Message, ERROR)
      Promise.reject(error);
    }
  }

  async function fetchAccountData() {
    try {
      const response = await getProfileData();
      setProfileData(response.data.data);
    } catch(error: any) {
      sendAlert(error.response?.data?.Message, ERROR)
      Promise.reject(error);
    }
  }

  async function updateAccountData(data: ProfileData) {
    setUpdateProfileStatus(LOADING);
    try {
      const response = await completeProfile(data);
      setUpdateProfileStatus(SUCCESS);
      fetchAccountData();
      sendAlert(response.data?.message, SUCCESS)
    } catch(error: any) {
      setUpdateProfileStatus(ERROR);
      sendAlert(error.response?.data?.Message, ERROR)
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
    sendPhoneNumberStatus,
    verifyStatus,
    updateProfileStatus,
    logout,
    isloggedIn,
    userData
  };
  
  return (
    <AuthModalContext.Provider value={state}>
      <AuthModal />
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => useContext(AuthModalContext);