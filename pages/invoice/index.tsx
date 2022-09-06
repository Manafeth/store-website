import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MainLayout from '../../layouts/MainLayout';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useTranslation } from "react-i18next";

const Invoice = () => {
  const [t] = useTranslation();
  return (
    <MainLayout>
      <Box component='section' sx={{ mt: 5 }}>
        <Container maxWidth={false} sx={{ maxWidth: 1050 }}>
          <Typography variant='h1' component='h1' sx={{ mb: 3 }}>
          {t('checkOut.inovice')} #33221
          </Typography>
          <Typography
            variant='h6'
            component='h1'
            sx={{ fontWeight: '700', mb: 3, color: 'text.grey' }}
          >
            {t('checkOut.viewInvoice')}
          </Typography>
          <Grid container spacing='40px'>
            <Grid item xs={4}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', mb: 2 }}
              >
                 {t('checkOut.billTo')}
              </Typography>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', color: 'text.grey', mb: 4 }}
              >
                Ahmed Shalayel
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', mb: 2 }}
              >
                 {t('checkOut.amount')}
              </Typography>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', color: 'text.grey', mb: 4 }}
              >
                 {t('common.sar')} 4,567.32
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', mb: 2 }}
              >
                 {t('checkOut.paymentDue')}
              </Typography>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', color: 'text.grey', mb: 4 }}
              >
                02 / June / 2022
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex' }}>
            <Typography
              variant='h5'
              component='h1'
              sx={{ fontWeight: '600', mb: 2, flex: '0.75' }}
            >
               {t('common.Items')}
            </Typography>

            <Typography
              variant='h5'
              component='h1'
              sx={{ fontWeight: '600', mb: 2 }}
            >
              {t('checkOut.amount')}
            </Typography>
          </Box>
          <Divider sx={{width:'80%'}} />
          <Box sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex' }}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '700', mb: 2, flex: '0.75' }}
              >
                Sketchers GOAL Pant
              </Typography>
              <Typography
                variant='h6'
                component='h1'
                sx={{ fontWeight: '600', mb: 2 }}
              >
                 {t('common.sar')} 2,278.66
              </Typography>
            </Box>

            <Typography
              variant='h6'
              component='h1'
              sx={{ fontWeight: '500', mb: 2 }}
            >
              2X {t('common.sar')} 1,139.33
            </Typography>
          </Box>
          <Typography variant='h1' component='h1' sx={{ mb: 3, mt: 5 }}>
          {t('checkOut.orderSummery')}
          </Typography>
          <Box sx={{ mt: 2, display: 'flex' }}>
            <Typography
              variant='h5'
              component='h1'
              sx={{ mb: 2, flex: '0.75' }}
            >
              {t('cart.subTotal')}
            </Typography>

            <Typography
              variant='h5'
              component='h1'
              sx={{ fontWeight: '700', mb: 2 }}
            >
              {t('common.sar')} 4,557.32
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'space-between', sm: 'flex-start' },
              pt: 7,
              pb: 5,
            }}
          >
            <Link href='#'>
              <Button
                variant='contained'
                sx={{ width: '219px', height: '44px' }}
                type='submit'
              >
                {t('checkOut.downloadInvoice')}
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Invoice;
