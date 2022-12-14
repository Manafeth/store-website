import React, { useEffect } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import OrderTimeline from '../../../components/OrderTimeline';
import Button from '@mui/material/Button';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useCart } from '../../../contexts/CartContext';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';
import StatusText from '../../../components/StatusText';
import { invoiceStatusEnums, orderStatusEnums } from '../../../constants/statuses';
import paths from '../../../constants/paths';
import { useRouter } from 'next/router';
import AuthComponent from '../../../components/AuthComponent';
import StcPayment from '../../../components/StcPayment';
import BankPayment from '../../../components/BankPayment';
import LoadingButton from '@mui/lab/LoadingButton';
import { LOADING } from '../../../constants';
import { useCommon } from '../../../contexts/CommonContext';
import RepaymentComponent from '../../../components/RepaymentComponent';

const OrderDetails = () => {
  const {t: CAT} = useTranslation('cart');
  const {t: CT} = useTranslation('common');
  const {t:ST} = useTranslation('settings');
  const {t, lang} = useTranslation('checkout');
  const { fetchOrderDetails, orderData, createPayment, paymentStatus, fetchPaymentProviders } = useCart();
  const router = useRouter()
  const { storeInfo } = useCommon()
  const { orderId } = router.query

  function handlePayment() {
    if (orderId)
      createPayment({ orderId: orderData.id })
  }

  useEffect(() => {
    if (orderId)
      fetchOrderDetails(orderId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId, lang]);

  useEffect(() => {
    if (orderData.transactionStatus === 2)
      fetchPaymentProviders();
  }, [orderData])
  

  const invoiceStatus = invoiceStatusEnums.find((item) => +item.value === orderData.paymentStatus);
  const orderStatus = orderStatusEnums.find((item) => +item.value === orderData.status);
  const isInActive = [2, 3].includes(orderData.paymentStatus) || [6, 7, 8, 9].includes(orderData.status);
  return (
    <AuthComponent>
      <MainLayout>
        <Container maxWidth={false} sx={{ maxWidth: 1050, mt: 5 }}>
          <Grid container spacing={{ xs: 2, lg: 5 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant='h1'
                sx={{ fontWeight: 'bold', mb: 3,fontFamily: lang === 'en' ? 'Urbanist' : '' }}
              >
                {ST('orderDetails')}
              </Typography>

              <Typography
                variant='h2'
                sx={{ fontWeight: '700', fontSize: '20px', mb: 3,fontFamily: lang === 'en' ? 'Urbanist' : '' }}
              >
                {t('inovice')} {orderData.invoiceId}
              </Typography>
              <Grid container spacing={{xs: 2, md: 5}}>
                <Grid item xs={6}>
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: '600', mb: 2,fontFamily: lang === 'en' ? 'Urbanist' : '' }}
                  >
                    {CT('date')}
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: '600', color: 'text.grey', mb: 4,fontFamily: lang === 'en' ? 'Urbanist' : '' }}
                  >
                    {moment(orderData.orderDate).format('DD MMM  YYYY hh:MM A')}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: '600', mb: 2,fontFamily: lang === 'en' ? 'Urbanist' : '' }}
                  >
                    {CT('phoneNumber')}
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: '600', color: 'text.grey', mb: 4 ,fontFamily: lang === 'en' ? 'Urbanist' : ''}}
                  >
                    {orderData.phoneNumber}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={{xs: 2, md: 5}}>
                <Grid item xs={6}>
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: '600', mb: 2 ,fontFamily: lang === 'en' ? 'Urbanist' : ''}}
                  >
                    {t('paymnetMethod')}
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: '600', color: 'text.grey', mb: 4,fontFamily: lang === 'en' ? 'Urbanist' : '' }}
                  >
                    {orderData.paymentProvider}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: '600', mb: 2,fontFamily: lang === 'en' ? 'Urbanist' : '' }}
                  >
                    {t('paymentStatus')}
                  </Typography>
                
                  <StatusText
                    title={invoiceStatus?.label ? CT(invoiceStatus?.label) : ''}
                    color={invoiceStatus?.color || ''}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={{xs: 2, md: 5}}>
                <Grid item xs={6}>
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: '600', mb: 2,fontFamily: lang === 'en' ? 'Urbanist' : '' }}
                  >
                    {t('shippingMethod')}
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
                    sx={{ fontWeight: '600', mb: 2,fontFamily: lang === 'en' ? 'Urbanist' : '' }}
                  >
                    {t('shippingStatus')}
                  </Typography>
                  <StatusText
                    title={orderStatus?.label ? CT(orderStatus?.label) : ''}
                    color={orderStatus?.color || ''}
                  />
                </Grid>
              </Grid>
              <Divider sx={{ width: '70%', mb: 4 }} />
              <Grid container spacing={{xs: 2, md: 5}}>
                <Grid item xs={6}>
                  <Typography
                    variant='h5'
                    sx={{ fontWeight: '500', mb: 2,fontFamily: lang === 'en' ? 'Urbanist' : '' }}
                  >
                    {CAT('total')}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant='h3'
                    sx={{ fontWeight: '900', mb: 2,fontFamily: lang === 'en' ? 'Urbanist' : '',color:'grey.1800' }}
                  >
                    {CT('sar')} {orderData.totalCost}
                  </Typography>
                </Grid>
              </Grid>
              {orderData.providerType === 2 && [1, 2, 4].includes(orderData.providerCategory) && orderData.transactionStatus !== 2 && !isInActive && (
                <LoadingButton variant='contained' onClick={handlePayment} loading={paymentStatus === LOADING} sx={{
                   "&:hover": {
                  backgroundColor: "primary.hover"
                }}}>
                 {t('payConfirmPayment')}
                </LoadingButton>
              )}
              <Divider sx={{ width: '70%', mb: 2, mt: 4 }} />
            </Grid>
            {!isInActive && (orderData.providerType === 2 && orderData.providerCategory === 3) && orderData.transactionStatus !== 2 && (
              <Grid item xs={12} md={6} sx={{ borderLeft: '1px solid #E7E7E7' }}>
                <StcPayment />
              </Grid>
            )}

            {orderData.providerType === 1 && orderData.transactionStatus !== 2 && (
              <Grid item xs={12} md={6} sx={{ borderLeft: '1px solid #E7E7E7' }}>
                <BankPayment orderData={orderData} />
              </Grid>
            )}

            {orderData.transactionStatus === 2 && orderData.paymentStatus !== 2 && (
              <Grid item xs={12} md={6} sx={{ borderLeft: '1px solid #E7E7E7' }}>
                <RepaymentComponent />
              </Grid>
            )}
          </Grid>
          
          <Typography
            variant='h5'
            sx={{ fontWeight: '600', my: 2,fontFamily: lang === 'en' ? 'Urbanist' : '' }}
          >
            {t('orderTimeline')}
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
                  sx={{ width: '219px', height: '44px',
                  "&:hover": {
                    backgroundColor: "primary.hover"
                  } }}
                >
                  {ST('viewInvoice')}
                </Button>
              </Link>
            ) : (
              <Button
                variant='contained'
                sx={{ width: '219px', height: '44px' }}
                disabled
              >
                {ST('viewInvoice')}
              </Button>
            )}
          </Box>
        </Container>
      </MainLayout>
    </AuthComponent>
  );
};

export default OrderDetails;
