import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PhoneNumberInput from '../../PhoneNumberInput';

const PhoneNumber = () => {
  return (
    <Box>
        <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 2, letterSpacing: '0.1px' }}>
            Enter phone number
        </Typography>
        <Typography variant='h2' sx={{ mb: 6, lineHeight: '30px', letterSpacing: '0.2px' }}>
            Sign-in to Olivia Store with your phone number
        </Typography>
        <PhoneNumberInput sx={{ mb: 9.5 }} />
    </Box>
  )
}

export default PhoneNumber