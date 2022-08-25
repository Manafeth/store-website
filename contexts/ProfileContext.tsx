import { useRouter } from 'next/router';
import React, {
  createContext,
  useContext,
  ReactElement,
  FC,
  useState,
} from 'react';
import { getAllCities, getCountries } from '../services/common.services';
import { createAddress, deleteAddress, getAllActiveOrders, getAllAddress, getAllArchiveed, getCustomerProfileData, getProfileWishListData, updateAddress } from '../services/profile.services';
import { activeOrderData, addressData, addressDetailsData, ProfileModalState, wishListData,cityData, countryData, customerData} from '../types/profile';

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
  fullName: '',
  email: '',
  countryId: 0,
  phoneNumber:'',
  countryForLocationId: null,
  cityId: null,
  gender: null,
  dateOfBirth: null
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
    try {
      await createAddress(data);
      setAddressLoading(false);
      fetchAllAddressData();
    } catch(error) {
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
  async function deleteAddressData() {
    setUpdateAddressLoading(true);
    try {
      await deleteAddress();
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
    fetchWishListData,
    fetchActiveOrderData,
    fetchArchiveedOrderData,
    fetchAllAddressData,
    updateAddressData,
    fetchAllCityData,
    fetchAllCountryData,
    triggerCreateAddress,
    deleteAddressData,
    fetchCustomerProfileData
  };

  return (
    <ProfileModalContext.Provider value={state}>
      {children}
    </ProfileModalContext.Provider>
  );
};

export const useProfileModal = () => useContext(ProfileModalContext);
