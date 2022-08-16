import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import aramexIcon from '../../assets/images/icons/aramex-icon.png';
import OrderTimeline from '../../components/OrderTimeline';
import Button from '@mui/material/Button';
import Link from 'next/link';

const OrderDetails = () => {
  return (
    <MainLayout>
      <>
        <Box component='section'>
          <Container
            maxWidth={false}
            sx={{ maxWidth: 1050, px: { xs: 2, lg: 7.5 }, mt: 5 }}
          >
            <Typography
              variant='h2'
              component='h1'
              sx={{ fontWeight: 'bold', mb: 3 }}
            >
              Order details
            </Typography>
            <Typography
              variant='h2'
              component='h1'
              sx={{ fontWeight: '700', fontSize: '20px', mb: 3 }}
            >
              Invoice #33221
            </Typography>
            <Grid container spacing='40px'>
              <Grid item xs={6}>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', mb: 2 }}
                >
                  Date
                </Typography>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', color: 'text.grey', mb: 4 }}
                >
                  Apr 5, 2022, 02:50:23 PM
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', mb: 2 }}
                >
                  Phone number
                </Typography>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', color: 'text.grey', mb: 4 }}
                >
                  554018552
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
                  Paymnet method
                </Typography>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', color: 'text.grey', mb: 4 }}
                >
                  URWAY
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', mb: 2 }}
                >
                  Payment status
                </Typography>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', color: 'success.main', mb: 4 }}
                >
                  PAID
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
                  Shipping method
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <Image
                    src={aramexIcon}
                    alt='aramex icon'
                    width='51'
                    height='38'
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', mb: 2 }}
                >
                  Shipping status
                </Typography>
                <Typography
                  variant='h5'
                  component='h1'
                  sx={{ fontWeight: '600', color: 'success.main', mb: 4 }}
                >
                  Delivered
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
                  Total
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant='h3'
                  component='h1'
                  sx={{ fontWeight: '800', mb: 2 }}
                >
                  SAR 4,567.32
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ width: '70%', mb: 4, mt: 4 }} />
            <Typography
              variant='h3'
              component='h1'
              sx={{ fontWeight: '600', mb: 2 }}
            >
              Order timeline
            </Typography>
            <OrderTimeline />
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
                  View invoice
                </Button>
              </Link>
            </Box>
          </Container>
        </Box>
      </>
    </MainLayout>
  );
};

export default OrderDetails;
