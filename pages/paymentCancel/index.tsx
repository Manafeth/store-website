import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import Image from 'next/image';
import paymentCancel from '../../assets/images/payment-cancel.svg';
import { useContant } from '../../contexts/ContentContext';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const PaymentCancel = () => {
  const {t, lang} = useTranslation('privacy');

  

  return (
    <MainLayout>
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={5} rowSpacing={4}>
              <Grid item xs={12} md={8}>
              <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '28px', md: '40px' } }}
        >
          {t('privacyPolicy')}
        </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
              <Image
          src={paymentCancel}
          width='410'
          height='340'
          alt='Auth'
          style={{ maxWidth: '100%', height: 'auto' }}
        />
              </Grid>
        
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default PaymentCancel;
