import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import ProductItem from '../../components/ProductItem';
import { useProfileModal } from '../../contexts/ProfileContext';
import MainLayout from '../../layouts/MainLayout';
import ProfileLayout from '../../layouts/ProfileLayout';
import { useTranslation } from "react-i18next";
import Divider from '@mui/material/Divider';

const WishListProduct = () => {
  const { fetchWishListData, wishListData } = useProfileModal();
  const [t] = useTranslation();
  useEffect(() => {
    fetchWishListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MainLayout>
      <ProfileLayout>
        <Box>
          <Typography
            variant='h1'
            sx={{ mb: 5, fontWeight: 'bold', fontSize: { xs: '28px', md: '34px', fontSize: { xs: '28px', md: '34px' } } }}
          >
              {t('settings.wishlistProduct')}
          </Typography>
          {wishListData?.map((item) => {
            return(
              <Box key={item.id} mb={3}>
                <ProductItem data={item} />
              </Box>
            );
          })}
        </Box>
      </ProfileLayout>
    </MainLayout>
  );
};

export default WishListProduct;
