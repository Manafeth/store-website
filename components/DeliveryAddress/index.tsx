import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useProfile } from '../../contexts/ProfileContext';
import AddressCard from './components';
import { useTranslation } from "next-i18next";
import CircularProgress from '@mui/material/CircularProgress';
import { useCart } from '../../contexts/CartContext';
interface Props {
  handleNext: () => void;
  handleBack: () => void;
  loading?: boolean;
}

const DeliveryAddress: FC<Props> = ({ handleNext, handleBack, loading }) => {
  const { fetchAllAddressData, addressData } = useProfile();
  const { checkoutData } = useCart();
  const [t] = useTranslation();
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
        {t('checkout:deliveryAddress')}
        </Typography>
        {addressData.length > 0 ? addressData.map((item) => {
          return (
            <Box key={item.id} sx={{ mb: 2 }}>
              <AddressCard
                data={item}
              />
            </Box>
          );
        }):(
          <Box sx={{ display: 'flex', alignItems: 'left', flexDirection: 'column', marginTop: '20px' }}>
          <Typography variant="h2" sx={{ mb: '20px', fontWeight: 'bold' }}>
          {t('settings:oops')}
          </Typography>
          <Typography variant="h5" sx={{ mb: '20px', fontWeight: 'bold' }}>
          {t('settings:noAddress')}
          </Typography>
        </Box>
        )}

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
              {t('common:back')}
          </Button>
          <Button
            variant='contained'
            sx={{ width: '219px', height: '44px', py: loading ? '10px' : '14px'}}
            type='submit'
            onClick={handleNext}
            disabled={!checkoutData.addressId || loading}
          >
            {loading ? <CircularProgress size={25} color="info" /> :  t('common:next')}
            
          </Button>
        </Box>
      </>
    </Box>
  );
};

export default DeliveryAddress;
