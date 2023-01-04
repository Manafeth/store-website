import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useEffect, FC } from 'react';
import ProductItem from '../../components/ProductItem';
import { useProfile } from '../../contexts/ProfileContext';
import MainLayout from '../../layouts/MainLayout';
import ProfileLayout from '../../layouts/ProfileLayout';
import useTranslation from 'next-translate/useTranslation';
import { NextPage } from 'next';

const WishListProduct: FC<NextPage> = () => {
  const { fetchWishListData, wishListData } = useProfile();
  const {t, lang} = useTranslation('settings');
  useEffect(() => {
    fetchWishListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);
  return (
    <MainLayout>
      <ProfileLayout>
        <Box>
          <Typography
            variant='h1'
            sx={{ mb: 5, fontWeight: 'bold', fontSize: { xs: '28px', md: '34px', fontSize: { xs: '28px', md: '34px' } } }}
          >
              {t('wishlistProduct')}
          </Typography>
          { wishListData?.map((item) => {
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
