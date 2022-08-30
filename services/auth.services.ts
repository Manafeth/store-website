import { LoginData, VerifyOtpData, ProfileData } from '../types/auth';
import { axiosInstance } from './axiosInstance';
import convertToFormData from '../utils/convertToFormData'

function login(data: LoginData) {
  return axiosInstance.post(
    'Auth/Login',
    data,
  );
}

function verifyOtp(data: VerifyOtpData) {
  return axiosInstance.post(
    'Auth/VerifyOtp',
    data,
  );
}

function getProfileData() {
  return axiosInstance.get(
    'Auth/GetProfile',
  );
}

function completeProfile(profileData: ProfileData) {
  const data = convertToFormData(profileData)
  return axiosInstance.put(
    'Auth/CompleteProfile',
    data
  );
}
  
export {
    login,
    verifyOtp,
    getProfileData,
    completeProfile
}