import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from '../../../layouts/MainLayout';
import { useCart } from '../../../contexts/CartContext';
import moment from 'moment';
import { useRouter } from 'next/router';
import AuthComponent from '../../../components/AuthComponent';

const InvoiceDetails = () => {
  const {t: CAT} = useTranslation('cart');
  const {t: CT} = useTranslation('common');
  const {t} = useTranslation('checkout');
  const { fetchInvoiceDetails, invoiceData } = useCart();
  const router = useRouter();

  const { invoiceId } = router.query;

  useEffect(() => {
    if (invoiceId)
    fetchInvoiceDetails(invoiceId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invoiceId]);

  return (
    <AuthComponent>
      <MainLayout>
        <Box component='section' sx={{ mt: 5 }}>
          <Container maxWidth={false} sx={{ maxWidth: 1050 }}>
            <Typography variant='h1' component='h1' sx={{ mb: 3, fontFamily: 'Urbanist'}}>
            {t('inovice')}  {invoiceData.id}
            </Typography>
            <Typography
              variant='h6'
              component='h1'
              sx={{ fontWeight: '700', mb: 3, color: 'text.grey', fontFamily: 'Urbanist' }}
            >
              {t('viewInvoice')}
            </Typography>
            <Grid container spacing='40px'>
              <Grid item xs={4}>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', mb: 2, fontFamily: 'Urbanist'}}
                >
                  {t('billTo')}
                </Typography>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', color: 'text.grey', mb: 4, fontFamily: 'Urbanist' }}
                >
                {invoiceData?.account?.title}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', mb: 2, fontFamily: 'Urbanist'}}
                >
                  {t('amount')}
                </Typography>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', color: 'text.grey', mb: 4 }}
                >
                  {CT('sar')} {invoiceData.total}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', mb: 2 }}
                >
                  {t('paymentDue')}
                </Typography>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', color: 'text.grey', mb: 4 }}
                >
                  {/* 02 / June / 2022 */}
                  {moment(invoiceData.date).format("DD/MM/YYYY ")}
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex' }}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', mb: 2, flex: '0.75' }}
              >
                {CT('items')}
              </Typography>

              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', mb: 2 }}
              >
                {t('amount')}
              </Typography>
            </Box>
            <Divider sx={{width:'80%'}} />
            <Box sx={{ mt: 2 }}>
            {invoiceData.invoiceItems.map((item) => {
                return (
                  <Box key={item.id}>
                    <Box sx={{ display: 'flex' }}>
                      <Typography
                        variant='h5'
                        component='h1'
                        sx={{ fontWeight: '700', mb: 2, flex: '0.75' }}
                      >
                        {item.item}
                      </Typography>
                      <Typography
                        variant='h6'
                        component='h1'
                        sx={{ fontWeight: '600', mb: 2 }}
                      >
                        {CT('sar')} {item.total}
                      </Typography>
                    </Box>

                    <Typography
                      variant='h6'
                      component='h1'
                      sx={{ fontWeight: '500', mb: 2 }}
                    >
                      {item.quantity} {CT('sar')} {item.unitPrice}
                    </Typography>
                    <Divider sx={{width:'80%', mt:1, mb:1}} />
                </Box>
                )
              })}
            </Box>
            <Typography variant='h1' component='h1' sx={{ mb: 3, mt: 5 }}>
            {t('orderSummery')}
            </Typography>
            <Box sx={{ mt: 2, display: 'flex' }}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ mb: 2, flex: '0.75' }}
              >
              {t('netValue')}
              </Typography>

              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '700', mb: 2 }}
              >
                {CT('sar')} {invoiceData.netValue}
              </Typography>
            </Box>
            <Box sx={{ mt: 2, display: 'flex' }}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ mb: 2, flex: '0.75' }}
              >
              {t('discount')}
              </Typography>

              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '700', mb: 2 }}
              >
                {CT('sar')} {invoiceData.discount}
              </Typography>
            </Box>
            <Box sx={{ mt: 2, display: 'flex' }}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ mb: 2, flex: '0.75' }}
              >
              {t('vatPercentage')}
              </Typography>

              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '700', mb: 2 }}
              >
                {CT('sar')} {invoiceData.vatPercentage}
              </Typography>
            </Box>
            <Box sx={{ mt: 2, display: 'flex' }}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ mb: 2, flex: '0.75' }}
              >
              {CAT('total')}
              </Typography>

              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '700', mb: 2 }}
              >
                {CT('sar')} {invoiceData.total}
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
              {/* <Button
                variant='contained'
                sx={{ width: '219px', height: '44px' }}
                type='submit'
              >
                {t('downloadInvoice')}
              </Button> */}
            </Box>
          </Container>
        </Box>
      </MainLayout>
    </AuthComponent>
  );
};

export default InvoiceDetails;
