import React, { useEffect, useState } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import OrderTimeline from '../../../components/OrderTimeline';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { OrderData } from '../../../types/cart';
import { useCartModal } from '../../../contexts/CartContext';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';

const OrderDetails = () => {
  const [t] = useTranslation();
  const [selectedOrder, setSelectedOrer] = useState<OrderData>();
  const { fetchOrderDetails, orderData } = useCartModal();

  useEffect(() => {
    fetchOrderDetails(286);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <MainLayout>
      <Box component='section'>
        <Container maxWidth={false} sx={{ maxWidth: 1050, mt: 5 }}>
          <Typography
            variant='h2'
            component='h1'
            sx={{ fontWeight: 'bold', mb: 3 }}
          >
            {t('settings.orderDetails')}
          </Typography>

          <Typography
            variant='h2'
            component='h1'
            sx={{ fontWeight: '700', fontSize: '20px', mb: 3 }}
          >
            {t('checkOut.inovice')} {orderData.invoiceId}
          </Typography>
          <Grid container spacing='40px'>
            <Grid item xs={6}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', mb: 2 }}
              >
                {t('common.date')}
              </Typography>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', color: 'text.grey', mb: 4 }}
              >
                {moment(orderData.orderDate).format('DD MMMM  YYYY hh:MM A')}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', mb: 2 }}
              >
                {t('common.phoneNumber')}
              </Typography>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', color: 'text.grey', mb: 4 }}
              >
                {orderData.phoneNumber}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing='40px'>
            <Grid item xs={6}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', mb: 2 }}
              >
                {t('checkOut.paymnetMethod')}
              </Typography>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', color: 'text.grey', mb: 4 }}
              >
                {orderData.paymentProvider}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', mb: 2 }}
              >
                {t('checkOut.paymentStatus')}
              </Typography>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', color: 'success.main', mb: 4 }}
              >
                {orderData.paymentStatus}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing='40px'>
            <Grid item xs={6}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', mb: 2 }}
              >
                {t('checkOut.shippingMethod')}
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Avatar
                  src={orderData.shipmentProviderImage?.orignialUrl || ''}
                  alt='category'
                  sx={{ width: '51', height: '38', borderRadius: 0 }}
                >
                  C
                </Avatar>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', mb: 2 }}
              >
                {t('checkOut.shippingStatus')}
              </Typography>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', color: 'success.main', mb: 4 }}
              >
                {orderData.status}
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ width: '70%', mb: 4 }} />
          <Grid container spacing='40px'>
            <Grid item xs={6}>
              <Typography
                variant='h3'
                component='h1'
                sx={{ fontWeight: '500', mb: 2 }}
              >
                {t('cart.total')}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant='h3'
                component='h1'
                sx={{ fontWeight: '800', mb: 2 }}
              >
                {t('common.sar')} 4,567.32
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ width: '70%', mb: 4, mt: 4 }} />
          <Typography
            variant='h3'
            component='h1'
            sx={{ fontWeight: '600', mb: 2 }}
          >
            {t('checkOut.orderTimeline')}
          </Typography>
          <OrderTimeline orderData={orderData} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'space-between', sm: 'flex-start' },
              pt: 7,
              pb: 5,
            }}
          >
            <Link href='/invoice'>
              <Button
                variant='contained'
                sx={{ width: '219px', height: '44px' }}
                type='submit'
              >
                {t('settings.viewInvoice')}
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default OrderDetails;
