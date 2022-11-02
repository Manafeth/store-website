import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import { useCart } from '../../contexts/CartContext';

const OrderSummary = () => {
  const {t: CAT} = useTranslation('cart');
  const {t: CT} = useTranslation('common');
  const {t: COT} = useTranslation('checkout');

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
          justifyContent:'space-between'
        }}
      >
        <Typography variant='h5' component='h1' sx={{color:'text.secondary'}}>
          {CAT('subTotal')}
        </Typography>
        <Typography variant='h5' component='h1' sx={{ fontWeight: '700' }}>
          {CT('sar')} {subTotal}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          mb: 3,
          justifyContent:'space-between'
        }}
      >
        <Typography variant='h5' component='h1' sx={{color:'text.secondary'}}>
        {COT('checkoutAttributsTotal')}
        </Typography>
        <Typography variant='h5' component='h1' sx={{ fontWeight: '700' }}>
          {CT('sar')} {checkoutAttributsTotal}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          mb: 3,
          justifyContent:'space-between'
        }}
      >
        <Typography variant='h5' component='h1' sx={{ fontWeight: '700' }}>
          {CAT('total')}
        </Typography>
        <Typography variant='h5' component='h1' sx={{ fontWeight: '700' }}>
          {CT('sar')} {result}
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderSummary;
