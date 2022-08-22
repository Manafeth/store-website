import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ColorFilter = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        ml: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            backgroundColor: '#23A6F0',
            width: 30,
            height: 30,
            borderRadius: '50%',
            mr: 0.75,
            border: '2px solid #FFFFFF',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Typography
          variant='h5'
          component='h1'
          sx={{ color: 'grey.2200', fontWeight: '700' }}
        >
          Blue
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            backgroundColor: '#23856D',
            width: 30,
            height: 30,
            borderRadius: '50%',
            mr: 0.75,
            border: '2px solid #FFFFFF',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Typography
          variant='h5'
          component='h1'
          sx={{ color: 'grey.2200', fontWeight: '700' }}
        >
          Green
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            backgroundColor: '#E77C40',
            width: 30,
            height: 30,
            borderRadius: '50%',
            mr: 0.75,
            border: '2px solid #FFFFFF',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Typography
          variant='h5'
          component='h1'
          sx={{ color: 'grey.2200', fontWeight: '700' }}
        >
          Orange
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            backgroundColor: '#252B42',
            width: 30,
            height: 30,
            borderRadius: '50%',
            border: '2px solid #FFFFFF',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Typography
          variant='h5'
          component='h1'
          sx={{ color: 'grey.2200', fontWeight: '700', ml: 1 }}
        >
          {' '}
          Dark Blue
        </Typography>
      </Box>
    </Box>
  );
};

export default ColorFilter;
