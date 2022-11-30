import React, {MouseEvent } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Container from '@mui/material/Container';
import Image from 'next/image';
import paymentCancel from '../../assets/images/payment-cancel.svg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useCommon } from '../../contexts/CommonContext';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { redirectTabbyPayment } from '../../services/payment.services';

const PaymentCancel = () => {
  const {t, lang} = useTranslation('common');
  const { storeInfo } = useCommon();
  const router = useRouter();
  const { payment_id } = router.query;
  console.log('payment_id',payment_id)

 

  function handleRedirectTabbyPayment(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    if(payment_id){
    redirectTabbyPayment(payment_id).then(resp=>{
      if (resp)
          window.location = resp.data.data;
    })
  }  
  }

  return (
    <Box component='main' pt={11.375} sx={{ backgroundColor: storeInfo.backgroundColor }}>
        <Header />
        <Container sx={{ mt: 5 }}>
        <Grid container spacing={{ xs: 2, lg: 5 }} rowSpacing={4}>
              <Grid item xs={12} md={8}>
              <Typography
          variant='h1'
          component='h1'
          sx={{ mb: 4, mt:5 ,fontSize: { xs: '28px', md: '40px' } }}
        >
          {t('paymentCanceled')}
        </Typography>
        <Typography
          variant='h5'
          component='h1'
          sx={{ mb: 4, fontSize: { xs: '14px' } ,lineHeight: '24px',
          letterSpacing: '0.2px', width:'80%'}}
        >
          {t('paymentDescr')}
        </Typography>
        {/* <Link href='/'> */}
        <Button
          variant='contained'
          color='primary'
          sx={{
            width: '219px',
            height: '44px',
            mr: '20px',
            textTransform: 'lowercase'
          }}
          onClick={handleRedirectTabbyPayment}
        >
          {t('tryAgain')}
        </Button>
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
        
    </Box>
      
  
  );
};

export default PaymentCancel;
