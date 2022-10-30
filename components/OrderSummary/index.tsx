import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useCart } from '../../contexts/CartContext';

const OrderSummary = () => {
  const [t] = useTranslation();
  const { cartData } = useCart();
  const result = cartData.reduce((total, currentValue) => total = total + (currentValue.total || 0),0);
  const subTotal = cartData.reduce((total, currentValue) => total = total + (currentValue.subTotal || 0),0);
  const checkoutAttributsTotal = cartData.reduce((total, currentValue) => total = total + (currentValue.checkoutAttributsTotal || 0),0);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          mb: 3,
          gap:'252px'
        }}
      >
        <Typography variant='h5' component='h1' sx={{color:'text.secondary'}}>
          {t('cart:subTotal')}
        </Typography>
        <Typography variant='h5' component='h1' sx={{ fontWeight: '700' }}>
          {t('common:sar')} {subTotal}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          mb: 3,
          gap:'128px',
        }}
      >
        <Typography variant='h5' component='h1' sx={{color:'text.secondary'}}>
        {t('checkout:checkoutAttributsTotal')}
        </Typography>
        <Typography variant='h5' component='h1' sx={{ fontWeight: '700' }}>
          {t('common:sar')} {checkoutAttributsTotal}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          mb: 3,
          gap:'278px'
        }}
      >
        <Typography variant='h5' component='h1' sx={{ fontWeight: '700' }}>
          {t('cart:total')}
        </Typography>
        <Typography variant='h5' component='h1' sx={{ fontWeight: '700' }}>
          {t('common:sar')} {result}
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderSummary;
