import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import ProductItem from '../../components/ProductItem';
import { useProfileModal } from '../../contexts/ProfileContext';
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
            sx={{ mb: 5, fontWeight: 'bold', fontSize: { xs: '28px', md: '34px', fontSize: { xs: '28px', md: '34px' } } }}
          >
            Wishlist Product
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
