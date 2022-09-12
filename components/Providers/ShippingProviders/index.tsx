import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShippingCard from '../ShippingCard';
import { useCart } from '../../../contexts/CartContext';
import { useTranslation } from "next-i18next";


interface Props {
  handleNext: () => void;
  handleBack: () => void;
}

const ShippingProviders: FC<Props> = ({ handleNext, handleBack }) => {
  const { fetchShipmentsProviders, shipmentData, checkoutData } = useCart();
  const [t] = useTranslation();

  useEffect(() => {
    fetchShipmentsProviders(checkoutData.addressId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Typography variant='h1' component='h1' sx={{ mb: 5 }}>
      {t('checkout:shippingProviders')}
      </Typography>
      <Typography variant='h4' component='h1' sx={{ mb: 2 }}>
      {t('checkout:shippingDiscription')}
      </Typography>

      {shipmentData.map((item) => {
        return (
          <ShippingCard
            data={item}
            key={item.id}
          />
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
            fontSize: '14px',
            fontWeight: '500',
          }}
          onClick={handleBack}
        >
          {t('common:back')}
        </Button>
        <Button
          variant='contained'
          sx={{ width: '219px', height: '44px' }}
          type='submit'
          onClick={handleNext}
          disabled={!checkoutData.shipmentProviderId}
        >
           {t('common:next')}
        </Button>
      </Box>
    </Box>
  );
};

export default ShippingProviders;
