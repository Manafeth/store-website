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
import { useTranslation } from 'next-i18next';
import { OrderData } from '../../../types/cart';
import { useCart } from '../../../contexts/CartContext';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';
import StatusText from '../../../components/StatusText';
import { invoiceStatusEnums, orderStatusEnums } from '../../../constants/statuses';
import paths from '../../../constants/paths';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllActiveOrders } from '../../../services/profile.services';

const OrderDetails = () => {
  const [t, i18n] = useTranslation();
  const { fetchOrderDetails, orderData } = useCart();
  const router = useRouter()
  const { orderId } = router.query

  useEffect(() => {
    if (orderId)
      fetchOrderDetails(orderId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId]);

  function renderOrderStatus(fieldValue: number) {
    // eslint-disable-next-line default-case
    switch (fieldValue) {
      case 1:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[0].labelAr : orderStatusEnums[0].label}
          color="buttons.blueDarker"
        />;
      case 2:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[1].labelAr : orderStatusEnums[1].label}
          color="warning.main"
        />;
      case 3:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[2].labelAr : orderStatusEnums[2].label}
          color="buttons.readyDarker"
        />;
      case 4:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[3].labelAr : orderStatusEnums[3].label}
          color="buttons.shippedDarker"
        />;

      case 5:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[4].labelAr : orderStatusEnums[4].label}
          color="success.main"
        />;
      case 6:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[5].labelAr : orderStatusEnums[5].label}
          color="buttons.cancelledDarker"
        />;
      case 7:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[6].labelAr : orderStatusEnums[6].label}
          color="buttons.cancelledDarker"
        />;

      case 8:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[7].labelAr : orderStatusEnums[7].label}
          color="warning.main"
        />;

      case 9:
        return <StatusText
          title={i18n.language === 'ar' ? orderStatusEnums[8].labelAr : orderStatusEnums[8].label}
          color="primary.main"
        />;
    }
  }
  function renderInvoiceStatus(fieldValue: number) {
    // eslint-disable-next-line default-case
    switch (fieldValue) {
      case 1:
        return <StatusText
          title={i18n.language === 'ar' ? invoiceStatusEnums[0].labelAr : orderStatusEnums[0].label}
          color="buttons.blueDarker"
        />;
      case 2:
        return <StatusText
          title={i18n.language === 'ar' ? invoiceStatusEnums[1].labelAr : orderStatusEnums[1].label}
          color="warning.main"
        />;
      case 3:
        return <StatusText
          title={i18n.language === 'ar' ? invoiceStatusEnums[2].labelAr : orderStatusEnums[2].label}
          color="buttons.readyDarker"
        />;
    }
  }
  
  
  return (
    <MainLayout>
      <Box component='section'>
        <Container maxWidth={false} sx={{ maxWidth: 1050, mt: 5 }}>
          <>
            <Typography
              variant='h2'
              component='h1'
              sx={{ fontWeight: 'bold', mb: 3 }}
            >
              {t('settings:orderDetails')}
            </Typography>

            <Typography
              variant='h2'
              component='h1'
              sx={{ fontWeight: '700', fontSize: '20px', mb: 3 }}
            >
              {t('checkout:inovice')} {orderData.invoiceId}
            </Typography>
            <Grid container spacing='40px'>
              <Grid item xs={6}>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', mb: 2 }}
                >
                  {t('common:date')}
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
                  {t('common:phoneNumber')}
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
                  {t('checkout:paymnetMethod')}
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
                  {t('checkout:paymentStatus')}
                </Typography>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', color: 'success.main', mb: 4 }}
                >
                   {renderInvoiceStatus(orderData.paymentStatus)}
                  {/* {orderData.paymentStatus} */}
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
                  {t('checkout:shippingMethod')}
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
                  {t('checkout:shippingStatus')}
                </Typography>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', color: 'success.main', mb: 4 }}
                >
                  {renderOrderStatus(orderData.status)}
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
                  {t('cat:total')}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant='h3'
                  component='h1'
                  sx={{ fontWeight: '800', mb: 2 }}
                >
                  {t('common:sar')} 4,567.32
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ width: '70%', mb: 4, mt: 4 }} />
            <Typography
              variant='h3'
              component='h1'
              sx={{ fontWeight: '600', mb: 2 }}
            >
              {t('checkout:orderTimeline')}
            </Typography>
            {orderData.orderChangeLogs.map((item) => {
              return (
                <OrderTimeline key={item.id} data={item} />
              )
            })}
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'space-between', sm: 'flex-start' },
                pt: 7,
                pb: 5,
              }}
            >
              {orderData.invoiceId ? (
                <Link href={paths.invoiceDetails(orderData.invoiceId)}>
                  <Button
                    variant='contained'
                    sx={{ width: '219px', height: '44px' }}
                    type='submit'
                  >
                    {t('settings:viewInvoice')}
                  </Button>
                </Link>
              ) : (
                <Button
                  variant='contained'
                  sx={{ width: '219px', height: '44px' }}
                  disabled
                >
                  {t('settings:viewInvoice')}
                </Button>
              )}
            </Box>
          </>
        </Container>
      </Box>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          orderId: "1"
        }
      },
      {
        params: {
          orderId: "2"
        }
      }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(locale && await serverSideTranslations(locale, ['settings', 'checkout', 'common', 'cart', 'auth']))
    },
    revalidate: 10,
  }
}

export default OrderDetails;
