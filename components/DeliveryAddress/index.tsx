import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useProfileModal } from '../../contexts/ProfileContext';
import AddressCard from './components';
import { addressData } from '../../types/profile';
interface Props {
  handleNext: () => void;
  handleBack: () => void;
}

const DeliveryAddress: FC<Props> = ({ handleNext, handleBack }) => {
  const { fetchAllAddressData, addressData } = useProfileModal();
  useEffect(() => {
    fetchAllAddressData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
      }}
    >
      <>
        <Typography variant='h1' component='h1' sx={{ mb: 5 }}>
          Delivery address
        </Typography>
        {addressData.map((item) => {
          return (
            <Box key={item.id} sx={{ mb: 2 }}>
              <AddressCard data={item}/>
            </Box>
          );
        })}

        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'space-between', sm: 'flex-start' },
            pt: 7,
            pb: 5,
          }}
        >
          <Button
            variant='contained'
            color='secondary'
            sx={{
              color: 'secondary.contrastText',
              width: '171px',
              height: '44px',
              backgroundColor: ' background.grayDisabled',
              mr: '20px',
              fontSize:'14px',
              fontWeight:'500',
             
            }}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant='contained'
            sx={{ width: '219px', height: '44px' }}
            type='submit'
            onClick={handleNext}
          >
            Next
          </Button>
        </Box>
      </>
    </Box>
  );
};

export default DeliveryAddress;
