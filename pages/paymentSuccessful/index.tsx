import React, { MouseEvent } from 'react';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Container from '@mui/material/Container';
import Image from 'next/image';
import paymentSuccessful from '../../assets/images/payment-successful.svg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useCommon } from '../../contexts/CommonContext';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { redirectTabbySuccessfullPayment } from '../../services/payment.services';
import Link from 'next/link';

const PaymentSuccessful = () => {
  const { t, lang } = useTranslation('common');
  const { storeInfo } = useCommon()
  const router = useRouter();
  const { payment_id } = router.query;
  console.log('payment_id', payment_id)



  function handleRedirectTabbySuccessfullPayment(ev: MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    if (payment_id) {
        redirectTabbySuccessfullPayment(payment_id).then(resp => {
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
              sx={{ mb: 4, mt: 5, fontSize: { xs: '28px', md: '40px' } }}
            >
              {t('paymentSuccessful')}
            </Typography>
            <Typography
              variant='h5'
              component='h1'
              sx={{
                mb: 4, fontSize: { xs: '14px' }, lineHeight: '24px',
                letterSpacing: '0.2px', width: '80%'
              }}
            >
              {t('paymentDescription')}
            </Typography>
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
                color: storeInfo.buttonTitelColor,
                width: '219px',
                height: '44px',
                backgroundColor: storeInfo.buttonColor,
                mr: '20px',
                textTransform: 'lowercase'
              }}
              onClick={handleRedirectTabbySuccessfullPayment}
            >
              {t('viewOrders')}
            </Button>
            <Link href='/'>
        <Button
          variant='contained'
          color='secondary'
          sx={{
            color: storeInfo.buttonTitelColor,
            width: '219px',
            height: '44px',
            backgroundColor: ' linear-gradient(200.08deg, rgba(255, 255, 255, 0.0001) -10.81%, #E6EAEE 98.03%);',
            mr: '20px',
            textTransform: 'lowercase',
            border: '0.4px solid #1995AD',
            borderRadius: '8px'
          }}
        >
          {t('continueShopping')}
        </Button>
        </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src={paymentSuccessful}
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

export default PaymentSuccessful;
