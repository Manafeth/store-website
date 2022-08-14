import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import carIcon from '../../assets/images/icons/car-icon.png';
import clockIcon from '../../assets/images/icons/clock-icon.png';
import Image from 'next/image';
import Divider from '@mui/material/Divider';

const ActiveOrders = () => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
      }}
    >
      <Typography variant='h2' component='h1' sx={{ mb: 5 }}>
        No Order : #123456
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '10px 20px',
          gap: '10px',
          width: '400px',
          height: '47px',
          backgroundColor: 'grey.1600',
          justifyContent:'space-between',
          mb:2
        }}
      >
        <Typography>
        On Delivery
        </Typography>
        <Image src={carIcon}  alt='car iocn' />
      </Box>
      <Typography variant='h5' sx={{ mb:2, fontWeight: '400', color:'text.secondary' }}>
      20 July 2022, 05:00 PM
      </Typography>
      <Typography variant='h3' sx={{ mb: 5, fontWeight: '600' }}>
      SAR  1,139.33
      </Typography>
      <Divider/>
      <Typography variant='h2' component='h1' sx={{ mb: 5, mt:4 }}>
      No Order : #123456
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '10px 20px',
          gap: '10px',
          width: '400px',
          height: '47px',
          backgroundColor: 'grey.1600',
          justifyContent:'space-between',
          mb:2
        }}
      >
        <Typography>
        On Process
        </Typography>
        <Image src={clockIcon}  alt='clock iocn' width='24' height='24' />
      </Box>
      <Typography variant='h5' sx={{ mb:2, fontWeight: '400', color:'text.secondary' }}>
      20 July 2022, 05:00 PM
      </Typography>
      <Typography variant='h3' sx={{ mb: 5, fontWeight: '600' }}>
      SAR  59,66
      </Typography>
     
    </Box>
  );
};

export default ActiveOrders;
