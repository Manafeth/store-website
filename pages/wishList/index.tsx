import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import ProductItem from '../../components/ProductItem';
import { useProfileModal } from '../../contexts/ProfileModalContext';
import MainLayout from '../../layouts/MainLayout';
import ProfileLayout from '../../layouts/ProfileLayout';

const WishListProduct = () => {
  const { fetchWishListData, wishListData } = useProfileModal();
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
            component='h1'
            sx={{ mb: 5, fontWeight: 'bold' }}
          >
            Wishlist Product
          </Typography>
          {wishListData?.map((item) => {
            return(
            <ProductItem data={item} key={item.id} />
          );
          })}
        </Box>
      </ProfileLayout>
    </MainLayout>
  );
};

export default WishListProduct;
