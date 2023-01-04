import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Container from '@mui/material/Container';
import Image from 'next/image';
import paymentSuccessful from '../../assets/images/successful-payment.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useCommon } from '../../contexts/CommonContext';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { redirectSuccessfullMobilePayment, redirectTabbySuccessfullPayment } from '../../services/payment.services';
import paths from '../../constants/paths';
import Link from 'next/link';

const PaymentSuccessful = () => {
  const { t } = useTranslation('common');
  const { storeInfo } = useCommon()
  const router = useRouter();
  const { payment_id } = router.query;

  function handleRedirectTabbySuccessfullPayment() {
    if (payment_id) {
        redirectTabbySuccessfullPayment(payment_id).then(resp => {
        if (resp)
          window.location = resp.data.data;
      })
    }
  }
  
  useEffect(() => {
    if (payment_id)
      redirectSuccessfullMobilePayment(payment_id)
  }, [payment_id])
  

  return (
    <Box component='main' pt={11.375} sx={{ backgroundColor: storeInfo.backgroundColor}}>
      <Header />
      <Container>
        <Grid container spacing={{ xs: 2, lg: 5 }} rowSpacing={4} alignItems={{ md: 'center' }} height='100vh' pt={{ xs: 10, md: 0 }}>
          <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'left' }}>
            <Typography
              variant='h1'
              component='h1'
              sx={{ mb: 4.75, fontSize: { xs: '28px', md: '32px' } }}
            >
              {t('paymentSuccessful')}
            </Typography>
            <Typography
              variant='h5'
              component='h1'
              sx={{
                lineHeight: '24px',
                letterSpacing: '0.2px',
                maxWidth: '510px',
                margin: { xs: '0 auto', md: '0' }
              }}
            >
              {t('paymentDescription')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                pt: 4.75,
              }}
            >
              <Button
                variant='contained'
                color='primary'
                sx={{
                  width: '219px',
                  height: '44px',
                  mr: '20px',
                  textTransform: 'lowercase'
                }}
                onClick={handleRedirectTabbySuccessfullPayment}
              >
                {t('viewOrders')}
              </Button>
              <Link href={paths.home}>
                <Button
                  variant='outlined'
                  color='primary'
                  sx={{
                    width: '219px',
                    height: '44px',
                    mr: '20px',
                    textTransform: 'lowercase',
                    borderRadius: '8px'
                  }}
                >
                  {t('continueShopping')}
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} textAlign={{xs: 'center', md: 'right'}}>
            <Image
              src={paymentSuccessful}
              width='400'
              height='476'
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
