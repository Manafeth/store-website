import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const OrderSummary = () => {
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
          Subtotal
        </Typography>
        <Typography variant='h5' component='h1' sx={{ fontWeight: '700' }}>
          SAR 4,557.32
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
          Estimated Delivery & Handling
        </Typography>
        <Typography variant='h5' component='h1' sx={{ fontWeight: '700' }}>
          SAR 10
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
          Total
        </Typography>
        <Typography variant='h5' component='h1' sx={{ fontWeight: '700' }}>
          SAR 4,567.32
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderSummary;
