import React, {MouseEvent, useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import Container from '@mui/material/Container';
import Image from 'next/image';
import paymentCancel from '../../assets/images/payment-cancel.svg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useCommon } from '../../contexts/CommonContext';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { redirectTabbyPayment } from '../../services/payment.services';

const PaymentCancel = () => {
  const {t} = useTranslation('common');
  const { storeInfo } = useCommon();
  const router = useRouter();
  const { payment_id } = router.query;
  const [state, setState] = useState('');
  
  useEffect(() => {
    if (payment_id) {
      redirectTabbyPayment(payment_id).then(resp => {
        setState(resp.data.data)
      })
    }
  }, [payment_id])

  return (
    <Box component='main' pt={11.375} sx={{ backgroundColor: storeInfo.backgroundColor }}>
      <Header />
      <Container>
        <Grid container spacing={{ xs: 2, lg: 5 }} rowSpacing={4} alignItems={{ md: 'center' }} height='100vh' pt={{ xs: 10, md: 0 }}>
          <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'left' }}>
            <Typography
              variant='h1'
              component='h1'
              sx={{ mb: 4.75, fontSize: { xs: '28px', md: '32px' } }}
            >
              {t('paymentCanceled')}
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
              {t('paymentDescr')}
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
                href={state}
                disabled={!state}
              >
                {t('tryAgain')}
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} textAlign={{xs: 'center', md: 'right'}}>
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
