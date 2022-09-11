import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PaymentCard from '../PaymentCard';
import { useCart } from '../../../contexts/CartContext';
import TextField from '@mui/material/TextField';
import { useTranslation } from "react-i18next";
import Link from 'next/link';
import paths from '../../../constants/paths';
import CircularProgress from '@mui/material/CircularProgress';
import { SUCCESS } from '../../../constants';
import { useRouter } from 'next/router';


interface Props {
  handleBack: () => void;
  loading?: boolean;
}

const PaymentProviders: FC<Props> = ({ handleBack,loading }) => {
  const [t] = useTranslation();
  const { paymnetData, fetchPaymentProviders, createOrderTrigger, updateCheckoutData, checkoutData, orderAndInvoice, createOrderStatus, clearOrderStatus } = useCart();
  const router = useRouter()

  useEffect(() => {
    fetchPaymentProviders(checkoutData.addressId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleInputChange(ev: ChangeEvent<HTMLInputElement>) {
    updateCheckoutData('couponCode', ev.target.value)
  }

 
  function handleClick() {
    createOrderTrigger()
  }

  useEffect(() => {
    if (createOrderStatus === SUCCESS) {
      router.push(paths.orderDetails(orderAndInvoice.orderId));
      clearOrderStatus();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createOrderStatus, orderAndInvoice.orderId, router])
  

  return (
    <Box>
      <Typography variant='h1' component='h1' sx={{ mb: 5 }}>
      {t('checkOut.paymentProviders')}
      </Typography>
      <Typography variant='h4' component='h1' sx={{ mb: 2 }}>
      {t('checkOut.paymentDiscription')}
      </Typography>

      {paymnetData.map((item) => {
        return (
          <PaymentCard
            data={item}
            key={item.id}
          />
        );
      })}

      <TextField
        id="outlined-basic"
        label="Promocode"
        placeholder="HappyEid2022"
        variant="outlined"
        sx={{ mb: 4, mt: 2 }}
        onChange={handleInputChange}
        name="fullName"
        value={checkoutData.couponCode}
        fullWidth
      />

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
            backgroundColor: 'background.grayDisabled',
            mr: '20px',
            fontSize: '14px',
            fontWeight: '500',
          }}
          onClick={handleBack}
        >
             {t('common.back')}
        </Button>
        <Button
          variant='contained'
          type="submit" 
          disabled={!checkoutData.paymentProviderId ||loading}
          sx={{ width: '219px', height: '44px', py: loading ? '10px' : '14px' }}
          onClick={handleClick}
        >
          {loading ? <CircularProgress size={25} color="info" /> : t('checkOut.placeOrder')}
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentProviders;