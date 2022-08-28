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
import { createAddress, deleteAddress, getAllActiveOrders, getAllAddress, getAllArchiveed, getCustomerProfileData, getEmailNotificationData, getProfileWishListData, updateAddress, updateCustomerProfile, updateEmailNotification } from '../services/profile.services';
import { activeOrderData, addressData, addressDetailsData, ProfileModalState, wishListData,cityData, countryData, customerData, emailNotificationData} from '../types/profile';

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
  
  const [addressData,setaddressData] = useState<addressData[]>([]);
  const [addressLoading, setAddressLoading] = useState(false);
  const [updateAddressLoading, setUpdateAddressLoading] = useState(false);
  const [updateEmailLoading, setUpdateEmailLoading] = useState(false);
  const [updateCustomerLoading, setUpdateCustomerLoading] = useState(false);
  const [createStatus, setCreateStatus] = useState('');
  const [updateStatus, setupdateStatus] = useState('');
  const [createAddressStatus, setCreateAddressStatus] = useState('');
  
  const [addressDetailsData, setAddressDetailsData] = useState<addressDetailsData>({
    id: 0,
    cityId: 0,
    address: '',
    street: '',
    type: 0,
    latitude:0,
    longitude:0,
})
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
    try {
      const response = await getAllAddress({page: 1, pageSize: 10});
      setaddressData(response.data.data.data);
    } catch (error) {
      Promise.reject(error);
    }
  }
  async function  fetchAllCityData() {
    try {
      const response = await getAllCities();
      setCityData(response.data.data);
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
  async function triggerCreateAddress(data:addressDetailsData) {
    setAddressLoading(true);
    setCreateAddressStatus(LOADING)
    try {
      await createAddress(data);
      setCreateAddressStatus(SUCCESS)
      setAddressLoading(false);
      fetchAllAddressData();
    } catch(error) {
      setCreateAddressStatus(ERROR)
      setAddressLoading(false);
      Promise.reject(error);
    }
  }
  async function updateAddressData(data: addressDetailsData) {
    setUpdateAddressLoading(true);
    try {
      await updateAddress(data);
      setUpdateAddressLoading(false);
      fetchAllAddressData();
    } catch(error) {
      setUpdateAddressLoading(false);
      Promise.reject(error);
    }
  }
  async function deleteAddressData(id:number) {
    setUpdateAddressLoading(true);
    try {
      await deleteAddress(id);
    } catch(error) {
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
    setUpdateEmailLoading(true);
    setCreateStatus(LOADING)
    try {
      await  updateEmailNotification(data);
      setCreateStatus(SUCCESS);
      setUpdateEmailLoading(false);
      fetchEmailNotificationData();
    } catch(error) {
      setCreateStatus(ERROR);
      setUpdateEmailLoading(false);
      Promise.reject(error);
    }
  }
  async function updateProfileData(data: customerData) {
    setUpdateCustomerLoading(true);
    setupdateStatus(LOADING)
    try {
      await updateCustomerProfile(data);
      setupdateStatus(SUCCESS);
      setUpdateCustomerLoading(false);
      fetchCustomerProfileData();
    } catch(error) {
      setupdateStatus(ERROR);
      setUpdateCustomerLoading(false);
      Promise.reject(error);
    }
  }
  const state: ProfileModalState = {
    wishListData,
    activeOrderData,
    archiveedOrderData,
    addressData,
    addressLoading,
    updateAddressLoading,
    addressDetailsData,
    cityData,
    countryData,
    customerData,
    emailNotificationData,
    updateEmailLoading,
    createStatus,
    updateCustomerLoading,
    updateStatus,
    createAddressStatus,
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
    updateProfileData
  };

  return (
    <ProfileModalContext.Provider value={state}>
      {children}
    </ProfileModalContext.Provider>
  );
};

export const useProfileModal = () => useContext(ProfileModalContext);
