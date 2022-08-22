import { useRouter } from 'next/router';
import React, {
  createContext,
  useContext,
  ReactElement,
  FC,
  useState,
} from 'react';
import { getProfileWishListData } from '../services/profile.services';
import { ProfileModalState, wishListData } from '../types/profile';

interface Props {
  children: ReactElement | ReactElement[];
}

const ProfileModalContext = createContext({} as ProfileModalState);

export const ProfileModalProvider: FC<Props> = ({ children }) => {
  const [wishListData, setwishListData] = useState<wishListData[]>([]);

  const router = useRouter();

  async function fetchWishListData() {
    try {
      const response = await getProfileWishListData();
      setwishListData(response.data.data);
    } catch (error) {
      Promise.reject(error);
    }
  }

  const state: ProfileModalState = {
    fetchWishListData,
    wishListData,
  };

  return (
    <ProfileModalContext.Provider value={state}>
      {children}
    </ProfileModalContext.Provider>
  );
};

export const useProfileModal = () => useContext(ProfileModalContext);
