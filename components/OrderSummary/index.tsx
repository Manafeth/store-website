import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next";

const OrderSummary = () => {
  const [t] = useTranslation();
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 3,
        }}
      >
        <Typography variant='h5' component='h1'>
        {t('cart.subTotal')}
        </Typography>
        <Typography variant='h5' component='h1' sx={{ fontWeight: '700' }}>
        {t('common.sar')} 4,557.32
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 3,
        }}
      >
        <Typography variant='h5' component='h1'>
        {t('common.estimatedDelivery')}
        </Typography>
        <Typography variant='h5' component='h1' sx={{ fontWeight: '700' }}>
        {t('common.sar')} 10
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 3,
        }}
      >
        <Typography variant='h5' component='h1'>
        {t('cart.total')}
        </Typography>
        <Typography variant='h5' component='h1' sx={{ fontWeight: '700' }}>
        {t('common.sar')} 4,567.32
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderSummary;
