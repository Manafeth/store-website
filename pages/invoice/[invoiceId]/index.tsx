import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useTranslation } from "next-i18next";
import MainLayout from '../../../layouts/MainLayout';
import { useCart } from '../../../contexts/CartContext';
import moment from 'moment';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPaths, GetStaticProps } from 'next';

const InvoiceDetails = () => {
  const [t] = useTranslation();
  const { fetchInvoiceDetails, orderAndInvoice,invoiceData } = useCart();
  const router = useRouter();

  const { invoiceId } = router.query;

  useEffect(() => {
    if (invoiceId)
    fetchInvoiceDetails(invoiceId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invoiceId]);

  return (
    <MainLayout>
      <Box component='section' sx={{ mt: 5 }}>
        <Container maxWidth={false} sx={{ maxWidth: 1050 }}>
          <Typography variant='h1' component='h1' sx={{ mb: 3 }}>
          {t('checkout:inovice')}  {invoiceData.id}
          </Typography>
          <Typography
            variant='h6'
            component='h1'
            sx={{ fontWeight: '700', mb: 3, color: 'text.grey' }}
          >
            {t('checkout:viewInvoice')}
          </Typography>
          <Grid container spacing='40px'>
            <Grid item xs={4}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', mb: 2 }}
              >
                 {t('checkout:billTo')}
              </Typography>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', color: 'text.grey', mb: 4 }}
              >
               {invoiceData?.account?.title}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', mb: 2 }}
              >
                 {t('checkout:amount')}
              </Typography>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', color: 'text.grey', mb: 4 }}
              >
                 {t('common:sar')} {invoiceData.total}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant='h5'
                component='h1'
                sx={{ fontWeight: '600', mb: 2 }}
              >
                 {t('checkout:paymentDue')}
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
               {t('common:items')}
            </Typography>

            <Typography
              variant='h5'
              component='h1'
              sx={{ fontWeight: '600', mb: 2 }}
            >
              {t('checkout:amount')}
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
                      {t('common:sar')} {item.total}
                    </Typography>
                  </Box>

                  <Typography
                    variant='h6'
                    component='h1'
                    sx={{ fontWeight: '500', mb: 2 }}
                  >
                    {item.quantity} {t('common:sar')} {item.unitPrice}
                  </Typography>
                  <Divider sx={{width:'80%', mt:1, mb:1}} />
               </Box>
              )
            })}
          </Box>
          <Typography variant='h1' component='h1' sx={{ mb: 3, mt: 5 }}>
          {t('checkout:orderSummery')}
          </Typography>
          <Box sx={{ mt: 2, display: 'flex' }}>
            <Typography
              variant='h5'
              component='h1'
              sx={{ mb: 2, flex: '0.75' }}
            >
             {t('checkout:netValue')}
            </Typography>

            <Typography
              variant='h5'
              component='h1'
              sx={{ fontWeight: '700', mb: 2 }}
            >
              {t('common:sar')} {invoiceData.netValue}
            </Typography>
          </Box>
          <Box sx={{ mt: 2, display: 'flex' }}>
            <Typography
              variant='h5'
              component='h1'
              sx={{ mb: 2, flex: '0.75' }}
            >
             {t('checkout:discount')}
            </Typography>

            <Typography
              variant='h5'
              component='h1'
              sx={{ fontWeight: '700', mb: 2 }}
            >
              {t('common:sar')} {invoiceData.discount}
            </Typography>
          </Box>
          <Box sx={{ mt: 2, display: 'flex' }}>
            <Typography
              variant='h5'
              component='h1'
              sx={{ mb: 2, flex: '0.75' }}
            >
            {t('checkout:vatPercentage')}
            </Typography>

            <Typography
              variant='h5'
              component='h1'
              sx={{ fontWeight: '700', mb: 2 }}
            >
              {t('common:sar')} {invoiceData.vatPercentage}
            </Typography>
          </Box>
          <Box sx={{ mt: 2, display: 'flex' }}>
            <Typography
              variant='h5'
              component='h1'
              sx={{ mb: 2, flex: '0.75' }}
            >
             {t('cart:total')}
            </Typography>

            <Typography
              variant='h5'
              component='h1'
              sx={{ fontWeight: '700', mb: 2 }}
            >
              {t('common:sar')} {invoiceData.total}
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
              {t('checkout:downloadInvoice')}
            </Button> */}
          </Box>
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
          invoiceId: "1"
        }
      },
      {
        params: {
          invoiceId: "2"
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

export default InvoiceDetails;
