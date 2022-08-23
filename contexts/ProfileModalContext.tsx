import { useRouter } from 'next/router';
import React, {
  createContext,
  useContext,
  ReactElement,
  FC,
  useState,
} from 'react';
import { getAllActiveOrders, getProfileWishListData } from '../services/profile.services';
import { activeOrderData, ProfileModalState, wishListData } from '../types/profile';

interface Props {
  children: ReactElement | ReactElement[];
}

const ProfileModalContext = createContext({} as ProfileModalState);

export const ProfileModalProvider: FC<Props> = ({ children }) => {
  const [wishListData, setwishListData] = useState<wishListData[]>([]);
  const [activeOrderData, setActiveOrderData] = useState<activeOrderData[]>([]);

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

  const state: ProfileModalState = {
    fetchWishListData,
    wishListData,
    activeOrderData,
    fetchActiveOrderData
  };

  return (
    <ProfileModalContext.Provider value={state}>
      {children}
    </ProfileModalContext.Provider>
  );
};

export const useProfileModal = () => useContext(ProfileModalContext);
