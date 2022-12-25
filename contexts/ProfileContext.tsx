import { useRouter } from 'next/router';
import React, {
  createContext,
  useContext,
  ReactElement,
  FC,
  useState,
} from 'react';
import { ERROR, LOADING, SUCCESS } from '../constants';
import { getAllCities, getCountries } from '../services/common.services';
import { createAddress, deleteAddress, getAddress, getAllActiveOrders, getAllAddress, getAllArchiveed, getCustomerProfileData, getEmailNotificationData, getProfileWishListData, updateAddress, updateCustomerProfile, updateEmailNotification } from '../services/profile.services';
import { activeOrderData, AddressData, ProfileModalState, wishListData,cityData, countryData, customerData, emailNotificationData} from '../types/profile';
import { useAlert } from './AlertContext';

interface Props {
  children: ReactElement | ReactElement[];
}

const ProfileModalContext = createContext({} as ProfileModalState);

export const ProfileModalProvider: FC<Props> = ({ children }) => {
  const [wishListData, setwishListData] = useState<wishListData[]>([]);
  const [activeOrderData, setActiveOrderData] = useState<activeOrderData[]>([]);
  const [archiveedOrderData,setArchiveedOrderData] = useState<activeOrderData[]>([]);
  const [cityData, setCityData] = useState<cityData[]>([]);
  const [countryData, setCountryData] = useState<countryData[]>([]); 
  const [addressData,setaddressData] = useState<AddressData[]>([]);
  const [createStatus, setCreateStatus] = useState('');
  const [updateStatus, setupdateStatus] = useState('');
  const [updateAddressStatus, setupdateAddressStatus] = useState('');
  const [createAddressStatus, setCreateAddressStatus] = useState('');
  const [removeStatus, setRemoveStatus] = useState('');
  const [hasMoreCities, setHasMoreCities] = useState(false);
  const [status, setStatus] = useState('');
  const { sendAlert } = useAlert();


const [customerData, setCustomerData] = useState<customerData>({
  imageFilePath: {
    orignialUrl: '',
    thumbUrl: '',
  },
  imageFile:null,
  fullName: '',
  email: '',
  countryId: 0,
  phoneNumber:'',
  countryForLocationId: null,
  cityId: null,
  gender: null,
  dateOfBirth: null
})
const [emailNotificationData, setEmailNotificationData] = useState<emailNotificationData>({
  reminderEmail: false,
  reminderPush: false,
  activityEmail: false,
  activityPush: false
})
const [addressDetails, setAddressDetails] = useState<AddressData>({
  id:0,
  type:0,
  address:'',
  cityId:0,
  street: '',
  latitude: 0,
  longitude: 0,
})
  const router = useRouter();

  async function fetchWishListData() {
    try {
      const response = await getProfileWishListData();
      setwishListData(response.data.data);
    } catch (error) {
      Promise.reject(error);
    }
  }
  async function fetchActiveOrderData() {
    try {
      const response = await getAllActiveOrders({page: 1, pageSize: 10});
      setActiveOrderData(response.data.data.data);
    } catch (error) {
      Promise.reject(error);
    }
  }
  async function fetchArchiveedOrderData() {
    try {
      const response = await getAllArchiveed({page: 1, pageSize: 10});
      setArchiveedOrderData(response.data.data.data);
    } catch (error) {
      Promise.reject(error);
    }
  }
  async function fetchAllAddressData() {
    setStatus(LOADING)
    try {
      const response = await getAllAddress({page: 1, pageSize: 10});
      setStatus(SUCCESS)
      setaddressData(response.data.data.data);
    } catch (error) {
      setStatus(ERROR)
      Promise.reject(error);
    }
  }
  async function  fetchAllCityData(params?: { page?: number; pageSize?: number; searchKey?: string; countryId?: number }) {
    try {
      const response = await getAllCities(params);
      if ((params?.page || 0) > 1) {
        setCityData((prevState) => [...prevState, ...response.data.data.data]);
      } else {
        setCityData(response.data.data.data);
      }
      setHasMoreCities(response.data.data.data.length === params?.pageSize)
    } catch (error) {
      Promise.reject(error);
    }
  }
  async function fetchAllCountryData() {
    try {
      const response = await  getCountries();
      setCountryData(response.data.data);
    } catch (error) {
      Promise.reject(error);
    }
  }
  async function triggerCreateAddress(data:AddressData) {
    setCreateAddressStatus(LOADING)
    try {
      const response = await createAddress(data);
      setCreateAddressStatus(SUCCESS)
      fetchAllAddressData();
      sendAlert(response.data?.message, SUCCESS)
    } catch(error: any) {
      setCreateAddressStatus(ERROR)
      sendAlert(error.response?.data?.Message, ERROR)
      Promise.reject(error);
    }
  }
  async function updateAddressData(data:AddressData) {
    setupdateAddressStatus(LOADING)
    try {
      const response = await updateAddress(data);
      setupdateAddressStatus(SUCCESS);
      fetchAllAddressData();
      sendAlert(response.data?.message, SUCCESS)
    } catch(error: any) {
      setupdateAddressStatus(ERROR);
      sendAlert(error.response?.data?.Message, ERROR)
      Promise.reject(error);
    }
  }
  async function getAddressDetails(id:number) {
    try {
     const response = await  getAddress(id);
      setAddressDetails(response.data.data)
    } catch(error) {
      Promise.reject(error);
    }
  }
  async function deleteAddressData(id:number) {
    setRemoveStatus(LOADING)
    try {
      const response = await deleteAddress(id);
      setRemoveStatus(SUCCESS);
      fetchAllAddressData();
      sendAlert(response.data?.message, SUCCESS)
    } catch(error: any) {
      setRemoveStatus(ERROR);
      sendAlert(error.response?.data?.Message, ERROR)
      Promise.reject(error);
    }
  }
  async function fetchCustomerProfileData() {
    try {
      const response = await getCustomerProfileData();
      setCustomerData(response.data.data);
    } catch (error) {
      Promise.reject(error);
    }
  }
  async function fetchEmailNotificationData() {
    try {
      const response = await getEmailNotificationData();
      setEmailNotificationData(response.data.data);
    } catch (error) {
      Promise.reject(error);
    }
  }
  async function triggerUpdateEmailNotification(data:emailNotificationData) {
    setCreateStatus(LOADING)
    try {
      const response = await  updateEmailNotification(data);
      setCreateStatus(SUCCESS);
      fetchEmailNotificationData();
      sendAlert(response.data?.message, SUCCESS)
    } catch(error: any) {      
      setCreateStatus(ERROR);
      sendAlert(error.response?.data?.Message, ERROR)
    Promise.reject(error);
    }
  }
  async function updateProfileData(data: customerData) {
    setupdateStatus(LOADING)
    try {
      const response = await updateCustomerProfile(data);
      setupdateStatus(SUCCESS);
      fetchCustomerProfileData();
      sendAlert(response.data?.message, SUCCESS)
    } catch(error: any) {
      setupdateStatus(ERROR);
      sendAlert(error.response?.data?.Message, ERROR)
      Promise.reject(error);
    }
  }
  const state: ProfileModalState = {
    wishListData,
    activeOrderData,
    archiveedOrderData,
    addressData,
    cityData,
    countryData,
    customerData,
    emailNotificationData,
    createStatus,
    updateStatus,
    createAddressStatus,
    removeStatus,
    updateAddressStatus,
    addressDetails,
    status,
    hasMoreCities,
    fetchWishListData,
    fetchActiveOrderData,
    fetchArchiveedOrderData,
    fetchAllAddressData,
    updateAddressData,
    fetchAllCityData,
    fetchAllCountryData,
    triggerCreateAddress,
    deleteAddressData,
    fetchCustomerProfileData,
    fetchEmailNotificationData,
    triggerUpdateEmailNotification,
    updateProfileData,
    getAddressDetails
   
  };

  return (
    <ProfileModalContext.Provider value={state}>
      {children}
    </ProfileModalContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileModalContext);
