import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Container from '@mui/material/Container';
import Image from 'next/image';
import paymentDecline from '../../assets/images/payment-decline.svg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useCommon } from '../../contexts/CommonContext';

const PaymentDecline = () => {
  const {t, lang} = useTranslation('common');
  const { storeInfo } = useCommon()

  

  return (
    <MainLayout>
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={5} rowSpacing={4}>
              <Grid item xs={12} md={8}>
              <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, mt:5 ,fontSize: { xs: '28px', md: '40px' } }}
        >
          {t('paymentDecline')}
        </Typography>
        <Typography
          variant='h5'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '14px' } ,lineHeight: '24px',
          letterSpacing: '0.2px', width:'80%'}}
        >
          {t('paymentDescr')}
        </Typography>
        <Link href='/'>
        <Button
          variant='contained'
          color='secondary'
          sx={{
            color: storeInfo.buttonTitelColor,
            width: '219px',
            height: '44px',
            backgroundColor: storeInfo.buttonColor,
            mr: '20px',
            textTransform: 'lowercase'
          }}
        >
          {t('tryAgain')}
        </Button>
        </Link>
              </Grid>
              <Grid item xs={12} md={4}>
              <Image
          src={paymentDecline}
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

export default PaymentDecline;